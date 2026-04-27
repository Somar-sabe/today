import React, { useMemo } from "react";

export default function CuratedResidencesTable() {
  const rows = useMemo(
    () => [
      {
        unitId: "101A",
        layout: "1BR",
        perspective: "City View",
        area: "71 m²",
        startingFrom: "$670,000",
        status: "AVAILABLE",
      },
      {
        unitId: "502B",
        layout: "2BR",
        perspective: "Sea View",
        area: "104 m²",
        startingFrom: "$1,100,000",
        status: "AVAILABLE",
      },
      {
        unitId: "1203A",
        layout: "3BR",
        perspective: "Full Sea View",
        area: "152 m²",
        startingFrom: "$1,750,000",
        status: "RESERVED",
      },
      {
        unitId: "1801C",
        layout: "4BR",
        perspective: "Panoramic Sea View",
        area: "225 m²",
        startingFrom: "$2,700,000",
        status: "AVAILABLE",
      },
      {
        unitId: "2101P",
        layout: "Penthouse",
        perspective: "Island Horizon",
        area: "450 m²",
        startingFrom: "$5,400,000",
        status: "SOLD",
      },
    ],
    []
  );

  const pillClass = (s) => {
    const v = (s || "").toLowerCase();
    if (v === "available") return "pill green";
    if (v === "reserved") return "pill amber";
    if (v === "sold") return "pill red";
    return "pill";
  };

  return (
    <section className="sec" aria-label="Curated Residences">
      <div className="wrap">
        <div className="eyebrow">THE COLLECTION</div>
        <h2 className="title">Curated Residences</h2>

        <div className="sub">REAL-TIME INVENTORY</div>

        <div className="card" role="region" aria-label="Inventory table">
          <div className="tableScroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th>UNIT ID</th>
                  <th>LAYOUT</th>
                  <th>PERSPECTIVE</th>
                  <th className="num">AREA</th>
                  <th className="num">STARTING FROM</th>
                  <th className="center">AVAILABILITY</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r) => (
                  <tr key={r.unitId}>
                    <td className="strong">{r.unitId}</td>
                    <td>{r.layout}</td>
                    <td>{r.perspective}</td>
                    <td className="num">{r.area}</td>
                    <td className="num strong2">{r.startingFrom}</td>
                    <td className="center">
                      <span className={pillClass(r.status)}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sec {
          background: #050505;
          color: #fff;
          padding: 90px 0 110px;
        }

        /* Left aligned like screenshot (not centered narrow) */
        .wrap {
          width: min(1520px, calc(100% - 140px));
          margin: 0 auto;
        }

        .eyebrow {
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(196, 160, 86, 0.95);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .title {
          margin: 0;
          font-weight: 300;
          letter-spacing: -0.02em;
          font-size: 56px;
          line-height: 1.08;
          color: rgba(255, 255, 255, 0.96);
        }

        .sub {
          margin-top: 28px;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.38);
        }

        /* Card matches screenshot: wide, soft border, subtle inner glow */
        .card {
          margin-top: 26px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.22);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02),
            0 34px 80px rgba(0, 0, 0, 0.55);
          overflow: hidden;
        }

        .tableScroll {
          overflow-x: auto;
        }

        /* TABLE */
        .tbl {
          width: 100%;
          min-width: 1120px; /* so it looks like desktop screenshot */
          border-collapse: collapse;
        }

        thead th {
          padding: 26px 34px 18px;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.32);
          font-weight: 800;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        tbody td {
          padding: 24px 34px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.72);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        tbody tr:last-child td {
          border-bottom: 0;
        }

        .num {
          text-align: center; /* screenshot looks centered-ish for area & price */
        }

        .center {
          text-align: center;
        }

        .strong {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 700;
        }

        .strong2 {
          color: rgba(255, 255, 255, 0.82);
          font-weight: 600;
        }

        /* Pills like screenshot */
        .pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 22px;
          padding: 0 14px;
          border-radius: 999px;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 900;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
        }

        .pill.green {
          background: rgba(33, 180, 105, 0.14);
          border-color: rgba(33, 180, 105, 0.28);
          color: rgba(90, 255, 170, 0.95);
        }

        .pill.amber {
          background: rgba(196, 160, 86, 0.18);
          border-color: rgba(196, 160, 86, 0.3);
          color: rgba(255, 210, 120, 0.95);
        }

        .pill.red {
          background: rgba(190, 60, 60, 0.16);
          border-color: rgba(190, 60, 60, 0.28);
          color: rgba(255, 140, 140, 0.95);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .wrap {
            width: calc(100% - 56px);
          }
          .title {
            font-size: 46px;
          }
          thead th,
          tbody td {
            padding-left: 22px;
            padding-right: 22px;
          }
        }

        @media (max-width: 600px) {
          .wrap {
            width: calc(100% - 24px);
          }
          .title {
            font-size: 38px;
          }
          .sec {
            padding: 70px 0 90px;
          }
        }
      `}</style>
    </section>
  );
}
