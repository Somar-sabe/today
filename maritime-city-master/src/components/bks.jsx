import React, { useMemo, useState } from "react";

export default function InvestmentCalculatorSection({ openPopup }) {
  // Left slider (property value)
  const [value, setValue] = useState(670000);

  // Right tabs
  const [unit, setUnit] = useState("1 Bedroom"); // "Studio" | "1 Bedroom"

  // ====== Simple model (match screenshot numbers) ======
  // Payment plan
  const downPct = 0.2;
  const postPct = 0.4;
  const monthlyPct = 0.01;

  // ROI (use fixed multipliers so it stays close to screenshot)
  const rentalYield = unit === "Studio" ? 0.075 : 0.08; // 7.5% / 8%
  const appreciationPct = unit === "Studio" ? 0.24 : 0.266; // tuned

  const down = Math.round(value * downPct);
  const monthly = Math.round(value * monthlyPct);
  const post = Math.round(value * postPct);

  const yearlyRental = Math.round(value * rentalYield);
  const appreciation = Math.round(value * appreciationPct);

  // Total projected value (5 years) — tuned to resemble screenshot for 1BR @ 670k
  const totalProjected = Math.round(value * 2.748); // 670k -> ~1,841,160

  const formatAED = (n) =>
    `AED ${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  const css = useMemo(
    () => `
    :root{
      --page:#063f33;
      --card:#173f36;
      --card2:#1a443a;
      --stroke:rgba(255,255,255,.10);
      --stroke2:rgba(255,255,255,.14);
      --text:#e9fff6;
      --muted:rgba(233,255,246,.72);
      --soft:rgba(233,255,246,.14);
      --mint:#14c38e;
      --mint2:#0aa56f;
      --amber:#f6a800;
      --shadow: 0 20px 60px rgba(0,0,0,.28);
      --radius: 18px;
      --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans";
    }

    *{ box-sizing:border-box; }
    button, input{ font:inherit; }
    .kwrap{
      width: 100%;
      
      padding: 72px 16px 90px;
      font-family: var(--sans);
      color: var(--text);
    }

    .kcontainer{
      width: min(1240px, 100%);
      margin: 0 auto;
    }

    .khead{
      text-align:center;
      margin-bottom: 34px;
    }

    .ktitle{
      margin: 0 0 10px;
      font-family: var(--serif);
      font-weight: 800;
      letter-spacing: -0.6px;
      font-size: clamp(30px, 3.2vw, 44px);
      color: #b39680;
    }

    .ksubtitle{
      margin: 0;
      color: #b39680;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: .2px;
    }

    .kgrid{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 26px;
      align-items: stretch;
    }

    .kcard{
      background: white;
      border: 1px solid var(--stroke);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 24px;
      min-height: 520px;
      position: relative;
      overflow: hidden;
    }

    .kcard::after{
      content:"";
      position:absolute;
      inset:-1px;
      background:
        radial-gradient(900px 320px at 20% 0%, rgba(20,195,142,.10), rgba(20,195,142,0) 55%),
        radial-gradient(700px 320px at 90% 20%, rgba(246,168,0,.08), rgba(246,168,0,0) 55%);
      pointer-events:none;
      z-index:0;
    }

    .kcardInner{ position:relative; z-index:1; }

    .kcardHead{
      display:flex;
      align-items:center;
      gap: 12px;
      margin-bottom: 18px;
    }

    .kiconSquare{
      width: 42px;
      height: 42px;
      border-radius: 10px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex: 0 0 auto;
    }

    .kiconSquare.mint{ background:#b39680; }
    .kiconSquare.amber{ background: #b39680; }

    .kcardTitle{
      margin:0;
      font-size: 18px;
      font-weight: 900;
      color:#b39680;
      letter-spacing: -0.2px;
    }

    /* LEFT: slider */
    .klabel{
      font-size: 12px;
      font-weight: 900;
      letter-spacing: .7px;
      text-transform: uppercase;
      color: #b39680;
      margin-bottom: 10px;
    }

    .ksliderRow{
      margin-top: 6px;
      margin-bottom: 14px;
    }

    .krange{
      width: 100%;
      accent-color: var(--mint);
    }

    /* custom-ish slider look */
    input[type="range"]{
      -webkit-appearance:none;
      appearance:none;
      height: 6px;
      border-radius: 999px;
      background: white;
      outline:none;
    }
    input[type="range"]::-webkit-slider-thumb{
      -webkit-appearance:none;
      appearance:none;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: var(--mint);
      border: 3px solid rgba(6,63,51,1);
      box-shadow: 0 10px 20px rgba(0,0,0,.25);
      cursor:pointer;
    }
    input[type="range"]::-moz-range-thumb{
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: var(--mint);
      border: 3px solid #b39680;
      box-shadow: 0 10px 20px rgba(0,0,0,.25);
      cursor:pointer;
    }

    .kbigValue{
      margin: 0 0 18px;
      font-size: 34px;
      letter-spacing: -0.6px;
      font-weight: 900;
      color:#ffffff;
    }

    .kplanList{
      display:flex;
      flex-direction:column;
      gap: 14px;
      margin-top: 10px;
    }

    .kplanItem{
      background: white;
      border: 1px solid #b39680;
      border-radius: 12px;
      padding: 16px 16px;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }

    .kplanItem.dark{
      
      border-color: #b39680;
    }

    .kplanLeft{
      display:flex;
      flex-direction:column;
      gap: 4px;
      min-width: 0;
    }

    .kplanName{
      font-weight: 900;
      color: #b39680;
      font-size: 13px;
      letter-spacing: .2px;
    }

    .kplanName strong{
      color: #b39680;
      font-weight: 900;
    }

    .kplanSub{
      color: #b39680;
      font-size: 12px;
      font-weight: 700;
    }

    .kplanAmount{
      font-weight: 900;
      color:#b39680;
      font-size: 18px;
      letter-spacing: -0.2px;
      white-space: nowrap;
    }

    /* RIGHT: ROI */
    .kseg{
      display:flex;
      background: white;
      border: 1px solid #b39680;
      border-radius: 12px;
      overflow:hidden;
      margin: 14px 0 18px;
    }

    .ksegBtn{
      flex: 1;
      padding: 12px 10px;
      border:0;
      cursor:pointer;
      background: transparent;
      color: #b39680;
      font-weight: 900;
      letter-spacing: .2px;
    }

    .ksegBtn.active{
      background: #b39680;
      color: white;
    }

    .kmetrics{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-top: 6px;
      align-items: start;
    }

    .kmetric{
      text-align:center;
      padding: 6px 8px;
    }

    .kmetricLabel{
      color: #b39680;
      font-weight: 900;
      font-size: 12px;
      letter-spacing: .4px;
      margin-bottom: 6px;
    }

    .kmetricValue{
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -0.4px;
      color:#b39680;
      margin-bottom: 4px;
    }

    .kmetricNote{
      font-size: 12px;
      color: #b39680;
      font-weight: 800;
    }

    .ktotalBox{
      margin-top: 18px;
      border-radius: 14px;
      border: 1px solid rgba(233,255,246,.12);
     
      padding: 22px 16px;
      text-align:center;
      box-shadow: 0 16px 40px rgba(0,0,0,.22) inset;
    }

    .ktotalTop{
      font-size: 12px;
      letter-spacing: 1.4px;
      font-weight: 900;
      color: #b39680;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .ktotalValue{
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -0.8px;
      margin-bottom: 8px;
      color:#b39680;
    }

    .ktotalFine{
      font-size: 12px;
      color: #b39680;
      font-weight: 700;
    }

    /* responsive */
    @media (max-width: 980px){
      .kgrid{ grid-template-columns: 1fr; }
      .kcard{ min-height: unset; }
    }

    @media (max-width: 560px){
      .kwrap{ padding: 54px 12px 70px; }
      .kcard{ padding: 18px; border-radius: 16px; }
      .kbigValue{ font-size: 30px; }
      .kmetricValue{ font-size: 22px; }
      .ktotalValue{ font-size: 32px; }
      .kplanAmount{ font-size: 16px; }
    }
  `,
    []
  );

  return (
    <section className="kwrap" aria-label="Investment Calculator">
      <style>{css}</style>

      <div className="kcontainer">
        <div className="khead">
          <h2 className="ktitle">Investment Calculator</h2>
          <p className="ksubtitle">Plan your investment with our interactive tools</p>
        </div>

        <div className="kgrid">
          {/* LEFT CARD */}
          <div className="kcard">
            <div className="kcardInner">
              <div className="kcardHead">
                <div className="kiconSquare mint" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
                      stroke="rgba(255,255,255,.92)"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 7h8M8 11h8M8 15h5"
                      stroke="rgba(255,255,255,.92)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="kcardTitle">Payment Plan Calculator</h3>
              </div>

              <div className="klabel">Property Value (AED)</div>
              <div className="ksliderRow">
                <input
                  className="krange"
                  type="range"
                  min={400000}
                  max={1200000}
                  step={10000}
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value, 10))}
                />
              </div>

              <div className="kbigValue">{formatAED(value)}</div>

              <div className="kplanList">
                <div className="kplanItem">
                  <div className="kplanLeft">
                    <div className="kplanName">
                      Down Payment <span style={{ opacity: 0.9 }}>(20%)</span>
                    </div>
                    <div className="kplanSub">Immediate</div>
                  </div>
                  <div className="kplanAmount">{formatAED(down)}</div>
                </div>

                <div className="kplanItem dark">
                  <div className="kplanLeft">
                    <div className="kplanName">
                      <strong>Monthly Installment</strong>{" "}
                      <span style={{ opacity: 0.9 }}>(1%)</span>
                    </div>
                    <div className="kplanSub">During Construction</div>
                  </div>
                  <div className="kplanAmount">{formatAED(monthly)}</div>
                </div>

                <div className="kplanItem">
                  <div className="kplanLeft">
                    <div className="kplanName">
                      Post-Handover <span style={{ opacity: 0.9 }}>(40%)</span>
                    </div>
                    <div className="kplanSub">Over 3 Years</div>
                  </div>
                  <div className="kplanAmount">{formatAED(post)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="kcard">
            <div className="kcardInner">
              <div className="kcardHead">
                <div className="kiconSquare amber" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 19V5"
                      stroke="rgba(255,255,255,.92)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 19h16"
                      stroke="rgba(255,255,255,.92)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 15l4-4 3 3 5-6"
                      stroke="rgba(255,255,255,.92)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 8h3v3"
                      stroke="rgba(255,255,255,.92)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="kcardTitle">ROI Estimator</h3>
              </div>

              <div className="kseg" role="tablist" aria-label="Unit Type">
                {["Studio", "1 Bedroom"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`ksegBtn ${unit === t ? "active" : ""}`}
                    onClick={() => setUnit(t)}
                    role="tab"
                    aria-selected={unit === t}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="kmetrics">
                <div className="kmetric">
                  <div className="kmetricLabel">Est. Yearly Rental</div>
                  <div className="kmetricValue">{formatAED(yearlyRental)}</div>
                  <div className="kmetricNote">
                    ~{Math.round(rentalYield * 100)}% Yield
                  </div>
                </div>

                <div className="kmetric">
                  <div className="kmetricLabel">Est. Appreciation</div>
                  <div className="kmetricValue">{formatAED(appreciation)}</div>
                  <div className="kmetricNote">By Completion</div>
                </div>
              </div>

              <div className="ktotalBox">
                <div className="ktotalTop">Total Projected Value (5 Years)</div>
                <div className="ktotalValue">{formatAED(totalProjected)}</div>
                <div className="ktotalFine">
                  *Includes rental income &amp; capital gains. Projections only.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
