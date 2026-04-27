import React, { useMemo, useState } from "react";

/**
 * Props:
 * - openPopup?: () => void
 * - backgroundUrl?: string
 * - ContactType?: string
 * - PropertyId?: string|number|null
 * - ProjectId?: string|number|null
 *
 * NOTE: For localhost you may hit CORS calling api.altairre.ae directly.
 * Prefer using a Next.js proxy route like /api/contacts.
 */
export default function DubaiGreenHeartHero({
  openPopup,
  backgroundUrl = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  ContactType = "https://promotion.altairre.ae/dubai-green-heart",
  PropertyId = null,
  ProjectId = null,
}) {
  const [country, setCountry] = useState("UK");
  const [iam, setIam] = useState("Investor");
  const [budget, setBudget] = useState("AED 670K - 1M");

  // form fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const css = useMemo(
    () => `
    .overlay{
      position:absolute;
      inset:0;
      background:
        linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.78) 0%,
          rgba(0, 0, 0, 0.62) 45%,
          rgba(0, 0, 0, 0.28) 70%,
          rgba(0, 0, 0, 0) 82%
        ),
        repeating-linear-gradient(
          90deg,
          rgba(255,255,255,.05) 0px,
          rgba(255,255,255,.05) 1px,
          rgba(255,255,255,0) 18px,
          rgba(255,255,255,0) 40px
        );
    }

    .poht{ background:transparent !important; }

    :root{
      --bg:#0b2d2a;
      --mint:#2dd4a7;
      --mint2:#1ec997;
      --white:#ffffff;
      --cardo:#ffffff;
      --text:#0e2c2a;
      --muted:#6b7280;
      --line:#e5e7eb;
      --shadow: 0 18px 50px rgba(0,0,0,.18);
      --radius: 18px;
      --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji";
    }

    *{ box-sizing:border-box; }
    a{ color:inherit; text-decoration:none; }
    button, input, select{ font:inherit; }

    .wrap{
      width: 100%;
      min-height: 100vh;
      display:flex;
      align-items:stretch;
      justify-content:center;
      background: #0a1f1c;
      padding: 18px 0px;
    }

    .hero{
      position: relative;
      width: -webkit-fill-available;
      min-height: 840px;
      overflow: hidden;
      background: #0b2d2a;
      box-shadow: 1 24px 70px rgba(0,0,0,.28);
      display:flex;
      align-items: stretch;
    }

    .bg{
      position:absolute;
      inset:0;
      background-image: url("${backgroundUrl}");
      background-size: cover;
      background-position: center;
      transform: scale(1.02);
      filter: saturate(1.05) contrast(1.02);
    }

    .content{
      position: relative;
      z-index: 2;
      width: 100%;
      display:flex;
      gap: 22px;
      padding: 46px 44px;
      align-items: center;
      justify-content: space-between;
    }

    .left{
      width: min(690px, 56%);
      padding-right: 8px;
    }

    .pill{
      width: fit-content;
      display:inline-flex;
      align-items:center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,.12);
      border: 1px solid rgba(255,255,255,.18);
      color: rgba(255,255,255,.92);
      font-family: var(--sans);
      font-weight: 600;
      font-size: 14px;
      letter-spacing: .2px;
      backdrop-filter: blur(8px);
    }

    .pin{ width: 18px; height: 18px; display:inline-block; }

    .h1{
      margin: 18px 0 12px;
      font-family: var(--serif);
      font-weight: 700;
      line-height: .92;
      letter-spacing: -1px;
      color: rgba(255,255,255,.95);
      font-size: clamp(44px, 5vw, 72px);
    }

    .h1 .mint{ color: var(--mint); }

    .sub{
      font-family: var(--sans);
      color: rgba(255,255,255,.9);
      font-size: 18px;
      line-height: 1.45;
      max-width: 520px;
      margin: 0 0 26px;
    }

    .sub b{ font-weight: 800; color: rgba(255,255,255,.98); }

    .ctaRow{ display:flex; gap: 14px; align-items:center; }

    .btn{
      border:0;
      cursor:pointer;
      border-radius: 999px;
      padding: 14px 22px;
      font-family: var(--sans);
      font-weight: 800;
      font-size: 15px;
      display:inline-flex;
      align-items:center;
      gap: 10px;
      transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease;
      user-select:none;
      white-space: nowrap;
    }

    .btnPrimary{
      background: linear-gradient(180deg,#b89264 0%,#bc986b 45%,#c6a374 75%,#d2b48c 100%);
      color: #ffffff;
      box-shadow: 0 12px 30px rgba(0,0,0,.22);
    }
    .btnPrimary:hover{ transform: translateY(-1px); box-shadow: 0 14px 38px rgba(0,0,0,.26); }

    .btnGhost{
      background: rgba(255,255,255,.14);
      color: rgba(255,255,255,.95);
      border: 1px solid rgba(255,255,255,.24);
      backdrop-filter: blur(10px);
    }
    .btnGhost:hover{ transform: translateY(-1px); border-color: rgba(255,255,255,.34); }

    .bubbleIcon{ width: 18px; height: 18px; display:inline-block; }

    .right{ width: min(520px, 74%); display:flex; justify-content:flex-end; }

    .card{
      width: 100%;
      max-width: 520px;
      background: var(--cardo);
      border-radius: 18px;
      box-shadow: var(--shadow);
      border: 1px solid rgba(0,0,0,.06);
      padding: 26px 26px 18px;
    }

    .cardTitle{
      font-family: var(--serif);
      font-size: 30px;
      margin: 0 0 6px;
      color: #0f3a34;
      letter-spacing: -0.4px;
      font-weight: 800;
    }

    .cardDesc{
      margin: 0 0 18px;
      font-family: var(--sans);
      color: #6b7280;
      font-size: 14px;
      line-height: 1.4;
    }

    .field{ display:flex; flex-direction:column; gap: 8px; }
    .label{
      font-family: var(--sans);
      font-size: 12px;
      color: #6b7280;
      font-weight: 800;
      letter-spacing: .5px;
      text-transform: uppercase;
    }

    .input, .select{
      width: 100%;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid #e5e7eb;
      background: #fff;
      outline: none;
      font-family: var(--sans);
      font-size: 14px;
      color: #111827;
      transition: box-shadow .12s ease, border-color .12s ease;
    }

    .input::placeholder{ color:#9ca3af; }

    .input:focus, .select:focus{
      border-color: rgba(16,185,129,.55);
      box-shadow: 0 0 0 4px rgba(16,185,129,.15);
    }

    .row2{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .selectWrap{ position: relative; }
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
      margin-top: 16px;
      border: 0;
      cursor:pointer;
      padding: 14px 16px;
      border-radius: 12px;
      font-family: var(--sans);
      font-weight: 900;
      font-size: 15px;
      color: #ffffff;
      background: linear-gradient(180deg,#b89264 0%,#bc986b 45%,#c6a374 75%,#d2b48c 100%);
      box-shadow: 0 12px 30px rgba(0,0,0,.18);
      transition: transform .12s ease, box-shadow .12s ease;
      opacity: 1;
    }
    .submit:hover{ transform: translateY(-1px); box-shadow: 0 14px 38px rgba(0,0,0,.22); }
    .submit:disabled{ opacity: .6; cursor:not-allowed; transform:none; }

    .fine{
      margin: 10px 0 0;
      text-align:center;
      font-family: var(--sans);
      color:#9ca3af;
      font-size: 12px;
    }

    @media (max-width: 980px){
      .content{ padding: 34px 22px; align-items: flex-start; }
      .left{ width: 56%; }
      .right{ width: 44%; }
      .card{ padding: 22px 20px 16px; }
      .cardTitle{ font-size: 26px; }
    }

    @media (max-width: 820px){
      .hero{ min-height: 780px; }
      .content{ flex-direction: column; gap: 18px; padding: 22px 18px 18px; }
      .left, .right{ width: 100%; }
      .left{ padding-right: 0; padding-top: 8px; }
      .right{ justify-content: center; padding-bottom: 12px; }
      .sub{ max-width: 640px; }
    }

    @media (max-width: 520px){
      .wrap{ padding: 10px; }
      .hero{ border-radius: 16px; }
      .content{ padding: 16px 14px; }
      .pill{ font-size: 13px; }
      .sub{ font-size: 15px; }
      .btn{ width: 100%; justify-content:center; padding: 14px 16px; }
      .row2{ grid-template-columns: 1fr; }
      .card{ border-radius: 16px; }
    }
  `,
    [backgroundUrl]
  );

  const isValidEmail = (v) => /^\S+@\S+\.\S+$/.test(String(v || "").trim());

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    // Basic validation like your previous form
    const n = fullName.trim();
    const p = phone.trim();
    const em = email.trim();

    if (!n) return alert("Please enter your full name");
    if (!p) return alert("Please enter your phone");
    if (!em || !isValidEmail(em)) return alert("Please enter a valid email");

    const finalPayload = {
      Name: n,
      Email: em,
      Phone: p,
      Communication: "WhatsApp", // or "Phone call" etc. (fixed default)
      Time: "Anytime",

      ContactType,
      PropertyId,
      ProjectId,

      Message: [
        `Landing: Dubai Green Heart`,
        `Country: ${country}`,
        `I am: ${iam}`,
        `Budget: ${budget}`,
        "",
        `Name: ${n}`,
        `Email: ${em}`,
        `Phone: ${p}`,
      ].join("\n"),
    };

    try {
      setSubmitting(true);

      // ✅ If you get CORS on localhost, replace the URL with "/api/contacts" (proxy route)
      const res = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });

      if (!res.ok) {
        let msg = "An error has occured!";
        try {
          const ct = res.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const err = await res.json();
            msg = err?.message || msg;
          } else {
            const txt = await res.text();
            if (txt && txt.length < 200) msg = txt;
          }
        } catch {}
        alert(msg);
        return;
      }

      // ✅ optional: Meta Pixel lead event
      try {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead");
        }
      } catch {}

      alert("Form sent!");
      setFullName("");
      setPhone("");
      setEmail("");
      // keep selections as they are (or reset if you want)
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="wrap" style={{ fontFamily: "ui-sans-serif, system-ui" }}>
      <style>{css}</style>

      <section className="hero" aria-label="Dubai Green Heart Hero">
        <div className="bg" />
        <div className="overlay" />

        <div className="content">
          {/* LEFT */}
          <div className="left poht">
            <div className="pill">
              <svg className="pin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
                  stroke="rgba(255,255,255,.9)"
                  strokeWidth="2"
                />
                <path
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  stroke="rgba(255,255,255,.9)"
                  strokeWidth="2"
                />
              </svg>
              Nature-Inspired Living in Majan
            </div>

            <h1 className="h1">
              Invest in Dubai <br />
              <span className="mint">Green Heart</span>
            </h1>

            <p className="sub">
              Studios, 1, 2 &amp; 3 Bedroom Apartments from AED <b>670,000</b>. Pay{" "}
              <b>1%</b> Monthly with a flexible post-handover plan.
            </p>

            <div className="ctaRow">
              <button
                onClick={openPopup}
                style={{ color: "white" }}
                className="btn btnPrimary"
                type="button"
              >
                Download Brochure
              </button>

              <button
                onClick={openPopup}
                style={{ color: "white" }}
                className="btn btnGhost"
                type="button"
              >
                <svg className="bubbleIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21 12a8.5 8.5 0 0 1-8.5 8.5c-1.1 0-2.2-.2-3.2-.6L3 21l1.1-6.3c-.4-1-.6-2.1-.6-3.2A8.5 8.5 0 1 1 21 12Z"
                    stroke="rgba(255,255,255,.92)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <form className="card" onSubmit={onSubmit}>
              <h2 className="cardTitle">Register Your Interest</h2>
              <p className="cardDesc">Exclusive pre-launch inventory for international investors.</p>

              <div className="field">
                <div className="label">Full Name</div>
                <input
                  className="input"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div style={{ height: 12 }} />

              <div className="row2">
                <div className="field">
                  <div className="label">Country</div>
                  <div className="selectWrap">
                    <svg className="globe" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="#6b7280" strokeWidth="2" />
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
                      <option value="UAE">UAE</option>
                      <option value="UK">UK</option>
                      <option value="IR">IR</option>
                      <option value="KSA">KSA</option>
                      <option value="USA">USA</option>
                      <option value="India">India</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <div className="label">Phone</div>
                  <input
                    className="input"
                    placeholder="+44 7700 900000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div style={{ height: 12 }} />

              <div className="field">
                <div className="label">Email</div>
                <input
                  className="input"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                />
              </div>

              <div style={{ height: 12 }} />

              <div className="row2">
                <div className="field">
                  <div className="label">I am an</div>
                  <select className="select" value={iam} onChange={(e) => setIam(e.target.value)}>
                    <option>Investor</option>
                    <option>End User</option>
                    <option>Agent</option>
                  </select>
                </div>

                <div className="field">
                  <div className="label">Budget</div>
                  <select className="select" value={budget} onChange={(e) => setBudget(e.target.value)}>
                    <option>AED 670K - 1M</option>
                    <option>AED 1M - 1.5M</option>
                    <option>AED 1.5M - 2M</option>
                    <option>AED 2M+</option>
                  </select>
                </div>
              </div>

              <button className="submit" type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Get Floor Plans & Prices"}
              </button>

              <p className="fine">Your data is secure. No spam.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
