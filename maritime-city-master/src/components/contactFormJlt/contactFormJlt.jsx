import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      Message: `Preferred communication: ${formData.get("communication")}, Best time: ${formData.get("time")}`,
      ContactType: "https://promotion.altairre.ae/Jumeirah-Residences-Emirates-Towers",
    };
  console.log("📦 Payload being sent to API:", payload);
    try {
      const response = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);

        // Download brochure
        const link = document.createElement("a");
        link.href = "/brochure.pdf";
        link.download = "brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const errorData = await response.json();
        console.error("Form submission failed:", errorData);
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="thankYouMessage">
          <h3>Thank you!</h3>
          <p>Your message has been sent successfully. Please check your downloads for the brochure.</p>
        </div>
      ) : (
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Your Full Name" required />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>

          <div className="formGroup">
            <label htmlFor="phoneNumber">Phone Number</label>
            <PhoneInput
              country={'ae'}
              value={phone}
              onChange={setPhone}
              inputProps={{
                name: 'phoneNumber',
                required: true,
                id: 'phoneNumber',
              }}
              specialLabel=""
            />
          </div>

          <div className="formGroup">
            <label htmlFor="communication">Best method to contact you?</label>
            <div className="selectWrapper">
              <select id="communication" name="communication">
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="telegram">Telegram</option>
                <option value="wechat">WeChat</option>
              </select>
              <span className="selectIcon">&#9662;</span>
            </div>
          </div>

          <div className="formGroup">
            <label htmlFor="time">What is the best time to call you?</label>
            <input type="time" id="time" name="time" />
          </div>

          <div className="submitWrapper">
            <button type="submit" className="submitButton" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit →"}
            </button>
          </div>
        </form>
      )}

      <style jsx>{`
        .contactForm {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px 30px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
          font-family: 'Arial', sans-serif;
        }

        .formGroup {
          margin-bottom: 10px;
        }

        .formGroup label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #333;
        }

        .formGroup input[type="text"],
        .formGroup input[type="email"],
        .formGroup input[type="time"],
        .formGroup select {
          width: 100%;
          padding: 12px 14px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-sizing: border-box;
          transition: border-color 0.3s;
        }

        .formGroup input:focus,
        .formGroup select:focus {
          border-color: #bc986b;
          outline: none;
        }

        .selectWrapper {
          position: relative;
        }

        .selectWrapper select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 100%;
        }

        .selectIcon {
          position: absolute;
      right: 8%;          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 14px;
          color: #666;
        }

        .submitWrapper {
          text-align: center;
        }

        .submitButton {
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

        .submitButton:hover {
          background-color: #0056b3;
        }

        .submitButton:disabled {
          background-color: #aaa;
          cursor: not-allowed;
        }

        .thankYouMessage {
          max-width: 600px;
          margin: 40px auto;
          padding: 40px;
          background: #f8f9fa;
          border-radius: 12px;
          text-align: center;
        }

        .thankYouMessage h3 {
          color: #28a745;
        }
      `}</style>
    </>
  );
};

export default ContactForm;
