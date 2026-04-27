import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactPopup = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.trim().length < 5) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      Name: formData.get("fullName"),
      Phone: phone,
      Email: formData.get("email"),
      Message: `Preferred communication: ${formData.get(
        "communication"
      )}, Best time: ${formData.get("time")}`,
      ContactType: "https://promotion.altairre.ae/maritime-city-ar",
    };

    try {
      const response = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);

        const link = document.createElement("a");
        link.href = "/brochure.pdf";
        link.download = "brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch {
      alert("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="popupOverlay" onClick={onClose}>
        <div
          className="popupContent"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="closeBtn" onClick={onClose}>×</button>

          {submitted ? (
            <div className="thankYouMessage">
              <h3>Thank you!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>

              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="formGroup">
                <label htmlFor="phoneNumber">Phone Number</label>
                <PhoneInput
                  country={"ae"}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                    id: "phoneNumber",
                  }}
                  specialLabel=""
                />
              </div>

              <div className="formGroup">
                <label htmlFor="communication">
                  Best method to contact you?
                </label>
                <select id="communication" name="communication">
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="telegram">Telegram</option>
                  <option value="wechat">WeChat</option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="time">Best time to call you?</label>
                <input type="text" id="time" name="time" />
              </div>

              <div className="submitWrapper">
                <button type="submit" className="submitButton" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .popupOverlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popupContent {
          width: 100%;
          max-width: fit-content;
          background: white;
          padding: 25px 30px;
          border-radius: 12px;
          position: relative;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .closeBtn {
          position: absolute;
          right: 15px;
          top: 10px;
          border: none;
          background: transparent;
          font-size: 30px;
          cursor: pointer;
          color: #555;
        }
      `}</style>
    </>
  );
};

export default ContactPopup;
