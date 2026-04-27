import React from 'react';

const EnquireSection = () => {
  return (
    <div className="section-wrapper">
      {/* ENQUIRE NOW Button */}


      {/* Header Section */}
      <div className="content-section">
        <h1 className="main-heading">
        Siva Creek Harbour
        </h1>
        <p className="description">
        Step into a world where stunning Creek views, breathtaking skyline vistas, and lush green landscapes come together to redefine luxury living.
       At SILVA, every detail is designed to offer you a serene waterside lifestyle, vibrant retail experiences, and the perfect balance of nature and city energy.
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
          font-weight: 400;
          text-align: justify;
          margin-bottom: 40px;
          color:black;
          font-size: large;
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
