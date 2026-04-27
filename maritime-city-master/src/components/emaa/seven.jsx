import React from "react";

const amenitiesData = [
  { text: "Crystal Lagoons & Water Canals" },
  { text: "Lush Green Parks & Landscaped Trails" },
  { text: "Exclusive Clubhouses & Wellness Centers" },
  { text: "Retail Promenade & Dining Outlets" },
  { text: "Children’s Play Areas & Family Zones" },
  { text: "24/7 Security & Gated Privacy" },
];

const AmenitiesSection = () => {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="amenities-container">
      <h2>Amenities of The Oasis by Emaar Properties</h2>
      <p>
        The Oasis by Emaar offers resort–style amenities like lagoons, parks, and
        clubhouses. Residents enjoy a peaceful, nature–filled lifestyle with leisure
        and wellness at its core.
      </p>

      <div className="amenities-grid">
        {amenitiesData.map((item, index) => (
          <div key={index} className="amenity-card">
            <div className="check-icon">✓</div>
            <span>{item.text}</span>
          </div>
        ))}

        <div className="call-card">
          <span>Need Assistance? Schedule a Quick Call with Our Team</span>
          <button onClick={scrollToContactForm}>Request A Call Back →</button>
        </div>
      </div>

      <style jsx>{`
        .amenities-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: 'Times New Roman', Times, serif;
        }

        h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 2rem;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .amenity-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1rem;
          min-height: 100px;
        }

        .check-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #2f5d56;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2f5d56;
          font-weight: bold;
        }

        .call-card {
          background-color: #2f5d56;
          color: #fff;
          border-radius: 8px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100px;
          grid-column: span 2;
        }

        .call-card span {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .call-card button {
          padding: 0.5rem 1rem;
          background-color: #b8d8a7;
          color: #000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          width: fit-content;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .amenities-grid {
            grid-template-columns: 1fr;
          }

          .call-card {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AmenitiesSection;
