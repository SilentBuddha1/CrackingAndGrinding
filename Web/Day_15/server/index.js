const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const db = require('./config/database');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads';
    // Create uploads directory if it doesn't exist
    require('fs').mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// POST endpoint to create a new notice
app.post('/api/notices', upload.fields([
  { name: 'files', maxCount: 10 },
  { name: 'images', maxCount: 10 }
]), async (req, res) => {
  try {
    const { title, description, links } = req.body;
    
    // Insert notice
    const noticeQuery = 'INSERT INTO notices (title, description, links) VALUES (?, ?, ?)';
    db.query(noticeQuery, [title, description, links], (err, result) => {
      if (err) {
        console.error('Error creating notice:', err);
        return res.status(500).json({ error: 'Error creating notice' });
      }

      const noticeId = result.insertId;
      const filePromises = [];

      // Handle files
      if (req.files) {
        // Handle document files
        if (req.files.files) {
          req.files.files.forEach(file => {
            const fileQuery = 'INSERT INTO notice_files (notice_id, file_type, file_path, original_name) VALUES (?, ?, ?, ?)';
            filePromises.push(
              new Promise((resolve, reject) => {
                db.query(fileQuery, [noticeId, 'file', file.path, file.originalname], (err) => {
                  if (err) reject(err);
                  else resolve();
                });
              })
            );
          });
        }

        // Handle image files
        if (req.files.images) {
          req.files.images.forEach(file => {
            const fileQuery = 'INSERT INTO notice_files (notice_id, file_type, file_path, original_name) VALUES (?, ?, ?, ?)';
            filePromises.push(
              new Promise((resolve, reject) => {
                db.query(fileQuery, [noticeId, 'image', file.path, file.originalname], (err) => {
                  if (err) reject(err);
                  else resolve();
                });
              })
            );
          });
        }
      }

      Promise.all(filePromises)
        .then(() => {
          res.status(201).json({
            message: 'Notice created successfully',
            noticeId
          });
        })
        .catch(err => {
          console.error('Error saving files:', err);
          res.status(500).json({ error: 'Error saving files' });
        });
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET endpoint to fetch all notices
app.get('/api/notices', (req, res) => {
  const query = `
    SELECT n.*, 
           GROUP_CONCAT(DISTINCT CASE WHEN nf.file_type = 'file' THEN JSON_OBJECT('id', nf.id, 'path', nf.file_path, 'name', nf.original_name) END) as files,
           GROUP_CONCAT(DISTINCT CASE WHEN nf.file_type = 'image' THEN JSON_OBJECT('id', nf.id, 'path', nf.file_path, 'name', nf.original_name) END) as images
    FROM notices n
    LEFT JOIN notice_files nf ON n.id = nf.notice_id
    GROUP BY n.id
    ORDER BY n.created_at DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching notices:', err);
      return res.status(500).json({ error: 'Error fetching notices' });
    }

    // Parse the concatenated JSON strings
    const notices = results.map(notice => ({
      ...notice,
      files: notice.files ? JSON.parse(`[${notice.files}]`) : [],
      images: notice.images ? JSON.parse(`[${notice.images}]`) : []
    }));

    res.json(notices);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 