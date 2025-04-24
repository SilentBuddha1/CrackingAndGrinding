const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Add your MySQL password here
  database: 'notices_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
  
  // Create tables if they don't exist
  const createNoticesTable = `
    CREATE TABLE IF NOT EXISTS notices (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      links TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const createFilesTable = `
    CREATE TABLE IF NOT EXISTS notice_files (
      id INT AUTO_INCREMENT PRIMARY KEY,
      notice_id INT,
      file_type ENUM('file', 'image') NOT NULL,
      file_path VARCHAR(255) NOT NULL,
      original_name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (notice_id) REFERENCES notices(id) ON DELETE CASCADE
    )
  `;

  db.query(createNoticesTable, (err) => {
    if (err) throw err;
    console.log('Notices table created or already exists');
  });

  db.query(createFilesTable, (err) => {
    if (err) throw err;
    console.log('Notice files table created or already exists');
  });
});

module.exports = db; 