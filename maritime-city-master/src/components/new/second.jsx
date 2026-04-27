import React from "react";

export default function PhilosophySection() {
  return (
    <section className="sec" aria-label="The philosophy section">
      <div className="wrap">
        {/* LEFT */}
        <div className="left">
          <div className="eyebrow">THE PHILOSOPHY</div>

          <h2 className="title">
            <span className="t1">ARCHITECTURE</span>
            <span  className="t2">
              <span className="as">as</span> RESONANCE.
            </span>
          </h2>

          <p className="body">
            Developed by <strong>Beyond Developments</strong>, HADO is a sanctuary
            of connection, well-being, and belonging. Inspired by the unseen
            resonance where motion and stillness coexist, the three towers open
            toward the water to capture light and horizon.
          </p>

          <div className="features" role="list" aria-label="Key features">
            <div className="feature" role="listitem">
              <span className="vline" aria-hidden="true" />
              <span className="ico" aria-hidden="true">
                {/* leaf-ish */}
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
              <span className="label">IKIGAI INSPIRED WELLNESS</span>
            </div>

            <div className="feature muted" role="listitem">
              <span className="vline" aria-hidden="true" />
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
                  <path
                    d="M3 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
              <span className="label">BLUE FLAG BEACHFRONT</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right" aria-label="Image collage">
          <div className="photo p1" aria-label="Residence photo 1" />
          <div className="photo p2" aria-label="Residence photo 2" />

          <div className="stamp" aria-hidden="true">
            <div className="ring" />
            <div className="stampText">
              <span>BEYOND · HADO · BEYOND · HADO ·</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sec {
          background: #050505;
          color: #fff;
          padding: clamp(42px, 6vw, 86px) 0;
        }

        .wrap {
          width: min(1200px, calc(100% - 80px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(28px, 4vw, 60px);
          align-items: center;
          position: relative;
        }

        /* LEFT */
        .eyebrow {
          font-size: 10px;
          letter-spacing: 0.24em;
          color: rgba(196, 160, 86, 0.85);
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .title {
          margin: 0 0 18px 0;
          font-weight: 300;
          letter-spacing: -0.02em;
        }

        .t1 {
          display: block;
          font-size: clamp(40px, 4vw, 60px);
          line-height: 1.02;
          color:white;
        }

        .t2 {
          display: block;
          font-size: clamp(40px, 4vw, 60px);
          line-height: 1.02;
          color:white;
        }

        .as {
          font-family: "Georgia", "Times New Roman", serif;
          font-style: italic;
          color: rgba(196, 160, 86, 0.95);
          margin-right: 10px;
          font-weight: 400;
        }

        .body {
          margin: 0;
          max-width: 520px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 13.5px;
          line-height: 1.75;
        }

        .body strong {
          color: rgba(255, 255, 255, 0.92);
          font-weight: 700;
        }

        .features {
          margin-top: 34px;
          display: grid;
          gap: 16px;
          width: min(520px, 100%);
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .vline {
          width: 1px;
          height: 18px;
          background: rgba(196, 160, 86, 0.45);
          opacity: 0.95;
        }

        .ico {
          width: 22px;
          height: 22px;
          color: rgba(196, 160, 86, 0.95);
          display: grid;
          place-items: center;
        }

        .label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
        }

        .feature.muted .label {
          color: rgba(255, 255, 255, 0.52);
          font-weight: 600;
        }

        .feature.muted .ico {
          color: rgba(255, 255, 255, 0.35);
        }

        /* RIGHT collage */
        .right {
          position: relative;
          min-height: clamp(380px, 38vw, 520px);
        }

        .photo {
          position: absolute;
          width: min(360px, 34vw);
          aspect-ratio: 3 / 4;
          border-radius: 2px;
          background-size: cover;
          background-position: center;
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.55);
          outline: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* replace these two URLs with your images */
        .p1 {
          left: 0%;
          top: 50%;
          transform: translateY(-50%);
          background-image: url("photo-1613490493576-7fde63acd811.avif"); /* <-- replace */
        }

        .p2 {
          left: 44%;
          top: 12%;
          background-image: url("photo-1613490493576-7fde63acd811.avif"); /* <-- replace */
        }

        /* Circular stamp */
        .stamp {
          position: absolute;
          right: 6%;
          bottom: 8%;
          width: 140px;
          height: 140px;
          opacity: 0.6;
          pointer-events: none;
          display: grid;
          place-items: center;
        }

        .ring {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          border: 1px solid rgba(196, 160, 86, 0.35);
        }

        .stampText {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          transform: rotate(-18deg);
        }

        .stampText span {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(196, 160, 86, 0.55);
          padding: 10px;
          border-radius: 999px;
        }

        /* Simple “circular text” illusion (clean + lightweight) */
        .stampText span {
          width: 120px;
          text-align: center;
          border: 1px solid rgba(196, 160, 86, 0.15);
        }

        /* Responsive */
        @media (max-width: 980px) {
          .wrap {
            width: min(1100px, calc(100% - 44px));
            grid-template-columns: 1fr;
          }

          .right {
            min-height: 520px;
            margin-top: 14px;
          }

          .p1 {
            left: 2%;
            top: 52%;
          }

          .p2 {
            left: 48%;
            top: 8%;
          }

          .stamp {
            right: 4%;
            bottom: 4%;
            transform: scale(0.95);
          }
        }

        @media (max-width: 520px) {
          .wrap {
            width: calc(100% - 28px);
          }

          .right {
            min-height: 520px;
          }

          .photo {
            width: 78vw;
          }

          .p1 {
            left: 0;
            top: 56%;
          }

          .p2 {
            left: 18%;
            top: 6%;
          }

          .stamp {
            width: 120px;
            height: 120px;
            right: 2%;
            bottom: 2%;
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
