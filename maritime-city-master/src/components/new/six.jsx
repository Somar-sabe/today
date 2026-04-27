import React from "react";

export default function PhilosophyLightSection() {
  return (
    <section className="sec" aria-label="The philosophy">
      <div className="wrap">
        {/* LEFT */}
        <div className="left">
          <div className="eyebrow">THE PHILOSOPHY</div>

          <h2 className="title">
            Finding Balance in Every <br />
            Horizon
          </h2>

          <p className="body">
            Developed by <strong>Beyond Developments</strong> (an Omiyat
            subsidiary), HADO comprises three elegant 21-storey towers. Inspired
            by the Japanese concept of <strong>Ikigai</strong>, it emphasizes
            balance, purpose, and natural harmony.
          </p>

          <div className="features" aria-label="Highlights">
            <div className="feat">
              <span className="ico" aria-hidden="true">
                {/* waves */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8c2 2 4 2 6 0s4-2 6 0 4 2 6 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 12c2 2 4 2 6 0s4-2 6 0 4 2 6 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </span>
              <div>
                <div className="featTitle">6KM BEACHFRONT</div>
                <div className="featSub">BLUE FLAG SANDS</div>
              </div>
            </div>

            <div className="feat">
              <span className="ico" aria-hidden="true">
                {/* leaf */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 4c-7 1-12 5-14 10-1 2-1 4 0 6 2 1 4 1 6 0 5-2 9-7 10-14Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 20c2-6 7-10 14-16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <div className="featTitle">WELLNESS FOCUSED</div>
                <div className="featSub">YOGA &amp; SPA UNITS</div>
              </div>
            </div>

            <div className="feat">
              <span className="ico" aria-hidden="true">
                {/* expand */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5H5v4M15 19h4v-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 9l6-6M19 15l-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <div className="featTitle">LOW DENSITY</div>
                <div className="featSub">ULTRA-PRIVATE</div>
              </div>
            </div>

            <div className="feat">
              <span className="ico" aria-hidden="true">
                {/* calendar */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 3v3M17 3v3M4 9h16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <div className="featTitle">Q3 2029</div>
                <div className="featSub">HANDOVER DATE</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="right" aria-label="Architecture image">
          <div className="imgCard">
            {/* Use img so you can pass alt and see missing file issues */}
            <img
              className="img"
              src="amenities-2.jpg" /* <-- replace */
              alt="HADO Architecture"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .sec {
          background: #f7f2ea; /* warm off-white */
          padding: clamp(44px, 6vw, 84px) 0;
        }

        .wrap {
          width: min(1200px, calc(100% - 90px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(26px, 4vw, 64px);
          align-items: center;
        }

        .left {
          padding-top: 10px;
        }

        .eyebrow {
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(196, 160, 86, 0.95);
          font-weight: 700;
          margin-bottom: 16px;
        }

        .title {
          margin: 0 0 18px 0;
          font-weight: 300;
          letter-spacing: -0.02em;
          font-size: clamp(36px, 3.4vw, 56px);
          line-height: 1.05;
          color: rgba(10, 10, 10, 0.92);
        }

        .body {
          margin: 0;
          max-width: 560px;
          font-size: 14px;
          line-height: 1.75;
          color: rgba(20, 20, 20, 0.62);
        }

        .body strong {
          color: rgba(10, 10, 10, 0.85);
          font-weight: 700;
        }

        .features {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px 42px;
          max-width: 520px;
        }

        .feat {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .ico {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          color: rgba(196, 160, 86, 0.95);
          margin-top: 1px;
        }

        .featTitle {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 800;
          color: rgba(10, 10, 10, 0.8);
        }

        .featSub {
          margin-top: 6px;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(10, 10, 10, 0.38);
        }

        /* RIGHT image card */
        .right {
          display: flex;
          justify-content: flex-end;
        }

        .imgCard {
          width: min(540px, 44vw);
          aspect-ratio: 1 / 1;
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 22px 42px rgba(0, 0, 0, 0.12);
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .wrap {
            width: min(1200px, calc(100% - 44px));
            grid-template-columns: 1fr;
          }

          .right {
            justify-content: flex-start;
          }

          .imgCard {
            width: min(680px, 100%);
            aspect-ratio: 16 / 10;
            margin-top: 10px;
          }
        }

        @media (max-width: 560px) {
          .wrap {
            width: calc(100% - 24px);
          }

          .features {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }
      `}</style>
    </section>
  );
}
