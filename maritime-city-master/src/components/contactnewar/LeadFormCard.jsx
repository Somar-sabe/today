'use client';

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import countries from "i18n-iso-countries";
import arLocale from "i18n-iso-countries/langs/ar.json";
import enLocale from "i18n-iso-countries/langs/en.json";

/**
 * نفس الفورم + نفس التصميم
 * تم تغيير اللغة فقط إلى العربية
 * ✅ تم إضافة كل دول العالم (ISO) مع RTL
 */

countries.registerLocale(arLocale);
countries.registerLocale(enLocale);

// ✅ كل الدول بالعربي (مع fallback للإنجليزي إذا نقص اسم)
const COUNTRY_OPTIONS = Object.entries(
  countries.getNames("ar", { select: "official" })
)
  .map(([code, name]) => ({
    code,
    name: name || countries.getName(code, "en") || code,
  }))
  .sort((a, b) => String(a.name).localeCompare(String(b.name), "ar"));

export default function Lead({
  openPopup,
  ContactType = "https://promotion.altairre.ae/Contactar",
  PropertyId = null,
  ProjectId = null,
}) {
  const router = useRouter();

  // ✅ ISO codes: UK=GB, UAE=AE, KSA=SA, USA=US
  const [country, setCountry] = useState("AE");
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
      --radius: 18px;
      --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
    }

    *{ box-sizing:border-box; }
    button, input, select{ font:inherit; }

    .wrapp{
      min-height: 100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:18px 12px;
      direction: rtl; /* ✅ عربي */
    }

    .heroo{
      width:100%;
      max-width:1200px;
      background:transparent;
      display:flex;
      justify-content:flex-start;
    }

    .cardd{
      width:100%;
      max-width:520px;
      background:var(--cardo);
      border-radius:18px;
      box-shadow:var(--shadow);
      border:1px solid rgba(0,0,0,.06);
      padding:26px 26px 18px;
      text-align:right;
    }

    .cardTitle{
      font-size:28px;
      margin:0 0 6px;
      font-weight:800;
      color:#0f3a34;
    }

    .cardDesc{
      margin:0 0 18px;
      color:var(--muted);
      font-size:14px;
      line-height:1.5;
    }

    .field{ display:flex; flex-direction:column; gap:8px; }

    .label{
      font-size:12px;
      color:var(--muted);
      font-weight:800;
      letter-spacing:.3px;
    }

    .input, .select{
      width:100%;
      padding:12px 14px;
      border-radius:10px;
      border:1px solid var(--line);
      background:#fff;
      font-size:14px;
      outline:none;
      transition: box-shadow .12s ease, border-color .12s ease;
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
      border:0;
      cursor:pointer;
      padding:14px;
      border-radius:12px;
      font-weight:900;
      color:#fff;
      background:linear-gradient(180deg,#b89264,#d2b48c);
      transition: opacity .15s ease, transform .15s ease;
    }
    .submit:hover{ transform: translateY(-1px); }
    .submit:disabled{ opacity:.65; cursor:not-allowed; transform:none; }

    .fine{
      margin-top:10px;
      text-align:center;
      font-size:12px;
      color:#9ca3af;
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

    if (!n) return alert("يرجى إدخال الاسم الكامل");
    if (!p) return alert("يرجى إدخال رقم الهاتف");
    if (!em || !isValidEmail(em)) return alert("يرجى إدخال بريد إلكتروني صحيح");

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
        `البلد: ${countryName} (${country})`,
        `أنا: ${
          iam === "Investor"
            ? "مستثمر"
            : iam === "End User"
            ? "مستخدم نهائي"
            : "وسيط عقاري"
        }`,
        `الميزانية: ${budget}`,
        "",
        `الاسم: ${n}`,
        `البريد: ${em}`,
        `الهاتف: ${p}`,
      ].join("\n"),
    };

    try {
      setSubmitting(true);

      const res = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });

      if (!res.ok) return alert("حدث خطأ أثناء الإرسال");

      // ✅ Redirect to Thankyou page
      router.push(`/Thankyou?from=${encodeURIComponent(ContactType)}`);
    } catch {
      alert("خطأ في الشبكة، حاول مرة أخرى");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="wrapp">
      <style>{css}</style>

      <section className="heroo" aria-label="نموذج التواصل">
        <form className="cardd" onSubmit={onSubmit}>
          <h2 className="cardTitle">سجّل اهتمامك</h2>
          <p className="cardDesc">
            احصل على العروض الحصرية والمخططات والأسعار قبل الإطلاق.
          </p>

          <div style={{ paddingBottom: "15px" }} className="row2">
            <div className="field">
              <div className="label">أنا</div>
              <select
                className="select"
                value={iam}
                onChange={(e) => setIam(e.target.value)}
              >
                <option value="Investor">مستثمر</option>
                <option value="End User">مستخدم نهائي</option>
                <option value="Agent">وسيط عقاري</option>
              </select>
            </div>

            <div className="field">
              <div className="label">الميزانية</div>
              <select
                className="select"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="AED 670K - 1M">670 ألف - 1 مليون</option>
                <option value="AED 1M - 1.5M">1 - 1.5 مليون</option>
                <option value="AED 1.5M - 2M">1.5 - 2 مليون</option>
                <option value="AED 2M+">2 مليون+</option>
              </select>
            </div>
          </div>

          <div className="field">
            <div className="label">الاسم الكامل</div>
            <input
              className="input"
              placeholder="محمد أحمد"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div style={{ height: 12 }} />

          <div className="row2">
            <div className="field">
              <div className="label">الدولة</div>
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
              <div className="label">رقم الهاتف</div>
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
            <div className="label">البريد الإلكتروني</div>
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
            {submitting ? "جاري الإرسال..." : "احصل على المخططات والأسعار"}
          </button>

          <p className="fine">بياناتك آمنة تمامًا. لن نرسل أي رسائل مزعجة.</p>
        </form>
      </section>
    </div>
  );
}