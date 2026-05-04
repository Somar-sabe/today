'use client'

import React from "react";
import { useRouter } from "next/navigation";

// 👉 import your reusable form component
import ContactForm from "../contactForm/contactForm";

const ContactSection = () => {
  const router = useRouter();

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

        {/* RIGHT → YOUR COMPONENT */}
        <div className="formCard">
          <ContactForm />
        </div>

      </div>

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
          color: white;
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
          
          padding: 3rem;
        }

        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .title {
            font-size: 2.4rem;
          }

          .statsRow {
            flex-direction: column;
            gap: 1.5rem;
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