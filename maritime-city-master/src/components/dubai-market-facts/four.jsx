'use client'

import React from 'react';

const ResilienceSection = () => {
  return (
    <section className="section">
      <div className="container">
        
        {/* LEFT */}
        <div className="visualColumn">
          <div className="circle">
            <div>
              <span className="percentage">96%</span>
              <p className="circleSubtext">
                of Iranian Missile & Drone<br />
                attacks intercepted by<br />
                UAE Air Defence — March<br />
                2026
              </p>
            </div>
          </div>

          <p className="quote">
            &ldquo;Dubai was tested in real time — and it held.&rdquo;
          </p>
        </div>

        {/* RIGHT */}
        <div className="contentColumn">
          <div className="badge">
            <span>★</span>
            <span>Dubai Resilience Story</span>
          </div>

          <h2 className="title">
            Tested Under <span className="accentItalic">Pressure.</span><br />
            Proven in Practice.
          </h2>

          <p className="description">
            The 2026 regional conflict reached the UAE borders. For the first time, Dubai 
            faced direct attack. Here is what the data shows — and why experienced 
            investors stayed the course.
          </p>

          <div className="statsList">
            <StatItem 
              title="96% of Attacks Intercepted" 
              body="The UAE layered air defence performed at a global benchmark level." 
            />
            <StatItem 
              title="DIFC Company Registrations: +59%" 
              body="Investors don&apos;t leave Dubai; they consolidate here." 
            />
            <StatItem 
              title="AED 55.18B Transactions" 
              body="Strong market fundamentals even before peak tension." 
            />
            <StatItem 
              title="Luxury Recovery Accelerating" 
              body="Prime areas recovering fastest post-ceasefire." 
            />
          </div>
        </div>

      </div>

      {/* ✅ RESPONSIVE FIX */}
      <style jsx>{`
        .section {
          background: #0a192f;
          color: white;
          padding: 4rem 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 4rem;
          align-items: center;
        }

        .visualColumn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .circle {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          border: 1px solid rgba(156,163,175,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .percentage {
          font-size: 7rem;
          color: #c5a358;
          font-family: serif;
        }

        .circleSubtext {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: white;
        }

        .quote {
          font-style: italic;
          font-size: 1.25rem;
          text-align: center;
        }

        .title {
          font-size: 3.5rem;
          font-family: serif;
          color:white !important;
        }

        .accentItalic {
          font-style: italic;
          color: #c5a358;
        }

        .statsList {
          margin-top: 2rem;
          border-top: 1px solid #1f2937;
          padding-top: 1.5rem;
        }

        .statItem {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        /* 🔥 MOBILE FIX */
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .circle {
            width: 260px;
            height: 260px;
            padding: 1.5rem;
          }

          .percentage {
            font-size: 4rem;
          }

          .title {
            font-size: 2.2rem;
            color:white !important;
          }

          .quote {
            font-size: 1rem;
          }

          .section {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

const StatItem = ({ title, body }) => (
  <div className="statItem">
    <span style={{ color: '#4a90e2' }}>✦</span>
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
);

export default ResilienceSection;