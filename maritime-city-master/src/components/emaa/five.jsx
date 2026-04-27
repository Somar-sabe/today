import React from "react";

const OasisHero = ({ openPopup }) => {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="oasis-hero">
      <div className="hero-gradient"></div>

      <div className="hero-wrapper">
        {/* TEXT AREA */}
        <div className="hero-text">
          <h1>
            Emaar The Oasis – Dubai’s Most
            <br /> Prestigious Waterfront Community
          </h1>

          <button onClick={openPopup} className="hero-button">
            Register your interest →
          </button>
        </div>

        {/* PRICE BOX */}
        <div className="price-box">
          <div className="price-card left">
            <h3 style={{color:"white"}}>AED 8.5M</h3>
            <p style={{color:"white"}}>Starting price</p>
            <p style={{color:"white"}} className="small-text">Booking from AED 850K (USD 231K)</p>
          </div>

          <div className="price-card right">
            <h3>80/20</h3>
            <p>Payment Plan</p>
            <p className="small-text">
              4 to 7 bedroom
              <br />
              Standalone Villas
            </p>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .oasis-hero {
          width: 100%;
          position: relative;
          height: 650px;
          background-image: url('/assets/images/emaar-the-oasis-villas-for-sale-1.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .hero-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 0, 0, 0.15) 60%,
            transparent
          );
        }

        .hero-wrapper {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 60px;
          position: relative;
          z-index: 10;
        }

        .hero-text {
          padding-top: 150px;
          max-width: 600px;
          color: white;
        }

        .hero-text h1 {
          font-size: 48px;
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 20px;
          color: white;
        }

        .hero-button {
          background: #6be48b;
          color: #000;
          border: none;
          padding: 14px 24px;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .price-box {
          padding-top: 150px;
          display: flex;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 350px;
        }

        .price-card {
          flex: 1;
          padding: 20px;
        }

        .price-card.left {
          background-color: #bc986b;
          color: white;
          height: fit-content;
        }

        .price-card.right {
          background-color: white;
          color: #bc986b;
          height: fit-content;
        }

        .price-card h3 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }

        .price-card p {
          margin: 5px 0 20px;
        }

        .small-text {
          font-size: 14px;
          opacity: 0.9;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .hero-wrapper {
            flex-direction: column;
            align-items: flex-start;
            padding: 0 20px;
          }

          .price-box {
            padding-top: 40px;
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 32px;
          }

          .price-box {
            width: 100%;
          }

          .price-card {
            width: 45%;
            max-width: 180px;
            padding: 12px;
            flex-direction: row; /* keep horizontal */
          }

          .price-card h3 {
            font-size: 20px;
          }

          .price-card p,
          .price-card .small-text {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 26px;
          }

          .price-card {
            width: 48%;
            max-width: 160px;
            padding: 10px;
          }

          .price-card h3 {
            font-size: 18px;
          }

          .price-card p,
          .price-card .small-text {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
};

export default OasisHero;
