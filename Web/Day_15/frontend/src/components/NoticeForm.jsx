import React, { useState } from 'react';
import axios from 'axios';
import './NoticeForm.css';

const NoticeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    files: [],
    images: [],
    links: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      [type]: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('links', formData.links);

      formData.files.forEach(file => {
        formDataToSend.append('files', file);
      });

      formData.images.forEach(image => {
        formDataToSend.append('images', image);
      });

      const response = await axios.post('http://localhost:3000/api/notices', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage('Notice published successfully!');
      setFormData({
        title: '',
        description: '',
        files: [],
        images: [],
        links: ''
      });
    } catch (error) {
      setMessage('Error publishing notice. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="notice-form-container">
      <h2>Publish Notice</h2>
      <form onSubmit={handleSubmit} className="notice-form">
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Notice Title*"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Notice Description*"
            required
          />
        </div>

        <div className="form-group">
          <label>Attach Files (PDF, Docs, etc.)</label>
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, 'files')}
            accept=".pdf,.doc,.docx,.txt"
          />
        </div>

        <div className="form-group">
          <label>Attach Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, 'images')}
            accept="image/*"
          />
        </div>

        <div className="form-group">
          <input
            type="url"
            name="links"
            value={formData.links}
            onChange={handleInputChange}
            placeholder="Relevant Links (if any)"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Publishing...' : 'Publish Notice'}
        </button>

        {message && <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>}
      </form>
    </div>
  );
};

export default NoticeForm; 