'use client';

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import countries from "i18n-iso-countries";
import ruLocale from "i18n-iso-countries/langs/ru.json";
import enLocale from "i18n-iso-countries/langs/en.json";

/**
 * Та же форма + тот же дизайн
 * Изменён только язык на русский
 * ✅ Добавлены все страны мира (ISO)
 */

countries.registerLocale(ruLocale);
countries.registerLocale(enLocale);

// ✅ Все страны на русском (fallback на английский)
const COUNTRY_OPTIONS = Object.entries(
  countries.getNames("ru", { select: "official" })
)
  .map(([code, name]) => ({
    code,
    name: name || countries.getName(code, "en") || code,
  }))
  .sort((a, b) => String(a.name).localeCompare(String(b.name), "ru"));

export default function Lead({
  openPopup,
  ContactType = "https://promotion.altairre.ae/Contactru",
  PropertyId = null,
  ProjectId = null,
}) {
  const router = useRouter();

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
     
      display:flex;
      align-items:center;
      justify-content:center;
      padding:18px 12px;
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
      text-align:left;
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

    if (!n) return alert("Пожалуйста, введите полное имя");
    if (!p) return alert("Пожалуйста, введите номер телефона");
    if (!em || !isValidEmail(em)) return alert("Пожалуйста, введите корректный email");

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
        `Страна: ${countryName} (${country})`,
        `Я: ${
          iam === "Investor"
            ? "Инвестор"
            : iam === "End User"
            ? "Покупатель для себя"
            : "Агент по недвижимости"
        }`,
        `Бюджет: ${budget}`,
        "",
        `Имя: ${n}`,
        `Email: ${em}`,
        `Телефон: ${p}`,
      ].join("\n"),
    };

    try {
      setSubmitting(true);

      const res = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });

      if (!res.ok) return alert("Произошла ошибка при отправке");

      router.push(`/Thankyou?from=${encodeURIComponent(ContactType)}`);
    } catch {
      alert("Ошибка сети, попробуйте снова");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="wrapp">
      <style>{css}</style>

      <section className="heroo" aria-label="Контактная форма">
        <form className="cardd" onSubmit={onSubmit}>
          <h2 className="cardTitle">Оставьте заявку</h2>
          <p className="cardDesc">
            Получите эксклюзивные предложения, планировки и цены до официального запуска.
          </p>

          <div style={{ paddingBottom: "15px" }} className="row2">
            <div className="field">
              <div className="label">Я</div>
              <select
                className="select"
                value={iam}
                onChange={(e) => setIam(e.target.value)}
              >
                <option value="Investor">Инвестор</option>
                <option value="End User">Покупатель для себя</option>
                <option value="Agent">Агент по недвижимости</option>
              </select>
            </div>

            <div className="field">
              <div className="label">Бюджет</div>
              <select
                className="select"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="AED 670K - 1M">670 тыс – 1 млн</option>
                <option value="AED 1M - 1.5M">1 – 1.5 млн</option>
                <option value="AED 1.5M - 2M">1.5 – 2 млн</option>
                <option value="AED 2M+">2 млн+</option>
              </select>
            </div>
          </div>

          <div className="field">
            <div className="label">Полное имя</div>
            <input
              className="input"
              placeholder="Иван Иванов"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div style={{ height: 12 }} />

          <div className="row2">
            <div className="field">
              <div className="label">Страна</div>
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
              <div className="label">Номер телефона</div>
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
            <div className="label">Email</div>
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
            {submitting ? "Отправка..." : "Получить планировки и цены"}
          </button>

          <p className="fine">
            Ваши данные полностью защищены. Мы не отправляем спам.
          </p>
        </form>
      </section>
    </div>
  );
}
