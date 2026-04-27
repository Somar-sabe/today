import React, { useMemo, useState } from "react";

export default function SecureUnitCallback({ openPopup }) {
  const [country, setCountry] = useState("UK");
  const [iam, setIam] = useState("Investor");
  const [budget, setBudget] = useState("AED 670K - 1M");

  const css = useMemo(
    () => `
    :root{
      --bg:#f5f6f6;
      --cardo:#ffffff;
      --deep:#064e3b;     /* left green */
      --deep2:#0b5b4b;
      --ink:#0b2b2a;
      --muted:#6b7280;
      --line:#e5e7eb;
      --accent:#0aa56f;   /* button green */
      --accent2:#068c60;
      --shadow: 0 20px 55px rgba(0,0,0,.18);
      --radius: 18px;
      --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans";
    }

    *{ box-sizing:border-box; }
    button, input, select{ font:inherit; }
    input::placeholder{ color:#9ca3af; }

    .wrap{
      width:100%;
      min-height: 70vh;
      background: var(--bg);
      display:flex;
     
      justify-content:center;
      
      font-family: var(--sans);
    }

    .shell{
      width: min(1220px, 100%);
      border-radius: 22px;
      overflow:hidden;
      background: var(--cardo);
      box-shadow: var(--shadow);
      display:grid;
      grid-template-columns: 1fr 1.05fr;
      min-height: 610px;
    }

    /* LEFT PANEL */
    .left{
      position: relative;
      background: #b39680;
      padding: 88px 28px 72px;
      display:flex;
      flex-direction:column;
      justify-content:center;
    }

    .left::after{
      /* faint decorative line-art */
      content:"";
      position:absolute;
      inset:0;
      background:
        radial-gradient(900px 460px at 75% 70%, rgba(255,255,255,.06), rgba(255,255,255,0) 60%),
        radial-gradient(700px 360px at 62% 85%, rgba(255,255,255,.05), rgba(255,255,255,0) 62%);
      pointer-events:none;
    }

    .leftInner{ position: relative; z-index: 1; }

    .leftTitle{
      margin: 0 0 16px;
      font-family: var(--serif);
      color: #ffffff;
      font-weight: 800;
      letter-spacing: -0.6px;
      font-size: clamp(34px, 3.2vw, 48px);
      line-height: 1.08;
    }

    .leftDesc{
      margin: 0 0 34px;
      color: rgba(255,255,255,.84);
      font-size: 15px;
      line-height: 1.7;
      max-width: 520px;
    }

    .contacts{
      display:flex;
      flex-direction:column;
      gap: 18px;
      margin-top: 6px;
    }

    .contactRow{
      display:flex;
      align-items:center;
      gap: 14px;
    }

    .iconCircle{
      width: 44px;
      height: 44px;
      border-radius: 999px;
      background: rgba(255,255,255,.08);
      border: 1px solid rgba(255,255,255,.12);
      display:flex;
      align-items:center;
      justify-content:center;
      flex: 0 0 auto;
    }

    .cLabel{
      color: rgba(255,255,255,.72);
      font-size: 11px;
      font-weight: 900;
      letter-spacing: .9px;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .cValue{
      color:#fff;
      font-weight: 900;
      letter-spacing: .2px;
      font-size: 16px;
    }

    .cValue a{ color:#fff; text-decoration:none; }
    .cValue a:hover{ text-decoration: underline; }

    /* RIGHT PANEL */
    .right{
      padding: 0px 0px;

      display:flex;
      align-items:center;
      justify-content:center;
    }

    .form{
      width: 100%;
      max-width: 640px;
    }

    .formTitle{
      margin: 0 0 22px;
      color: #0b2b2a;
      font-weight: 900;
      font-size: 26px;
      letter-spacing: -0.2px;
    }

    .field{
      display:flex;
      flex-direction:column;
      gap: 2px;
      margin-bottom: 4px;
    }

    .row2{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 14px;
    }

    .label{
      font-size: 12px;
      font-weight: 900;
      letter-spacing: .6px;
      text-transform: uppercase;
      color: #6b7280;
    }

    .input, .select{
      width:100%;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid #e5e7eb;
      background: #fbfbfb;
      outline:none;
      font-size: 14px;
      color:#111827;
      transition: box-shadow .12s ease, border-color .12s ease, background .12s ease;
    }

    .input:focus, .select:focus{
      background:#fff;
      border-color: rgba(10,165,111,.55);
      box-shadow: 0 0 0 4px rgba(10,165,111,.14);
    }

    .selectWrap{
      position: relative;
    }

    .globe{
      position:absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      opacity: .75;
      pointer-events:none;
    }

    .select.hasIcon{ padding-left: 36px; }

    .submit{
      width: 100%;
      margin-top: 12px;
      border: 0;
      cursor: pointer;
      border-radius: 10px;
      padding: 14px 16px;
      color:#fff;
      font-weight: 900;
      font-size: 15px;
      background: #b39680;
      
      transition: transform .12s ease, box-shadow .12s ease, filter .12s ease;
    }

    .submit:hover{
      transform: translateY(-1px);
    
      filter: brightness(1.02);
    }

    .fine{
      margin: 14px 0 0;
      text-align:center;
      font-size: 12px;
      color:#9ca3af;
    }

    /* RESPONSIVE */
    @media (max-width: 1100px){
      .left{ padding: 76px 52px 64px; }
      .right{ padding: 6px 4px; }
    }

    @media (max-width: 920px){
      .shell{
        grid-template-columns: 1fr;
        min-height: unset;
      }
      .left{
        padding: 44px 22px 38px;
      }
      .right{
        padding: 4px 8px 4px;
      }
      .leftTitle{ font-size: clamp(30px, 6vw, 42px); }
      .leftDesc{ max-width: 680px; }
    }

    @media (max-width: 560px){
      
      .shell{ border-radius: 16px; }
      .row2{ grid-template-columns: 1fr; }
      .formTitle{ font-size: 22px; }
      .cValue{ font-size: 15px; }
      .iconCircle{ width: 42px; height: 42px; }
    }
  `,
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Submitted (demo)");
  };

  return (
    <div className="wrap">
      <style>{css}</style>

      <section className="shell" aria-label="Secure your unit callback section">
        {/* LEFT */}
        <div className="left">
          <div className="leftInner">
            <h2 className="leftTitle">Secure Your Unit Today</h2>
            <p className="leftDesc">
              Don&apos;t miss this opportunity in one of Dubai&apos;s fastest-growing green
              communities. High ROI potential and flexible payment plans available.
            </p>

            <div className="contacts">
              <div className="contactRow">
                <div className="iconCircle" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 3a2 2 0 0 1-.4 2.1L9.3 11a16 16 0 0 0 3.7 3.7l1.2-1.2a2 2 0 0 1 2.1-.4c1 .4 2 .7 3 .8A2 2 0 0 1 22 16.9Z"
                      stroke="rgba(255,255,255,.9)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="cLabel">Call us 24/7</div>
                  <div className="cValue">
                    <a href="tel:+97145798350">+971 4 579 83 50</a>
                  </div>
                </div>
              </div>

              <div className="contactRow">
                <div className="iconCircle" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6h16v12H4V6Z"
                      stroke="rgba(255,255,255,.9)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="rgba(255,255,255,.9)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="cLabel">Email us</div>
                  <div className="cValue">
                    <a href="mailto:sales@altairre.ae">sales@altairre.ae</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <form className="form" onSubmit={onSubmit}>
            <h3 className="formTitle">Request A Callback</h3>

            <div className="field">
              <div className="label">Full Name</div>
              <input className="input" placeholder="John Doe" />
            </div>

            <div className="row2">
              <div className="field" style={{ marginBottom: 0 }}>
                <div className="label">Country</div>
                <div className="selectWrap">
                  <svg className="globe" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <path d="M2 12h20" stroke="#6b7280" strokeWidth="2" />
                    <path
                      d="M12 2c3 3 4 6.5 4 10s-1 7-4 10c-3-3-4-6.5-4-10s1-7 4-10Z"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                  </svg>

                  <select
                    className="select hasIcon"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="UK">UK</option>
                    <option value="UAE">UAE</option>
                    <option value="KSA">KSA</option>
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>

              <div className="field" style={{ marginBottom: 0 }}>
                <div className="label">Phone</div>
                <input className="input" placeholder="+44 7700 900000" />
              </div>
            </div>

            <div className="field">
              <div className="label">Email</div>
              <input className="input" placeholder="john@example.com" />
            </div>

            <div className="row2">
              <div className="field" style={{ marginBottom: 0 }}>
                <div className="label">I am an</div>
                <select
                  className="select"
                  value={iam}
                  onChange={(e) => setIam(e.target.value)}
                >
                  <option>Investor</option>
                  <option>End User</option>
                  <option>Agent</option>
                </select>
              </div>

              <div className="field" style={{ marginBottom: 0 }}>
                <div className="label">Budget</div>
                <select
                  className="select"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option>AED 670K - 1M</option>
                  <option>AED 1M - 1.5M</option>
                  <option>AED 1.5M - 2M</option>
                  <option>AED 2M+</option>
                </select>
              </div>
            </div>

            <button onClick={openPopup} className="submit" type="submit">
              Submit Enquiry
            </button>

            <div className="fine">Your data is secure. No spam.</div>
          </form>
        </div>
      </section>
    </div>
  );
}
