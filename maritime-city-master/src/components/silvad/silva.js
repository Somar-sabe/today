'use client';

import Image from 'next/image';
import React from 'react';

const TravelTimesSectionsss = () => {
  return (
    <>
      <style>{`
        .travel-sectionss {
          width: 100%;
          background-color:rgba(238, 238, 238, 1.0);
          padding: 80px 0;
        }

        .travel-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .travel-content {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .travel-content {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .travel-image {
          flex: 1;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .travel-image .image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .travel-text {
          flex: 1;
        }

        .travel-text h1 {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 24px;
          color: #222;
        }

        .travel-text ul {
          list-style: none;
          padding: 0;
          margin-bottom: 32px;
        }

        .travel-text ul li {
          font-size: 18px;
          color: #444;
          margin-bottom: 12px;
        }

        .btn {
          display: inline-block;
          background-color: black;
          color: white;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .btn:hover {
          background-color: #333;
        }
      `}</style>

      <section className="travel-sectionss">
        <div className="travel-container">
          <div className="travel-content">
            {/* Image Column */}


            {/* Text Column */}
            <div className="travel-text">
              <h1>Advantages</h1>
              <ul>
                <li>▪ Games room with billiards and table tennis</li>
                <li>▪ Multi-purpose event and community rooms</li>
                <li>▪ 24/7 concierge and security services</li>
                <li>▪ Electric vehicle charging stations</li>
                <li>▪ Smart building systems and high-speed elevators</li>
                <li>▪ Secure underground parking with valet</li>
              </ul>
              <a
                href="#contact-form"
                className="btn"
              >
                ENQUIRE NOW
              </a>
            </div>
            <div className="travel-image">
              <Image
                src="/img/silva4.jpeg"
                alt="Travel location image"
                width={1600}
                height={930}
                className="image"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelTimesSectionsss;
