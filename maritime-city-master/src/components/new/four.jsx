import React from "react";

export default function DestinationHero({ openPopup }) {
  return (
    <section className="hero" aria-label="Destination hero">
      {/* Background image */}
      <div className="bg" aria-hidden="true" />
      {/* Dark vignette overlay */}
      <div className="vignette" aria-hidden="true" />

      {/* Center content */}
      <div className="content">
        <div className="kicker">THE DESTINATION</div>

        <h1 className="title" style={{color:"white"}}>
          SIØRA, ISLAND B<span className="dot">.</span>
        </h1>

        <p className="desc">
          A low-density wellness community within Dubai Islands. 6km of Blue Flag
          beachfront integrated into 140,000 sqm of Japanese-inspired landscaping.
        </p>

        <div className="stats" aria-label="Travel times">
          <div className="stat">
            <div className="line" aria-hidden="true" />
            <div className="label">AIRPORT</div>
            <div className="value">19 MIN</div>
          </div>

          <div className="stat">
            <div className="line" aria-hidden="true" />
            <div className="label">DOWNTOWN</div>
            <div className="value">26 MIN</div>
          </div>

          <div className="stat">
            <div className="line" aria-hidden="true" />
            <div className="label">METRO</div>
            <div className="value">10 MIN</div>
          </div>

          <div className="stat">
            <div className="line" aria-hidden="true" />
            <div className="label">BEACH</div>
            <div className="value">01 MIN</div>
          </div>
        </div>
      </div>

      {/* small chat icon (bottom-right) */}
      <button onClick={openPopup} className="chat" aria-label="Chat">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 14c0 1.1-.4 2.1-1 2.9-.9 1.1-2.4 1.9-4 1.9H9l-4 3v-3.6C3.8 18.4 3 16.8 3 15V8c0-2.2 1.8-4 4-4h9c2.2 0 4 1.8 4 4v6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 86vh;
          background: #000;
          color: #fff;
          overflow: hidden;
        }

        /* Replace with your image */
        .bg {
          position: absolute;
          inset: 0;
          background-image: url("photo-1518684079-3c830dcef090.avif"); /* <-- replace */
          background-size: cover;
          background-position: center;
          filter: grayscale(1) contrast(1.05) brightness(0.75);
          transform: scale(1.03);
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(900px 520px at 50% 42%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 55%, rgba(0, 0, 0, 0.88) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.78) 100%);
          opacity: 0.95;
        }

        /* NAV */
        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .navInner {
          height: 62px;
          width: min(1320px, calc(100% - 56px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 220px 1fr 220px;
          align-items: center;
          gap: 18px;
        }

        .brand {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .logo {
          letter-spacing: 0.32em;
          font-size: 18px;
          font-weight: 500;
        }

        .by {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: rgba(196, 160, 86, 0.95);
          font-weight: 700;
        }

        .links {
          display: flex;
          justify-content: center;
          gap: clamp(14px, 2.2vw, 34px);
          align-items: center;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          white-space: nowrap;
        }

        .links a {
          color: inherit;
          text-decoration: none;
          opacity: 0.85;
        }

        .links a:hover {
          opacity: 1;
        }

        .lang {
          margin-left: 6px;
          background: transparent;
          border: 0;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.22em;
          font-size: 10px;
          cursor: pointer;
        }

        .cta {
          justify-self: end;
          height: 38px;
          padding: 0 16px;
          border: 0;
          cursor: pointer;
          background: rgba(196, 160, 86, 0.9);
          color: #0b0b0b;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 800;
        }

        /* CONTENT */
        .content {
          position: relative;
          z-index: 2;
          min-height: calc(86vh - 62px);
          display: grid;
          place-items: center;
          padding: clamp(42px, 6vw, 80px) 18px 70px;
          text-align: center;
        }

        .kicker {
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(196, 160, 86, 0.9);
          margin-bottom: 14px;
        }

        .title {
          margin: 0;
          font-weight: 300;
          letter-spacing: -0.02em;
          font-size: clamp(44px, 6.6vw, 92px);
          line-height: 1.05;
        }

        .dot {
          opacity: 0.95;
        }

        .desc {
          width: min(720px, 92vw);
          margin: 18px auto 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 13.5px;
          line-height: 1.7;
        }

        /* STATS */
        .stats {
          width: min(980px, 92vw);
          margin-top: clamp(34px, 6vh, 54px);
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(14px, 2.4vw, 34px);
          align-items: start;
        }

        .stat {
          position: relative;
          padding-top: 10px;
        }

        .line {
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin-bottom: 14px;
        }

        .label {
          font-size: 9px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          margin-bottom: 8px;
        }

        .value {
          font-family: "Georgia", "Times New Roman", serif;
          font-style: italic;
          font-size: 18px;
          letter-spacing: 0.06em;
          color: rgba(196, 160, 86, 0.95);
        }

        /* Chat button */
        .chat {
          position: absolute;
          right: 26px;
          bottom: 22px;
          z-index: 3;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.9);
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .navInner {
            grid-template-columns: 1fr auto;
          }
          .links {
            display: none; /* like many sites – collapses to burger in real app */
          }
        }

        @media (max-width: 640px) {
          .navInner {
            width: calc(100% - 26px);
          }
          .cta {
            padding: 0 12px;
            height: 36px;
            font-size: 9px;
          }
          .stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-top: 34px;
          }
        }
      `}</style>
    </section>
  );
}
