import React, { useMemo, useState } from "react";

export default function PricingFloorplanSection({ openPopup }) {
  const tabs = useMemo(
    () => [
      {
        key: "1BR",
        label: "1BR",
        price: "$670,000",
        desc: "Elegant spaces designed for single residents or couples.",
        areaRange: "71–132 m²",
        booking: "10%",
      },
      {
        key: "2BR",
        label: "2BR",
        price: "$1,100,000",
        desc: "Generous layouts for families with expansive living areas.",
        areaRange: "104–180 m²",
        booking: "10%",
      },
      {
        key: "3BR",
        label: "3BR",
        price: "$1,750,000",
        desc: "Panoramic living with refined finishes and open horizons.",
        areaRange: "152–240 m²",
        booking: "10%",
      },
      {
        key: "4BR",
        label: "4BR",
        price: "$2,700,000",
        desc: "Signature residences with elevated privacy and scale.",
        areaRange: "225–320 m²",
        booking: "10%",
      },
    ],
    []
  );

  const [active, setActive] = useState("1BR");
  const current = tabs.find((t) => t.key === active) || tabs[0];

  return (
    <section className="sec" aria-label="Pricing and floorplan">
      <div className="wrap">
        {/* Top mini tabs (like screenshot) */}
        <div className="topTabs" role="tablist" aria-label="Layouts">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`topTab ${active === t.key ? "active" : ""}`}
              role="tab"
              aria-selected={active === t.key}
              type="button"
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="topLine" aria-hidden="true" />

        {/* Main grid */}
        <div className="grid">
          {/* LEFT */}
          <div className="left">
            <div className="mini">STARTING FROM</div>
            <div className="price">{current.price}</div>

            <p className="desc">{current.desc}</p>

            <div className="meta">
              <div className="metaItem">
                <div className="metaLabel">AREA RANGE</div>
                <div className="metaValue">{current.areaRange}</div>
              </div>
              <div className="metaItem">
                <div className="metaLabel">BOOKING</div>
                <div className="metaValue">{current.booking}</div>
              </div>
            </div>

            <button onClick={openPopup} className="linkBtn" type="button">
              <span>REQUEST FLOOR PLAN</span>
              <span className="arr" aria-hidden="true">
                →
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="right" aria-label="Floorplan placeholder">
            <div className="canvas">
              <div className="frame" />
              <div className="hLine" />
              <div className="vLine" />
              <div className="circle" />
              <div className="watermark">HADO</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sec {
          background: #050505;
          color: #fff;
          padding: clamp(44px, 6.5vw, 88px) 0;
        }

        .wrap {
          width: min(1180px, calc(100% - 90px));
          margin: 0 auto;
        }

        /* Tabs */
        .topTabs {
          display: flex;
          gap: 44px;
          align-items: center;
          padding-top: 6px;
        }

        .topTab {
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 10px 0;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          font-weight: 900;
          position: relative;
        }

        .topTab.active {
          color: rgba(196, 160, 86, 0.95);
        }

        .topTab.active:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          height: 2px;
          background: rgba(196, 160, 86, 0.95);
        }

        .topLine {
          margin-top: 18px;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* Layout */
        .grid {
          margin-top: clamp(40px, 6vw, 70px);
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: clamp(26px, 4vw, 70px);
          align-items: center;
        }

        /* Left content */
        .mini {
          font-size: 9px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(196, 160, 86, 0.9);
          font-weight: 800;
          margin-bottom: 10px;
        }

        .price {
          font-weight: 300;
          letter-spacing: -0.02em;
          font-size: clamp(46px, 5vw, 74px);
          line-height: 1.05;
          color: rgba(255, 255, 255, 0.95);
        }

        .desc {
          margin: 18px 0 0;
          max-width: 420px;
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
          font-style: italic;
        }

        .meta {
          margin-top: 34px;
          display: flex;
          gap: 52px;
          align-items: flex-start;
        }

        .metaLabel {
          font-size: 9px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
          font-weight: 900;
          margin-bottom: 10px;
        }

        .metaValue {
          font-family: "Georgia", "Times New Roman", serif;
          font-style: italic;
          font-size: 18px;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.9);
        }

        .linkBtn {
          margin-top: 42px;
          background: transparent;
          border: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: rgba(196, 160, 86, 0.95);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 900;
          position: relative;
        }

        .linkBtn:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 160px;
          height: 1px;
          background: rgba(196, 160, 86, 0.35);
        }

        .arr {
          font-size: 14px;
          transform: translateY(-1px);
        }

        /* Right “floor plan” box */
        .right {
          display: flex;
          justify-content: center;
        }

        .canvas {
          width: min(520px, 42vw);
          aspect-ratio: 1 / 1;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.6);
          position: relative;
          overflow: hidden;
        }

        .frame {
          position: absolute;
          inset: 12%;
          border: 2px solid rgba(196, 160, 86, 0.22);
        }

        .hLine {
          position: absolute;
          left: 12%;
          right: 12%;
          top: 50%;
          height: 2px;
          background: rgba(196, 160, 86, 0.18);
        }

        .vLine {
          position: absolute;
          top: 12%;
          bottom: 12%;
          left: 50%;
          width: 2px;
          background: rgba(196, 160, 86, 0.12);
        }

        .circle {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 999px;
          border: 2px solid rgba(196, 160, 86, 0.18);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .watermark {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(-48deg);
          font-size: 52px;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.12);
          font-weight: 300;
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 980px) {
          .wrap {
            width: min(1180px, calc(100% - 44px));
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }
          .right {
            justify-content: flex-start;
          }
          .canvas {
            width: min(680px, 100%);
          }
        }

        @media (max-width: 560px) {
          .wrap {
            width: calc(100% - 24px);
          }
          .topTabs {
            gap: 24px;
            flex-wrap: wrap;
          }
          .meta {
            gap: 28px;
          }
          .linkBtn:after {
            width: 140px;
          }
        }
      `}</style>
    </section>
  );
}
