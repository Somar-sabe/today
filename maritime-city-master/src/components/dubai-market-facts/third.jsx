'use client'

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

const ContactSection = () => {
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
      Name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      Phone: phone,
      Email: formData.get("email"),
      Message: `Budget: ${formData.get("budget")}, Interest: ${formData.get("interest")}`,
      ContactType: "https://promotion.altairre.ae/maritime-city-en",
    };

    try {
      const response = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/Thankyou");
      } else {
        alert("Error submitting form.");
      }
    } catch {
      alert("Network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section">
      <div className="container">

        {/* LEFT */}
        <div className="contentSide">
          <div className="badge">
            <span>★</span>
            <span>Altair Real Estate · Dubai 2026</span>
          </div>

          <h2 className="title">
            Your Gateway to<br />
            <span className="italicAccent">Exceptional</span><br />
            Dubai Properties
          </h2>

          <p className="description">
            While global uncertainty reshapes capital flows, Dubai fundamentals remain unshaken 
            — and Altair expert team is here to guide you through every step.
          </p>

          <div className="statsRow">
            <div className="statItem">
              <span className="statValue">AED 917B</span>
              <span className="statLabel">Transactions in 2025</span>
            </div>
            <div className="statItem">
              <span className="statValue">8.1%</span>
              <span className="statLabel">Avg. Rental Yield</span>
            </div>
            <div className="statItem">
              <span className="statValue">0%</span>
              <span className="statLabel">Capital Gains Tax</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="formCard">
          <form onSubmit={handleSubmit}>

            <div className="inputGroupRow">
              <input name="firstName" placeholder="First name" required />
              <input name="lastName" placeholder="Last name" required />
            </div>

            <input name="email" placeholder="Email" required />

            <PhoneInput
              country={'ae'}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: '100%', paddingLeft: '48px' }}
              containerStyle={{ width: '100%' }}
            />

            <div className="inputGroupRow">
              <input name="budget" placeholder="Budget" />
              <input name="interest" placeholder="Interest" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register My Interest —"}
            </button>

            <div className="actionRow">
              <button type="button">WhatsApp</button>
              <button type="button">Call</button>
            </div>

          </form>
        </div>

      </div>

      {/* ✅ REAL RESPONSIVE FIX */}
      <style jsx>{`
        .section {
          background: #0a192f;
          color: white;
          padding: 6rem 2rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 4rem;
          align-items: center;
        }

        .title {
          font-size: 4.5rem;
          font-family: serif;
          color:white;
        }

        .italicAccent {
          font-style: italic;
          color: #c5a358;
        }

        .statsRow {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
        }

        .statItem {
          border-left: 1px solid #1f2937;
          padding-left: 1.5rem;
        }

        .formCard {
          border: 1px solid #1f2937;
          padding: 3rem;
        }

        .inputGroupRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .actionRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        input {
          width: 100%;
          padding: 0.8rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid #1f2937;
          color: white;
        }

        button {
          width: 100%;
          padding: 1rem;
          margin-top: 1rem;
          background: #c5a358;
          border: none;
          cursor: pointer;
        }

        /* 🔥 MOBILE FIX */
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .title {
            font-size: 2.4rem;
            color:white;
          }

          .statsRow {
            flex-direction: column;
            gap: 1.5rem;
          }

          .inputGroupRow {
            grid-template-columns: 1fr;
          }

          .actionRow {
            grid-template-columns: 1fr;
          }

          .formCard {
            padding: 1.5rem;
          }

          .section {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;