import React from "react";

export default function UnitsAndPricing({ openPopup }) {
  const css = `
    :root{
      --bg:#f6f7f7;
      --cardo:#ffffff;
      --ink:#0b2b2a;
      --muted:#6b7280;
      --line:#e7ecef;
      --green:#0b7a61;
      --green2:#0aa56f;
      --tagBg:white;
      --shadow: 0 10px 28px rgba(16,24,40,.06);
      --radius: 18px;
      --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans";
    }

    *{ box-sizing:border-box; }
    .wrap{
      width:100%;
      background: var(--bg);
      
      font-family: var(--sans);
    }

    .container{
      width: min(1200px, 100%);
      margin: 0 auto;
    }

    .head{
      text-align:center;
      margin-bottom: 34px;
      padding: 0 10px;
    }

    .title{
      margin: 0;
      font-family: var(--serif);
      font-weight: 800;
      letter-spacing: -0.6px;
      color: var(--ink);
      font-size: clamp(30px, 3.2vw, 44px);
    }

    .grid{
      display:grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
      align-items: stretch;
    }

    .card{
      position: relative;
      background: var(--cardo);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 22px 22px 20px;
      min-height: 210px;
      overflow:hidden;
    }

    .tag{
      position:absolute;
      top: 0;
      right: 5px;
      transform: translateY(-45%);
      background: var(--tagBg);
      color: #b39680;
      margin-top:20px;
      font-weight: 900;
      font-size: 12px;
      padding: 8px 14px;
      border-radius: 10px;
      border: 1px solid #b39680;
    }

    .unit{
      margin: 2px 0 8px;
      font-weight: 900;
      letter-spacing: -0.2px;
      color: var(--ink);
      font-size: 24px;
    }

    .sqft{
      margin: 0 0 18px;
      color: #6b7280;
      font-size: 14px;
    }

    .hr{
      height: 1px;
      background: rgba(231,236,239,.6);
      margin: 18px 0;
    }

    .label{
      color: #9ca3af;
      font-weight: 900;
      font-size: 12px;
      letter-spacing: .6px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .price{
      color: white;
      font-weight: 900;
      font-size: 20px;
      letter-spacing: -0.2px;
      margin-bottom: 18px;
    }

    .btn{
      width: 100%;
      border-radius: 10px;
      border: 1px solid #b39680;
      background: transparent;
      color: black;
      padding: 12px 4px;
      font-weight: 900;
      cursor: pointer;
      transition: background .12s ease, transform .12s ease, box-shadow .12s ease;
    }

    .btn:hover{
      background: rgba(10,165,111,.08);
      transform: translateY(-1px);
      box-shadow: 0 10px 24px rgba(16,24,40,.08);
    }

    /* ===== responsive ===== */
    @media (max-width: 1100px){
      .grid{ grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 680px){
     
      .grid{ grid-template-columns: 1fr; gap: 16px; }
      .card{ padding: 20px 18px; }
      .unit{ font-size: 22px; }
      .price{ font-size: 19px; }
    }
  `;

  const cards = [
    {
      unit: "Studio",
      sqft: "438 - 536 Sqft",
      price: "AED 670,000",
      tag: "Selling Fast",
    },
    {
      unit: "1 Bedroom",
      sqft: "775 - 900 Sqft",
      price: "AED 1,188,000",
      tag: "Selling Fast",
    },
    {
      unit: "2 Bedroom",
      sqft: "1,560 - 1,900 Sqft",
      price: "AED 1,700,000",
      tag: "Selling Fast",
    },
    {
      unit: "3 Bedroom",
      sqft: "2,527 - 3,840 Sqft",
      price: "AED 2,650,000",
      tag: "Selling Fast",
    },
  ];

  return (
    <section className="wrap" aria-label="Units & Pricing">
      <style>{css}</style>

      <div className="container">
        <div className="head">
          <h2 className="title">Units &amp; Pricing</h2>
        </div>

        <div className="grid">
          {cards.map((c) => (
            <article className="card" key={c.unit}>
              <div className="tag">{c.tag}</div>

              <h3 className="unit">{c.unit}</h3>
              <p className="sqft">{c.sqft}</p>

              <div className="hr" />

              <div className="label">Starting From</div>
              <div className="price">{c.price}</div>

              <button onClick={openPopup} className="btn" type="button">
                Check Availability
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
