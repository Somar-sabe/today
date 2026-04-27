// pages/admin/dashboard.js
import { useState } from 'react';

export default function Dashboard() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    image: '',
    developerLogo: '',
    bedrooms: '',
    price: '',
    delivery: '',
    salesStart: '',
    href: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitProject = async () => {
    const res = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    alert('Project added!');
  };

  return (
    <div className="container">
      <h2>Main page Projects</h2>
      <div className="form">
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <input name="image" placeholder="Image URL" onChange={handleChange} />
      <input name="developerLogo" placeholder="Developer Logo URL" onChange={handleChange} />
      <input name="bedrooms" placeholder="Bedrooms" onChange={handleChange} />
      <input name="price" placeholder="Price (e.g., 18M AED)" onChange={handleChange} />
      <input name="delivery" placeholder="Delivery" onChange={handleChange} />
      <input name="salesStart" placeholder="Sales Start" onChange={handleChange} />
      <input name="href" placeholder="Project URL (slug)" onChange={handleChange} />
      <button onClick={submitProject}>Add Project</button>
      </div>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 40px auto;
          padding: 30px;
          border-radius: 12px;
          background: #f9f9f9;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 24px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        input {
          padding: 10px 12px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 6px;
          outline: none;
          transition: border-color 0.3s;
        }
        input:focus {
          border-color: #0070f3;
        }
        button {
          padding: 12px;
          background: #0070f3;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background: #0059c1;
        }
      `}</style>
    </div>
  );
}
