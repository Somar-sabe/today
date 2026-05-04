'use client'

import React from "react";
import { useRouter } from "next/navigation";
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

        {/* RIGHT */}
        <div className="formCard">
          <ContactForm />
        </div>

      </div>

      <style jsx>{`
        .section {
          background: #0a192f;
          color: white;
          padding: 6rem 2rem;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          align-items: center;
        }

        .contentSide {
          width: 100%;
        }

        .badge {
          display: inline-flex;
          gap: 0.5rem;
          font-size: 0.85rem;
          opacity: 0.8;
          margin-bottom: 1rem;
        }

        .title {
          font-size: 4.2rem;
          font-family: serif;
          line-height: 1.1;
          margin: 0;
        }

        .italicAccent {
          font-style: italic;
          color: #c5a358;
        }

        .description {
          margin-top: 1rem;
          font-size: 1rem;
          line-height: 1.7;
          opacity: 0.85;
        }

        .statsRow {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .statItem {
          border-left: 1px solid #1f2937;
          padding-left: 1rem;
          min-width: 140px;
        }

        .statValue {
          display: block;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .statLabel {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .formCard {
          width: 100%;
          padding: 3rem;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .title {
            font-size: 3rem;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .section {
            padding: 3rem 1rem;
          }

          .container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .title {
            font-size: 2.2rem;
          }

          .description {
            font-size: 0.95rem;
          }

          .statsRow {
            flex-direction: column;
            gap: 1rem;
          }

          .statItem {
            border-left: none;
            border-bottom: 1px solid #1f2937;
            padding-left: 0;
            padding-bottom: 0.8rem;
          }

          .formCard {
            padding: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;