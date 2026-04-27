import React from "react";

export default function EmaarOasisSection({ openPopup }) {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="section-wrapper">
        {/* Header */}
        <div className="text-grid">
          <div className="text-box">
            <h5 className="title">Exclusive Villa–Only Community</h5>
            <p className="desc">
              The Oasis by Emaar is a rare, master-planned development dedicated
              entirely to standalone villas—no apartments or townhouses. This
              ensures unmatched privacy, low density, and a peaceful environment
              tailored for upscale family living.
            </p>
          </div>

          <div className="text-box">
            <h5 className="title">Ideal for investors and homeowners</h5>
            <p className="desc">
              The Oasis by Emaar offers luxury villas designed for both refined
              living and high investment potential. Whether you are seeking a
              private sanctuary or a smart long-term asset, it delivers the best
              of both worlds.
            </p>
          </div>
        </div>

        {/* Image Card */}
        <div className="image-card">
          <img
            src="/assets/images/the-oasis-villas-by-emaar-2.jpg"
            alt="Oasis Villas"
          />

          {/* Close Icon */}
        

          {/* Register Button */}
          <button className="register-btne" onClick={openPopup}>
            Register your interest →
          </button>
        </div>
      </div>

      {/* ------------------- CUSTOM CSS ------------------- */}
      <style>{`
        .section-wrapper {
          width: 100%;
          background: #F2F5F1;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .text-grid {
          max-width: 1200px;
          width: 100%;
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }

        .text-box {
          flex: 1;
        }

        .title {
          font-size: 22px;
          font-weight: 600;
          border-left: 4px solid #6FCF58;
          padding-left: 12px;
          margin-bottom: 10px;
        }

        .desc {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        .image-card {
          max-width: 1200px;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0px 6px 25px rgba(0,0,0,0.12);
        }

        .image-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .close-btn {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #C3F4A4;
          color: #222;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          cursor: pointer;
          font-weight: bold;
        }

        .register-btne {
          position: absolute;
          left: 20px;
          bottom: 20px;
          background: #B8F28A;
          padding: 12px 22px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          color: #333;
          transition: 0.3s ease;
        }

        .register-btn:hover {
          opacity: 0.9;
        }

        /* ------------------- RESPONSIVE ------------------- */
        @media (max-width: 900px) {
          .text-grid {
            flex-direction: column;
          }

          .title {
            font-size: 20px;
          }

          .desc {
            font-size: 13px;
          }

          .register-btn {
            font-size: 14px;
            padding: 10px 18px;
          }
        }

        @media (max-width: 600px) {
          .register-btne {
            left: 15px;
            bottom: 15px;
            padding: 9px 16px;
            font-size: 13px;
          }

          .close-btn {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
