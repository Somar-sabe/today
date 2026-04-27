'use client';

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

/**
 * Same form + same design
 * BUT: no background image, no overlay, no dark hero colors.
 */

countries.registerLocale(enLocale);

// ✅ All countries (ISO) + sorted
const COUNTRY_OPTIONS = Object.entries(
  countries.getNames("en", { select: "official" })
)
  .map(([code, name]) => ({ code, name }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function Lead({
  openPopup,
  ContactType = "https://promotion.altairre.ae/",
  PropertyId = null,
  ProjectId = null,
}) {
  const router = useRouter();

  // ✅ use ISO codes (UK is GB, UAE is AE, KSA is SA, USA is US)
  const [country, setCountry] = useState("GB");
  const [iam, setIam] = useState("Investor");
  const [budget, setBudget] = useState("AED 670K - 1M");

  // form fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const css = useMemo(
    () => `
    :root{
      --cardo:#ffffff;
      --muted:#6b7280;
      --line:#e5e7eb;
      --shadow: 0 18px 50px rgba(0,0,0,.18);
      --radius: 18px;
      --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji";
    }

    *{ box-sizing:border-box; }
    button, input, select{ font:inherit; }

    /* ✅ clean white page */
    .wrapp{
      width: 100%;
      display:flex;
      align-items:center;
      justify-content:center;
      padding: 18px 12px;
    }

    /* ✅ remove hero background color */
    .heroo{
      width: 100%;
      max-width: 1200px;
      min-height: auto;
      background: transparent;
      box-shadow: none;
      display:flex;
      justify-content:flex-end;
    }

    .contentt{
      width: 100%;
      display:flex;
      justify-content:center;
      padding: 0;
    }

    .rightt{
      width: 100%;
      max-width: 520px;
      display:flex;
      justify-content:flex-end;
    }

    /* ✅ keep card same */
    .cardd{
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
      color: var(--muted);
      font-size: 14px;
      line-height: 1.4;
    }

    .field{ display:flex; flex-direction:column; gap: 8px; }
    .label{
      font-family: var(--sans);
      font-size: 12px;
      color: var(--muted);
      font-weight: 800;
      letter-spacing: .5px;
      text-transform: uppercase;
    }

    .input, .select{
      width: 100%;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid var(--line);
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

    @media (max-width: 520px){
      .row2{ grid-template-columns: 1fr; }
      .cardTitle{ font-size: 26px; }
    }
  `,
    []
  );

  const isValidEmail = (v) => /^\S+@\S+\.\S+$/.test(String(v || "").trim());

  const countryName = useMemo(() => {
    const found = COUNTRY_OPTIONS.find((c) => c.code === country);
    return found?.name || country;
  }, [country]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

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
      Communication: "WhatsApp",
      Time: "Anytime",
      ContactType,
      PropertyId,
      ProjectId,
      Message: [
        `Landing: Dubai Green Heart`,
        `Country: ${countryName} (${country})`,
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

      const res = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });

      if (!res.ok) {
        let msg = "An error has occurred!";
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

      // ✅ optional pixel tracking
      try {
        if (typeof window !== "undefined" && window.fbq) window.fbq("track", "Lead");
      } catch {}

      // ✅ GO TO Thankyou page
      router.push(`/Thankyou?from=${encodeURIComponent(ContactType)}`);
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="wrapp" style={{ fontFamily: "ui-sans-serif, system-ui" }}>
      <style>{css}</style>

      <section className="heroo" aria-label="Lead Form">
        <div className="contentt">
          <div className="rightt">
            <form className="cardd" onSubmit={onSubmit}>
              <h2 className="cardTitle">Register Your Interest</h2>
              <p className="cardDesc">
                Exclusive pre-launch inventory for international investors.
              </p>

              <div style={{ paddingBottom: "15px" }} className="row2">
                <div className="field">
                  <div className="label">I am an</div>
                  <select className="select" value={iam} onChange={(e) => setIam(e.target.value)}>
                    <option value="Investor">Investor</option>
                    <option value="End User">End User</option>
                    <option value="Agent">Agent</option>
                  </select>
                </div>

                <div className="field">
                  <div className="label">Budget</div>
                  <select className="select" value={budget} onChange={(e) => setBudget(e.target.value)}>
                    <option value="AED 670K - 1M">AED 670K - 1M</option>
                    <option value="AED 1M - 1.5M">AED 1M - 1.5M</option>
                    <option value="AED 1.5M - 2M">AED 1.5M - 2M</option>
                    <option value="AED 2M+">AED 2M+</option>
                  </select>
                </div>
              </div>

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
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
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