import React from "react";

export default function HadoByBeyondHeros({ openPopup }) {
  return (
    <section className="hero" aria-label="HADO by Beyond hero">
      {/* Background image */}
      <div className="bg" aria-hidden="true" />
      {/* Soft dark overlay */}
      <div className="overlay" aria-hidden="true" />

      <div className="content">
        <div className="kicker">BEYOND DEVELOPMENTS PRESENTS</div>

        <h1 className="title">
          <span className="tMain">HADO</span>
          <span className="tBy">by</span>
          <span className="tMain">Beyond</span>
        </h1>

        <p className="desc">
          A New Era of Beachfront Living in SIØRA, Dubai Islands. Where the
          Japanese philosophy of Ikigai meets the azure horizon.
        </p>

        <div className="actions" role="group" aria-label="Hero actions">
          <button onClick={openPopup} className="btn primary" type="button">
            DOWNLOAD CATALOG
          </button>
          <button onClick={openPopup} className="btn ghost" type="button">
            VIEW LOCATION
          </button>
        </div>

        <div className="scrollHint" aria-hidden="true">
          <div className="scrollText">SCROLL</div>
          <div className="scrollLine" />
        </div>
      </div>

      {/* Chat bubble */}
      <button className="chat" aria-label="Chat">
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
          display: grid;
          place-items: center;
          overflow: hidden;
          background: #000;
          color: #fff;
        }

        /* Replace with your image */
        .bg {
          position: absolute;
          inset: 0;
          background-image: url("photo-1512917774080-9991f1c4c750.avif"); /* <-- replace */
          background-size: cover;
          background-position: center;
          transform: scale(1.03);
          filter: contrast(1.03) saturate(1.04) brightness(0.95);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              900px 520px at 50% 40%,
              rgba(0, 0, 0, 0.05) 0%,
              rgba(0, 0, 0, 0.35) 55%,
              rgba(0, 0, 0, 0.62) 100%
            ),
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.25) 0%,
              rgba(0, 0, 0, 0.36) 55%,
              rgba(0, 0, 0, 0.48) 100%
            );
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 84px 18px 64px;
          width: min(980px, 92vw);
        }

        .kicker {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(196, 160, 86, 0.95);
          margin-bottom: 18px;
          font-weight: 700;
        }

        .title {
          margin: 0;
          font-weight: 300;
          letter-spacing: -0.02em;
          font-size: clamp(44px, 6.2vw, 92px);
          line-height: 1.03;
          display: inline-flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tMain {
          color: rgba(255, 255, 255, 0.95);
        }

        .tBy {
          font-family: "Georgia", "Times New Roman", serif;
          font-style: italic;
          font-weight: 400;
          color: rgba(196, 160, 86, 0.95);
          transform: translateY(2px);
        }

        .desc {
          margin: 18px auto 0;
          width: min(720px, 92vw);
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.65);
        }

        .actions {
          margin-top: 22px;
          display: inline-flex;
          gap: 14px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          height: 44px;
          padding: 0 18px;
          border: 1px solid transparent;
          cursor: pointer;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 800;
        }

        .btn.primary {
          background: rgba(196, 160, 86, 0.95);
          color: #0b0b0b;
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
        }

        .btn.ghost {
          background: rgba(0, 0, 0, 0.25);
          color: rgba(255, 255, 255, 0.9);
          border-color: rgba(255, 255, 255, 0.22);
        }

        .btn:active {
          transform: translateY(1px);
        }

        /* Scroll hint */
        .scrollHint {
          margin-top: 30px;
          display: grid;
          place-items: center;
          gap: 10px;
          opacity: 0.75;
        }

        .scrollText {
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
        }

        .scrollLine {
          width: 1px;
          height: 26px;
          background: rgba(255, 255, 255, 0.25);
        }

        /* Chat */
        .chat {
          position: absolute;
          right: 26px;
          bottom: 22px;
          z-index: 3;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.9);
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .content {
            padding-top: 74px;
          }
          .btn {
            width: min(320px, 92vw);
          }
          .actions {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
