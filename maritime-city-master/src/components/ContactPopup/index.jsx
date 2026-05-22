'use client'

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";

// 1. Destructure the parent props (isOpen and onClose) right here
const ContactForm = ({ isOpen, onClose }) => {
  const router = useRouter();

  const [phone, setPhone] = useState("");
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
      ContactType: "https://promotion.altairre.ae/maritime-city-ar",
    };

    try {
      const response = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        if (onClose) onClose(); // 2. Safely trigger parent close event

        // ✅ REDIRECT TO Thankyou PAGE
        router.push("/Thankyou");
        return;
      }

      alert("There was an error submitting the form. Please try again.");
    } catch (error) {
      alert("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 3. Use the incoming parent state prop `isOpen` instead of internal state
  if (!isOpen) return null;

  return (
    <>
      {/* 4. Trigger the parent onClose function when backdrop or X button is clicked */}
      <div className="popupOverlay" onClick={onClose}>
        <div
          className="popupContent"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="closeBtn" onClick={onClose}>
            ×
          </button>

          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Full Name</label>
              <input name="fullName" required />
            </div>

            <div className="formGroup">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="formGroup">
              <label>Phone Number</label>
              <PhoneInput
                country={"ae"}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  required: true,
                }}
              />
            </div>

            <div className="formGroup">
              <label>Best method to contact you?</label>
              <select name="communication">
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Best time to call you?</label>
              <input name="time" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit →"}
            </button>
          </form>
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
          z-index: 999999; /* Added extreme safety z-index overlay layer */
        }

        .popupContent {
          background: white;
          padding: 30px;
          border-radius: 12px;
          position: relative;
          color: #333; /* Explicitly set contrast coloring */
        }

        .closeBtn {
          position: absolute;
          right: 10px;
          top: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ContactForm;