import React from 'react';

const EnquireSection = () => {
  return (
    <div className="section-wrapper">
      {/* ENQUIRE NOW Button */}


      {/* Header Section */}
      <div className="content-section">
        <h1 className="main-heading">
        Grand Polo Club and Resorts Prime Location
        </h1>
        <p className="description">
        Emaar Properties, a name synonymous with luxury and excellence, is pleased to present its newest project, Grand Polo Club and Resort. This elite resort project is set to be built in Dubai Investment Park 2 (DIP 2), near the stunning Oasis, and promises to redefine luxury living in Dubai.
        </p>
      </div>
      <div className="button-container">
        <a href="#contact-form" className="button">ENQUIRE NOW</a>
      </div>
      {/* CSS in the same file */}
      <style jsx>{`
        .section-wrapper {
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }
        .button-container {
          text-align: center;
          margin-bottom: 30px;
        }
        .button {
          padding: 12px 24px;
          background-color: #000;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          border-radius: 4px;
        }
        .content-section {
          max-width: 900px;
          margin: 0 auto;
        }
        .main-heading {
          font-size: 28px;
          text-align: center;
          margin-bottom: 20px;
        }
        .description {
          font-weight: 300;
          text-align: justify;
          margin-bottom: 40px;
        }
        .two-column {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }
        .column {
          flex: 1;
          min-width: 300px;
        }
        .column h3 {
          margin-bottom: 15px;
        }
        .column ul {
          list-style: disc;
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
};

export default EnquireSection;
