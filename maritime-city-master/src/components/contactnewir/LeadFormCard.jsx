'use client';

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import countries from "i18n-iso-countries";
import faLocale from "i18n-iso-countries/langs/fa.json";
import enLocale from "i18n-iso-countries/langs/en.json";

/**
 * Same functionality
 * Language switched to Persian (Farsi)
 * ✅ All countries list (ISO)
 */

countries.registerLocale(faLocale);
countries.registerLocale(enLocale);

// ✅ All countries in Farsi + fallback to English if missing
const COUNTRY_OPTIONS = Object.entries(
  countries.getNames("fa", { select: "official" })
)
  .map(([code, name]) => ({
    code,
    name: name || countries.getName(code, "en") || code,
  }))
  .sort((a, b) => String(a.name).localeCompare(String(b.name), "fa"));

export default function Lead({
  openPopup,
  ContactType = "https://promotion.altairre.ae/contactir",
  PropertyId = null,
  ProjectId = null,
}) {
  const router = useRouter();

  // ✅ ISO codes: UK=GB, UAE=AE, KSA=SA, USA=US, Iran=IR
  const [country, setCountry] = useState("IR");
  const [iam, setIam] = useState("Investor");
  const [budget, setBudget] = useState("AED 670K - 1M");

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
    }

    *{ box-sizing:border-box; }
    button, input, select{ font:inherit; }

    .wrapp{
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:18px 12px;
      direction: rtl; /* ✅ فارسی */
    }

    .cardd{
      width:100%;
      max-width:520px;
      background:#fff;
      border-radius:18px;
      box-shadow:var(--shadow);
      border:1px solid rgba(0,0,0,.06);
      padding:26px;
      text-align:right;
    }

    .cardTitle{
      font-size:28px;
      font-weight:800;
      margin-bottom:6px;
      color:#0f3a34;
    }

    .cardDesc{
      font-size:14px;
      color:var(--muted);
      margin-bottom:18px;
      line-height:1.5;
    }

    .field{ display:flex; flex-direction:column; gap:8px; }

    .label{
      font-size:12px;
      color:var(--muted);
      font-weight:700;
    }

    .input, .select{
      width:100%;
      padding:12px;
      border-radius:10px;
      border:1px solid var(--line);
      font-size:14px;
      outline:none;
      transition: box-shadow .12s ease, border-color .12s ease;
      background:#fff;
    }

    .input:focus, .select:focus{
      border-color: rgba(16,185,129,.55);
      box-shadow: 0 0 0 4px rgba(16,185,129,.15);
    }

    .row2{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    }

    .submit{
      width:100%;
      margin-top:16px;
      padding:14px;
      border:0;
      border-radius:12px;
      font-weight:800;
      color:#fff;
      background:linear-gradient(180deg,#b89264,#d2b48c);
      cursor:pointer;
      transition: opacity .15s ease, transform .15s ease;
    }
    .submit:hover{ transform: translateY(-1px); }
    .submit:disabled{ opacity:.65; cursor:not-allowed; transform:none; }

    .fine{
      text-align:center;
      font-size:12px;
      color:#9ca3af;
      margin-top:10px;
      line-height:1.5;
    }

    @media(max-width:520px){
      .row2{ grid-template-columns:1fr; }
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

    if (!n) return alert("لطفاً نام کامل خود را وارد کنید");
    if (!p) return alert("لطفاً شماره تلفن را وارد کنید");
    if (!em || !isValidEmail(em)) return alert("لطفاً ایمیل معتبر وارد کنید");

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
        `کشور: ${countryName} (${country})`,
        `من هستم: ${
          iam === "Investor"
            ? "سرمایه‌گذار"
            : iam === "End User"
            ? "خریدار نهایی"
            : "مشاور املاک"
        }`,
        `بودجه: ${budget}`,
        "",
        `نام: ${n}`,
        `ایمیل: ${em}`,
        `تلفن: ${p}`,
      ].join("\n"),
    };

    try {
      setSubmitting(true);

      const res = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });

      if (!res.ok) return alert("خطا در ارسال فرم");

      // ✅ Redirect to thank you page (and pass where it came from)
      router.push(`/Thankyou?from=${encodeURIComponent(ContactType)}`);
    } catch {
      alert("خطای شبکه، لطفاً دوباره تلاش کنید");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="wrapp">
      <style>{css}</style>

      <form className="cardd" onSubmit={onSubmit}>
        <h2 className="cardTitle">ثبت علاقه‌مندی</h2>
        <p className="cardDesc">
          دسترسی زودهنگام به قیمت‌ها و پلان‌ها برای سرمایه‌گذاران بین‌المللی.
        </p>

        <div style={{ paddingBottom: "15px" }} className="row2">
          <div className="field">
            <div className="label">من هستم</div>
            <select
              className="select"
              value={iam}
              onChange={(e) => setIam(e.target.value)}
            >
              <option value="Investor">سرمایه‌گذار</option>
              <option value="End User">خریدار نهایی</option>
              <option value="Agent">مشاور املاک</option>
            </select>
          </div>

          <div className="field">
            <div className="label">بودجه</div>
            <select
              className="select"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="AED 670K - 1M">۶۷۰ هزار تا ۱ میلیون</option>
              <option value="AED 1M - 1.5M">۱ تا ۱.۵ میلیون</option>
              <option value="AED 1.5M - 2M">۱.۵ تا ۲ میلیون</option>
              <option value="AED 2M+">۲ میلیون+</option>
            </select>
          </div>
        </div>

        <div className="field">
          <div className="label">نام کامل</div>
          <input
            className="input"
            placeholder="علی رضایی"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div style={{ height: 12 }} />

        <div className="row2">
          <div className="field">
            <div className="label">کشور</div>
            <select
              className="select"
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

          <div className="field">
            <div className="label">شماره تلفن</div>
            <input
              className="input"
              placeholder="+971 50 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={{ height: 12 }} />

        <div className="field">
          <div className="label">ایمیل</div>
          <input
            className="input"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
        </div>

        <div style={{ height: 12 }} />

        <button className="submit" disabled={submitting}>
          {submitting ? "در حال ارسال..." : "دریافت قیمت و پلان‌ها"}
        </button>

        <p className="fine">اطلاعات شما کاملاً امن است. بدون اسپم.</p>
      </form>
    </div>
  );
}