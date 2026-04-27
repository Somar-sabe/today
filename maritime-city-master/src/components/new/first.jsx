import React from "react";

export default function HadoHero({ openPopup }) {
  return (
    <section className="hero" aria-label="HADO hero">
      <div className="media" aria-hidden="true" />
      <div className="shade" aria-hidden="true" />

      <div className="content">
        <div className="left">
          <div className="kickerRow">
            <span className="kickerLine" />
            <span className="kickerText">DUBAI ISLANDS</span>
          </div>

          <h1 style={{color:"white"}} className="title">
            HA
            <br />
            DO.
          </h1>

          <p className="desc">
            Where Japanese <em>ikigai</em> meets the edge of the Arabian Gulf. A tripartite
            residential icon in the Slora district.
          </p>

          <a onClick={openPopup} className="cta" href="#discover">
            <span >DISCOVER LIFESTYLE</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>

          <div className="stats" role="list" aria-label="Key stats">
            <div className="stat" role="listitem">
              <div className="statTop">01 MIN</div>
              <div className="statBottom">TO BEACH</div>
            </div>
            <div className="stat" role="listitem">
              <div className="statTop">6 KM</div>
              <div className="statBottom">COASTLINE</div>
            </div>
            <div className="stat" role="listitem">
              <div className="statTop">21</div>
              <div className="statBottom">STORIES</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: clamp(560px, 85vh, 880px);
          overflow: hidden;
          background: #000;
          color: #fff;
          border-radius: 0;
        }

        /* Background photo (right side like the screenshot) */
        .media {
          position: absolute;
          inset: 0;
          background-image: url("/photo-1582719478250-c89cae4dc85b.avif"); /* <-- replace */
          background-size: cover;
          background-position: 75% center;
          transform: scale(1.02);
          filter: saturate(1.05) contrast(1.02);
        }

        /* Big left-to-right dark gradient */
        .shade {
          position: absolute;
          inset: 0;
          background: radial-gradient(1200px 700px at 78% 50%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.25) 45%, rgba(0, 0, 0, 0.75) 70%, rgba(0, 0, 0, 0.94) 100%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.96) 0%, rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0.35) 60%, rgba(0, 0, 0, 0.12) 78%, rgba(0, 0, 0, 0) 100%);
        }

        .content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          padding: clamp(24px, 5vw, 64px);
        }

        .left {
          width: min(560px, 90vw);
        }

        .kickerRow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .kickerLine {
          width: 44px;
          height: 1px;
          background: rgba(196, 160, 86, 0.85);
          opacity: 0.9;
        }

        .kickerText {
          font-size: 11px;
          letter-spacing: 0.22em;
          color: rgba(196, 160, 86, 0.9);
          text-transform: uppercase;
          font-weight: 600;
        }

        .title {
          font-size: clamp(78px, 8.2vw, 130px);
          line-height: 0.92;
          letter-spacing: -0.02em;
          margin: 0 0 18px 0;
          font-weight: 300;
        }

        .desc {
          max-width: 420px;
          margin: 0 0 26px 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13.5px;
          line-height: 1.55;
        }

        .desc em {
          font-style: italic;
          color: rgba(255, 255, 255, 0.78);
        }

        .cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0 12px;
          color: rgba(196, 160, 86, 0.95);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 11px;
          font-weight: 700;
          position: relative;
        }

        .cta:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: rgba(196, 160, 86, 0.45);
          transform: scaleX(0.72);
          transform-origin: left;
          transition: transform 180ms ease, opacity 180ms ease;
          opacity: 0.75;
        }

        .cta:hover:after {
          transform: scaleX(1);
          opacity: 1;
        }

        .arrow {
          font-size: 14px;
          transform: translateY(-1px);
        }

        .stats {
          margin-top: clamp(22px, 4vh, 40px);
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          max-width: 520px;
        }

        .statTop {
          font-size: 12px;
          letter-spacing: 0.18em;
          color: rgba(196, 160, 86, 0.9);
          text-transform: uppercase;
          font-weight: 700;
        }

        .statBottom {
          margin-top: 6px;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.52);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero {
            min-height: 86vh;
          }

          .media {
            background-position: 72% center;
          }

          .shade {
            /* stronger for readability on small screens */
            background: radial-gradient(900px 500px at 75% 40%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.88) 80%, rgba(0, 0, 0, 0.96) 100%),
              linear-gradient(90deg, rgba(0, 0, 0, 0.97) 0%, rgba(0, 0, 0, 0.92) 55%, rgba(0, 0, 0, 0.45) 75%, rgba(0, 0, 0, 0.1) 88%, rgba(0, 0, 0, 0) 100%);
          }

          .left {
            width: 100%;
            max-width: 520px;
          }

          .desc {
            max-width: 360px;
          }

          .stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }
        }

        @media (max-width: 420px) {
          .title {
            font-size: 72px;
          }
          .stats {
            grid-template-columns: 1fr 1fr;
          }
          .stats .stat:nth-child(3) {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </section>
  );
}
