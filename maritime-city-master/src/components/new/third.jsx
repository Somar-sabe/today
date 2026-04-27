import React, { useMemo, useState } from "react";

export default function ResidencesSection({ openPopup }) {
  const items = useMemo(
    () => [
      {
        key: "01",
        label: "01 BEDROOM",
        price: null,
        sub: null,
      },
      {
        key: "02",
        label: "02 BEDROOM",
        price: "AED 4.1M",
        sub: "STARTING FROM · 1,850 SQFT",
        active: true,
      },
      {
        key: "03",
        label: "03 BEDROOM",
        price: null,
        sub: null,
      },
      {
        key: "P",
        label: "PENTHOUSE",
        price: null,
        sub: null,
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState("02");

  return (
    <section className="sec" aria-label="Residences">
      <div className="topRow">
        <h2 className="bigTitle">RESIDENCES.</h2>
        <div className="topRight">1-4 BEDROOM SELECTION</div>
      </div>

      <div className="grid">
        {/* LEFT LIST */}
        <aside className="left" aria-label="Residence types">
          <div className="list" role="list">
            {items.map((it) => {
              const isActive = activeKey === it.key;
              return (
                <button
                  key={it.key}
                  type="button"
                  className={`row ${isActive ? "active" : ""}`}
                  onClick={() => setActiveKey(it.key)}
                  aria-pressed={isActive}
                >
                  <div className="rowTop">
                    <div className="rowLabel">{it.label}</div>
                    {isActive ? <div className="arrow">→</div> : <div className="arrow ghost">→</div>}
                  </div>

                  {isActive && (
                    <div className="rowBottom">
                      <div className="price">{it.price}</div>
                      <div className="sub">{it.sub}</div>
                    </div>
                  )}

                  <div className="divider" />
                </button>
              );
            })}
          </div>

          <button onClick={openPopup} className="cta" type="button">
            ENQUIRE FLOOR PLANS
          </button>
        </aside>

        {/* RIGHT IMAGE */}
        <div className="right" aria-label="Residence preview">
          <div className="frame">
            <div className="photo" aria-hidden="true" />

            <div className="card" aria-label="Simplex & Duplex info card">
              <div className="cardIcon" aria-hidden="true">
                {/* corner-expand icon */}
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
              </div>

              <div className="cardTitle">SIMPLEX &amp; DUPLEX</div>
              <div className="cardBody">
                BESPOKE LAYOUTS WITH DOUBLE-HEIGHT VOIDS AND PRIVATE SPLASH POOLS AVAILABLE.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sec {
          background: #ffffff;
          color: #0b0b0b;
          padding: clamp(26px, 4vw, 46px) 0 clamp(44px, 6vw, 72px);
        }

        .topRow {
          width: min(1260px, calc(100% - 90px));
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }

        .bigTitle {
          margin: 0;
          font-weight: 300;
          letter-spacing: -0.03em;
          font-size: clamp(52px, 7.2vw, 110px);
          line-height: 0.9;
        }

        .topRight {
          margin-top: 14px;
          font-size: 10px;
          letter-spacing: 0.26em;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .grid {
          width: min(1260px, calc(100% - 90px));
          margin: clamp(18px, 2.2vw, 28px) auto 0;
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: clamp(22px, 3vw, 44px);
          align-items: start;
        }

        /* LEFT */
        .left {
          padding-top: 10px;
        }

        .list {
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.07);
        }

        .row {
          appearance: none;
          border: 0;
          background: transparent;
          padding: 18px 0 0;
          cursor: pointer;
          text-align: left;
        }

        .rowTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 0 10px;
        }

        .rowLabel {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.45);
        }

        .row.active .rowLabel {
          color: rgba(0, 0, 0, 0.92);
        }

        .arrow {
          font-size: 20px;
          line-height: 1;
          color: rgba(0, 0, 0, 0.75);
          transform: translateY(-1px);
        }

        .arrow.ghost {
          opacity: 0;
        }

        .rowBottom {
          padding: 0 0 14px;
        }

        .price {
          font-family: "Georgia", "Times New Roman", serif;
          font-style: italic;
          font-size: 22px;
          color: rgba(0, 0, 0, 0.88);
          margin-bottom: 8px;
        }

        .sub {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.5);
        }

        .divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.07);
          margin-top: 18px;
        }

        .cta {
          margin-top: 26px;
          width: 100%;
          height: 56px;
          background: #0b0b0b;
          color: #fff;
          border: 0;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          box-shadow: 0 14px 26px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .cta:active {
          transform: translateY(1px);
        }

        /* RIGHT */
        .right {
          position: relative;
        }

        .frame {
          position: relative;
          background: #f7f7f7;
          border: 1px solid rgba(0, 0, 0, 0.05);
          padding: clamp(18px, 2vw, 22px);
        }

        .photo {
          width: 100%;
          aspect-ratio: 16 / 9.6;
          background-image: url("photo-1613490493576-7fde63acd811.avif"); /* <-- replace */
          background-size: cover;
          background-position: center;
          border-radius: 2px;
        }

        .card {
          position: absolute;
          top: clamp(28px, 2.4vw, 34px);
          right: clamp(28px, 2.4vw, 34px);
          width: 210px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          padding: 16px 16px 14px;
          box-shadow: 0 18px 38px rgba(0, 0, 0, 0.14);
        }

        .cardIcon {
          color: rgba(196, 160, 86, 0.95);
          margin-bottom: 10px;
        }

        .cardTitle {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 800;
          margin-bottom: 10px;
          color: rgba(0, 0, 0, 0.82);
        }

        .cardBody {
          font-size: 10px;
          line-height: 1.6;
          letter-spacing: 0.02em;
          color: rgba(0, 0, 0, 0.52);
          text-transform: uppercase;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 380px 1fr;
            width: min(1260px, calc(100% - 44px));
          }
          .topRow {
            width: min(1260px, calc(100% - 44px));
          }
        }

        @media (max-width: 860px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .left {
            order: 2;
          }
          .right {
            order: 1;
          }

          .card {
            width: 220px;
          }
        }

        @media (max-width: 520px) {
          .sec {
            padding-top: 18px;
          }

          .topRow {
            width: calc(100% - 24px);
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .topRight {
            margin-top: 0;
          }

          .grid {
            width: calc(100% - 24px);
          }

          .cta {
            height: 52px;
          }

          .card {
            position: static;
            width: 100%;
            margin-top: 14px;
            box-shadow: none;
          }

          .frame {
            padding: 14px;
          }
        }
      `}</style>
    </section>
  );
}
