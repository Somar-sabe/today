import React from "react";

const InterestAr = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="interest-section">
      <h2>هل أنت مهتم؟</h2>
      <p>سجّل اهتمامك هنا !!!</p>
  

      <style jsx>{`
        .interest-section {
          text-align: center;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          direction: rtl; /* Arabic Right-to-Left */
        }

        .interest-section h2 {
          font-size: 32px;
          margin-bottom: 10px;
          color: #222;
        }

        .interest-section p {
          font-size: 18px;
          margin-bottom: 20px;
          color: #555;
        }

        .interest-section button {
          padding: 12px 28px;
          font-size: 16px;
          font-weight: 600;
          background-color: #bc986b;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .interest-section button:hover {
          background-color: #a97f4d;
        }
      `}</style>
    </section>
  );
};

export default InterestAr;
