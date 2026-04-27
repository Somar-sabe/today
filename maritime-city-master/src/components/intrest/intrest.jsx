import React from "react";

const Interest = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="interest-section">
      <h2>Dont Miss This Project, Register Your Interest?</h2>
      <p>Fill in the form to get the brouchure,<br></br>floor plans,latest availability,and<br></br>launch offers before they gone!!!</p>
  

      <style jsx>{`
      .bh{
      background-color:}
        .interest-section {
          width:100%;
          text-align: center;
          padding: 60px 20px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content: center;

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
          background-color: #0056b3;
        }
      `}</style>
    </section>
  );
};

export default Interest;
