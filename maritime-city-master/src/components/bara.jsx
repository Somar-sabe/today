import React from "react";

export default function WorldClassAmenities() {
  const css = `
    :root{
      --bg:#f6f7f7;
      --cardo:#ffffff;
      --ink:#0b2b2a;
      --muted:#6b7280;
      --line:#edf0f2;
      --mintBg:#e9fbf2;
      --mint:#b39680;
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
      width: min(1180px, 100%);
      margin: 0 auto;
    }

    .head{
      text-align:center;
      margin-bottom: 44px;
      padding: 0 10px;
    }

    .title{
      margin: 0 0 10px;
      font-family: var(--serif);
      font-weight: 800;
      letter-spacing: -0.6px;
      color: var(--ink);
      font-size: clamp(30px, 3.2vw, 44px);
    }

    .subtitle{
      margin: 0 auto;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.6;
      max-width: 650px;
    }

    .grid{
      display:grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }

    .card{
      background: var(--cardo);
      border-radius: var(--radius);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
      padding: 22px 22px 20px;
      min-height: 148px;
      display:flex;
      flex-direction: column;
      justify-content: center;
      transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
    }

    .card:hover{
      transform: translateY(-2px);
      box-shadow: 0 16px 40px rgba(16,24,40,.10);
      border-color: rgba(16,185,129,.18);
    }

    .iconBox{
      width: 54px;
      height: 54px;
      border-radius: 14px;
      
      display:flex;
      align-items:center;
      justify-content:center;
      margin-bottom: 16px;
    }

    .icon{
      width: 24px;
      height: 24px;
      stroke: #b39680;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .cardTitle{
      margin: 0 0 6px;
      color: var(--ink);
      font-weight: 900;
      font-size: 16px;
      letter-spacing: -0.2px;
    }

    .cardSub{
      margin: 0;
      color: #b39680;
      font-size: 14px;
    }

    /* ===== responsive ===== */
    @media (max-width: 1100px){
      .grid{ grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 820px){
     
      .grid{ grid-template-columns: repeat(2, 1fr); gap: 16px; }
      .card{ padding: 20px 18px; min-height: 140px; }
    }

    @media (max-width: 520px){
      .head{ margin-bottom: 26px; }
      .subtitle{ font-size: 14px; }
      .grid{ grid-template-columns: 1fr; }
      .card{ min-height: 132px; }
    }
  `;

  const items = [
    {
      title: "Infinity Pool",
      sub: "& Kids Pool",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 7c2.5 2 5.5 2 8 0s5.5-2 10 0" />
          <path d="M3 12c2.5 2 5.5 2 8 0s5.5-2 10 0" />
          <path d="M3 17c2.5 2 5.5 2 8 0s5.5-2 10 0" />
        </svg>
      ),
    },
    {
      title: "Indoor & Outdoor Gym",
      sub: "State-of-the-art",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9v6" />
          <path d="M18 9v6" />
          <path d="M8 10h8" />
          <path d="M8 14h8" />
          <path d="M4 10v4" />
          <path d="M20 10v4" />
        </svg>
      ),
    },
    {
      title: "Padel Courts",
      sub: "& Basketball",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5h8" />
          <path d="M7 7v10" />
          <path d="M17 7v10" />
          <path d="M8 19h8" />
          <path d="M12 9l4 3-4 3-4-3 4-3z" />
        </svg>
      ),
    },
    {
      title: "Jogging Tracks",
      sub: "Lush Greenery",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2v20" />
          <path d="M12 6c3 0 5 2 5 5 0 4-3 7-5 9-2-2-5-5-5-9 0-3 2-5 5-5z" />
        </svg>
      ),
    },
    {
      title: "Business Center",
      sub: "Co-working Space",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z" />
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      ),
    },
    {
      title: "Sauna & Jacuzzi",
      sub: "Wellness Area",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 12h10" />
          <path d="M8 16h8" />
          <path d="M9 6c1.3-1.3 2.7-1.3 4 0" />
          <path d="M11 6c1.3-1.3 2.7-1.3 4 0" />
          <path d="M6 20h12" />
          <path d="M7 20c-2-1-3-3-3-6v-2h16v2c0 3-1 5-3 6" />
        </svg>
      ),
    },
    {
      title: "Kids Play Area",
      sub: "Safe & Secure",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
          <path d="M8.5 12.5l2.2 2.2 4.8-5.2" />
        </svg>
      ),
    },
    {
      title: "Yoga Area",
      sub: "Serene Spaces",
      icon: (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
          <path d="M8.5 12.5l2.2 2.2 4.8-5.2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="wrap" aria-label="World-Class Amenities">
      <style>{css}</style>

      <div className="container">
        <div className="head">
          <h2 className="title">World-Class Amenities</h2>
          <p className="subtitle">
            Curated specifically for comfort, convenience, and a vibrant community lifestyle.
          </p>
        </div>

        <div className="grid">
          {items.map((it) => (
            <div className="card" key={it.title}>
              <div className="iconBox">{it.icon}</div>
              <h3 className="cardTitle">{it.title}</h3>
              <p className="cardSub">{it.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
