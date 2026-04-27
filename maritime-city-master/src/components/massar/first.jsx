import React from "react";
import ContactForm from "../contactForm/contactForm";

export default function MasaarHero({ openPopup }) {
  return (
    <div className="masaar-hero">
      <style>{`
        .masaar-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          background-image: url('/img/65557192-0-Masaar-villas.webp');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .masaar-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
        }

        .masaar-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        @media (min-width: 992px) {
          .masaar-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

                @media (max-width: 992px) {
                        .masaar-phone input {
          padding: 12px;
          flex: 1;
          border: none;
          outline: none;
          width:50vw !important;
          margin-bottom: 0px;
        }
        .masaar-input,
        .masaar-select {
          width: 250px !important;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 12px;
          font-size: 15px;
        }
                    input[type=text], input[type=email], input[type=password], input[type=submit], textarea {
    width: 100% !important;
    height:35px !important;
}
        }

        .masaar-left {
          color: white;
          max-width: 500px;
          text-align: center;
        }

        @media (max-width: 992px) {
                .darwn{
        display:none;
        }
}
        @media (min-width: 992px) {
         .masaar-form {
         display:none !important;

      }
          .masaar-left {
            text-align: left;
          }
        }

        .masaar-left h1 {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.3;
          color: white;
        }

        @media (min-width: 768px) {
          .masaar-left h1 {
            font-size: 40px;
            color: white;
          }
        }

        .masaar-left p {
          margin-top: 12px;
          font-size: 18px;
          color: white;
        }

        .masaar-highlight {
          margin-top: 20px;
          font-size: 26px;
          font-weight: bold;
          color: #FFD700 !important;
        }

        .masaar-form {
          background: rgba(255, 255, 255, 0.9);
          padding: 25px;
          width: 100%;
          max-width: 380px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          flex-direction: column;
    justify-content: center;
    align-items: center;
    display:flex;
        }
    

        .masaar-form p {
          text-align: center;
          color: #333;
          margin-bottom: 15px;
        }

        .masaar-input,
        .masaar-select {
          width: 300px !important;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 12px;
          font-size: 15px;
        }
          input[type=text], input[type=email], input[type=password], input[type=submit], textarea {
    width: 100%;
    height:35px !important;
}

        .masaar-phone {
          display: flex;
          border: 1px solid #ccc;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 14px;
          width:90%;
        }

        .masaar-phone select {
          padding: 6px 12px;
          background: #f1f1f1;
          border-right: 1px solid #ccc;
        }

        .masaar-phone input {
          padding: 12px;
          flex: 1;
          border: none;
          outline: none;
          width:250px !important;
          margin-bottom: 0px;
        }

        .masaar-button {
          width: 100%;
          padding: 14px;
          background: #FFD700;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .masaar-button:hover {
          background: #f1c40f;
        }
      `}</style>

      <div className="masaar-overlay"></div>

      <div className="masaar-container">
        {/* Left Text */}
        <div className="masaar-left">
          <h1>
            FREE HOLD PROPERTIES <br /> FOR ALL NATIONALITIES
          </h1>
          <p>
            2 – 5 Bedroom Townhouses & Villas <br /> For Sustainable Living in Sharjah
          </p>
          <p className="masaar-highlight">Pay AED 90,000 on Booking</p>
        </div>

        {/* Right Form */}
        <div className="masaar-form">
          <p>
            Please enter your details below and we <br /> will give you a callback.
          </p>


          <button onClick={openPopup} className="masaar-button">Register Your Interest</button>
        </div>
                <div className="darwn" >
<ContactForm />
</div>
      </div>
    </div>
  );
}