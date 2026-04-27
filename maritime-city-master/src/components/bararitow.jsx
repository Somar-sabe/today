import React from "react";

export default function SanctuarySection({ openPopup }) {
  const css = `
  .place-card-large {
  display:none;}
  .place-card{
  display:none !important;}
  .gridt {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
    align-items: stretch;}
    :root{
      --deep:#0b5b4b;
      --deep2:#064c3f;
      --mint:#cff7e8;
      --mint2:#d9faee;
      --ink:#0f172a;
      --muted:#6b7280;
      --line:#e5e7eb;
      --accent:#11b981;
      --shadow: 0 18px 55px rgba(0,0,0,.18);
      --radius: 18px;
      --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans";
    }
.diaaaa{
    width: -webkit-fill-available;
    height: -webkit-fill-available;}
    .koas{
    display:flex;
  flex-direction:column;}
    *{ box-sizing:border-box; }
    .wrap{
      width:100%;
      background:#f6f7f7;
      font-family: var(--sans);
    }

    /* ===== top bar ===== */
    .topBar{
        width: -webkit-fill-available;
      background: #b39680;
      padding: 22px 16px 24px;
    }

    .container{
      width: min(1180px, 100%);
      margin: 0 auto;
    }

    .statsRow{
      display:grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .statCard{
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,.16);
      background: rgba(0,0,0,.10);
      padding: 18px 12px 16px;
      text-align:center;
      box-shadow: 0 10px 24px rgba(0,0,0,.12);
    }

    .statTop{
      color:#fff;
      font-weight: 900;
      font-size: 28px;
      letter-spacing: .2px;
      line-height: 1;
      margin-bottom: 8px;
    }

    .statBottom{
      color: rgba(255,255,255,.85);
      font-weight: 800;
      font-size: 12px;
      letter-spacing: .9px;
      text-transform: uppercase;
    }

    /* ===== white section ===== */
    .section{

      background:#ffffff;
      width: -webkit-fill-available;
      padding: 56px 6px 60px;
    }

    .grid{
      display:grid;
      grid-template-columns: 1.1fr .9fr;
      gap: 44px;
      align-items: start;
    }

    .title{
      font-family: var(--serif);
      font-weight: 800;
      letter-spacing: -0.6px;
      color: #0b2b2a;
      font-size: clamp(32px, 3.2vw, 46px);
      margin: 0 0 14px;
    }

    .titleUnderline{
      width: 86px;
      height: 4px;
      border-radius: 999px;
      background: var(--deep);
      margin: 6px 0 22px;
    }

    .desc{
      color: #4b5563;
      font-size: 15px;
      line-height: 1.75;
      max-width: 620px;
      margin: 0 0 28px;
    }

    .subHead{
      display:flex;
      align-items:center;
      gap: 10px;
      color: #0b2b2a;
      font-weight: 900;
      font-size: 18px;
      margin: 8px 0 12px;
    }

    .pin{
      width: 18px;
      height: 18px;
      flex: 0 0 auto;
    }

    .bullets{
      margin: 0;
      padding: 0 0 0 24px;
      list-style: none;
      position: relative;
      max-width: 520px;
    }

    .bullets::before{
      content:"";
      position:absolute;
      left: 9px;
      top: 3px;
      bottom: 3px;
      width: 2px;
     
      border-radius: 999px;
    }

    .bullet{
      position: relative;
      padding: 8px 0 8px 0;
      color:#111827;
      font-size: 14px;
    }

    .bullet::before{
      content:"";
      position:absolute;
      left: -24px;
      top: 15px;
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: var(--accent);
      box-shadow: 0 0 0 3px rgba(17,185,129,.18);
    }

    .bullet span{
      color:#374151;
      font-weight: 600;
    }

    /* ===== map card ===== */
    .mapWrap{
      display:flex;
      justify-content:flex-end;
    }

    .mapCard{
      width: min(520px, 100%);
      height: 460px;
      border-radius: 22px;

      position: relative;
      overflow: hidden;
      padding: 16px;
    }

    .mapInner{
      position:absolute;
      inset: 16px;
      border-radius: 18px;
      background: rgba(0,0,0,.02);
      border: 1px solid rgba(0,0,0,.05);
      overflow:hidden;
    }

    /* subtle “map” texture */
    .mapTexture{
      position:absolute;
      inset:0;
      background:
        radial-gradient(1200px 500px at 20% 20%, rgba(255,255,255,.55), rgba(255,255,255,0) 55%),
        repeating-linear-gradient(0deg, rgba(11,91,75,.06) 0px, rgba(11,91,75,.06) 1px, rgba(11,91,75,0) 14px, rgba(11,91,75,0) 28px),
        repeating-linear-gradient(90deg, rgba(11,91,75,.05) 0px, rgba(11,91,75,.05) 1px, rgba(11,91,75,0) 18px, rgba(11,91,75,0) 40px);
      opacity: .9;
    }

    .mapLabelTop{
      position:absolute;
      left: 18px;
      top: 14px;
      display:flex;
      align-items:center;
      gap: 8px;
      font-weight: 700;
      color:#0b2b2a;
      font-size: 14px;
      z-index: 3;
      background: rgba(255,255,255,.55);
      border: 1px solid rgba(0,0,0,.06);
      padding: 8px 10px;
      border-radius: 999px;
      backdrop-filter: blur(6px);
    }

    .badgeDot{
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: var(--accent);
      box-shadow: 0 0 0 3px rgba(17,185,129,.20);
    }

    .mapBottomFade{
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      height: 120px;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.70) 100%);
      z-index: 2;
    }

    .mapBottomText{
      position:absolute;
      left: 24px;
      right: 24px;
      bottom: 22px;
      color: #fff;
      font-weight: 900;
      font-size: 16px;
      z-index: 3;
      text-shadow: 0 2px 10px rgba(0,0,0,.35);
    }

    /* ===== responsive ===== */
    @media (max-width: 980px){
     .gridt {
    display: flex;
    flex-direction:column;
  }
      .statsRow{ grid-template-columns: repeat(2, 1fr); }
      .grid{ grid-template-columns: 1fr; gap: 26px; }
      .mapWrap{ justify-content:flex-start; }
      .mapCard{ height: 420px; }
    }

    @media (max-width: 520px){
      .topBar{ padding: 16px 12px 18px; }
      .statsRow{ grid-template-columns: 1fr; gap: 12px; }
      .statTop{ font-size: 26px; }
      .section{ padding: 34px 12px 40px; }
      .desc{ font-size: 14px; }
      .mapCard{ height: 360px; border-radius: 18px; }
      .mapInner{ inset: 14px; border-radius: 16px; }
      .mapBottomText{ left: 18px; right: 18px; font-size: 15px; }
    }
  `;

  return (
    <div className="wrap koas">
      <style>{css}</style>

      {/* Top green stats bar */}
      <div className="topBar">
        <div className="container">
          <div className="statsRow">
            <div className="statCard">
              <div className="statTop">1%</div>
              <div className="statBottom">Monthly Plan</div>
            </div>

            <div className="statCard">
              <div className="statTop">3 Years</div>
              <div className="statBottom">Post-handover</div>
            </div>

            <div className="statCard">
              <div className="statTop">Q4 2028</div>
              <div className="statBottom">Completion</div>
            </div>

            <div className="statCard">
              <div className="statTop">8% +</div>
              <div className="statBottom">Est. ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* White content section */}
      <section className="section">
        <div className="container">
          <div className="gridt">
            {/* Left content */}
            <div>
              <h2 className="title">A Sanctuary in the City</h2>
              <div className="titleUnderline" />

              <p className="desc">
                Barari Gate by ADE is a residential development located in Majan,
                Wadi Al Safa 3. Designed with refined layouts and lifestyle-focused
                amenities, it offers a balanced living experience in a community
                known for its accessibility and lush greenery.
              </p>

              <div className="subHead">
                <svg className="pin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
                    stroke="#0b5b4b"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    stroke="#0b5b4b"
                    strokeWidth="2"
                  />
                </svg>
                Prime Connectivity
              </div>

              <ul className="bullets">
                <li className="bullet">
                  <span>5 Mins</span> - Global Village &amp; Al Barari
                </li>
                <li className="bullet">
                  <span>10 Mins</span> - Dubai Hills Mall
                </li>
                <li className="bullet">
                  <span>20 Mins</span> - Downtown Dubai &amp; DXB Airport
                </li>
                <li className="bullet">
                  <span>25 Mins</span> - Dubai Marina &amp; Palm Jumeirah
                </li>
              </ul>
            </div>

            {/* Right map/card */}
            <div className="mapWrap">
              <div className="mapCard" aria-label="Dubai Green Community map card">

                <div class="mapInner">
  <iframe 
    class="mapFrame diaaaa"
    title="Majan Dubai"
    loading="lazy"
    src="https://www.google.com/maps?q=Majan%20Dubai&output=embed"
  ></iframe>

  <div class="mapLabelTop">
    <span class="badgeDot"></span>
    Dubai Green Community
  </div>

  <div class="mapBottomFade"></div>
  <div class="mapBottomText">
    Located in Majan, Wadi Al Safa 3
  </div>
</div>

              </div>
                 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
