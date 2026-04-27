import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import countries from "i18n-iso-countries";
import ruLocale from "i18n-iso-countries/langs/ru.json";
import enLocale from "i18n-iso-countries/langs/en.json";
import Footer from "@/components/footer/footer";

import {
  Percent,
  Calendar,
  TrendingUp,
  ChevronRight,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Phone,
  Send,
  Timer,
  Award,
} from "lucide-react";

/* ✅ register locales once */
countries.registerLocale(ruLocale);
countries.registerLocale(enLocale);

/**
 * ✅ Same logic + same design
 * - Country list now in EN
 * - All UI text in EN
 * - Payload Message now in EN
 * - ContactType switched to Contacten (edit if your backend expects something else)
 */
const COUNTRY_OPTIONS = Object.entries(
  countries.getNames("en", { select: "official" })
)
  .map(([code, name]) => ({
    code,
    name: name || countries.getName(code, "en") || code,
  }))
  .sort((a, b) => String(a.name).localeCompare(String(b.name), "en"));

export default function Index() {
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);

  // ✅ same form logic
  const [country, setCountry] = useState("AE");
  const [iam, setIam] = useState("Investor");
  const [budget, setBudget] = useState("AED 670K - 1M");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);

  // ✅ IMPORTANT: changed from Contactru -> Contacten (keep Contactru if you need)
  const ContactType = "https://promotion.altairre.ae/Contacten";
  const PropertyId = null;
  const ProjectId = null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (!p) return alert("Please enter your phone number");
    if (!em || !isValidEmail(em)) return alert("Please enter a valid email");

    const iamLabel =
      iam === "Investor"
        ? "Investor"
        : iam === "End User"
        ? "End user (for self)"
        : "Real estate agent";

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
        `Country: ${countryName} (${country})`,
        `I am: ${iamLabel}`,
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

      if (!res.ok) return alert("Something went wrong while submitting");

      router.push(`/Thankyou?from=${encodeURIComponent(ContactType)}`);
    } catch {
      alert("Network error, please try again");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="lp">
      {/* HEADER */}
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <div className="brand">
            <div className={`brand__text ${scrolled ? "brand__text--dark" : ""}`}>
              Altair <span className="brand__elite">Realestate</span>
            </div>
          </div>

          <nav className={`nav ${scrolled ? "nav--dark" : ""}`}>
            <a href="#offers">Offers</a>
            <a href="#payment">Payment Plans</a>
            <a href="#form" className="nav__cta">
              Get Catalog
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero__overlay" />
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000"
          alt="Dubai Skyline"
          className="hero__bg"
          loading="lazy"
        />

        <div className="container hero__content">
          <div className="pill">
            <Timer size={16} />
            <span>RAMADAN EXCLUSIVE</span>
          </div>

          <h1 className="hero__title">
            Invest in the Future <br />
            <span className="gold">with up to 30% off</span>
          </h1>

          <p className="hero__desc">
            The best opportunity of the year is here. Limited-time prices and
            smart payment options designed for confident investors.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#form">
              Request Project List <ChevronRight size={18} />
            </a>
            <a className="btn btn--ghost" href="https://wa.me/+971586232132">
              <MessageSquare size={18} /> WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="section section--white">
        <div className="container">
          <div className="grid3">
            <Card
              icon={<Percent />}
              title="Up to 30% Discounts"
              text="On selected premium residential projects during the holy month only."
            />
            <Card
              icon={<TrendingUp />}
              title="Plans from 0.25%"
              text="Ultra-low monthly payments on selected projects for an easy start."
            />
            <Card
              icon={<Calendar />}
              title="Flexible Payment"
              text="Standard monthly installment from 0.5% — invest without pressure."
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="payment" className="section section--dark">
        <div className="ornament" aria-hidden="true" />

        <div className="container why">
          <div className="why__left">
            <h2 style={{ color: "white" }} className="h2">
              The perfect time for <br />
              <span className="gold">smart investing</span>
            </h2>

            <div className="why__list">
              {[
                "Low entry threshold into the Dubai market",
                "Stable currency and strong ROI potential",
                "No income tax and no property tax",
                "Eligibility for residency visa options",
              ].map((t, i) => (
                <div key={i} className="why__item">
                  <span className="check">
                    <CheckCircle2 size={18} />
                  </span>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="why__right">
            <div className="masonry col1">
              <img
                src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&q=80&w=900"
                alt="Luxury Living"
                loading="lazy"
              />
            </div>
            <div className="masonry col2">
              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=900"
                alt="Palm Jumeirah"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="section section--amber">
        <div className="container max">
          <div className="formCard">
            <div className="formCard__left">
              <Award size={44} className="award" />
              <h3 className="h3">Get the private shortlist</h3>
              <p className="mutedOnAmber">
                Submit your details and our expert will share the best projects
                with a 0.25% payment plan.
              </p>

              <div className="contactLines">
                <div className="line">
                  <MapPin size={18} /> <span>Business Bay, Dubai, UAE</span>
                </div>
                <div className="line">
                  <Phone size={18} /> <span>+971 58 623 2132</span>
                </div>
              </div>
            </div>

            <div className="formCard__right">
              <form className="form" onSubmit={onSubmit} aria-label="Contact form">
                <div className="row2">
                  <div className="field">
                    <div className="label">I am</div>
                    <select
                      className="select"
                      value={iam}
                      onChange={(e) => setIam(e.target.value)}
                    >
                      <option value="Investor">Investor</option>
                      <option value="End User">End User</option>
                      <option value="Agent">Agent</option>
                    </select>
                  </div>

                  <div className="field">
                    <div className="label">Budget</div>
                    <select
                      className="select"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    >
                      <option value="AED 670K - 1M">AED 670K – 1M</option>
                      <option value="AED 1M - 1.5M">AED 1M – 1.5M</option>
                      <option value="AED 1.5M - 2M">AED 1.5M – 2M</option>
                      <option value="AED 2M+">AED 2M+</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <div className="label">Full name</div>
                  <input
                    className="input"
                    placeholder="John Smith"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="row2">
                  <div className="field">
                    <div className="label">Country</div>
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
                    <div className="label">Phone number</div>
                    <input
                      className="input"
                      placeholder="+971 50 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

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

                <button className="submit" disabled={submitting} type="submit">
                  {submitting ? "Sending..." : "Get floor plans & prices"}{" "}
                  <Send size={18} />
                </button>

                <p className="fine">
                  Your information is protected. We don’t send spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button (Mobile) */}
      <a className="waFloat" href="https://wa.me/#" aria-label="WhatsApp">
        <MessageSquare size={22} />
      </a>

      <style jsx global>{`
        :root {
          --amber: #d39c3a;
          --dark: #0f0f10;
          --text: #121212;
          --muted: #6b7280;
          --line: #e5e7eb;
          --shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
        }
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Arial;
          color: var(--text);
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }
        .max {
          width: min(980px, calc(100% - 32px));
          margin: 0 auto;
        }
        .section {
          padding: 84px 0;
        }
        .section--white {
          background: #fff;
        }
        .section--dark {
          background: #0b0b0d;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .section--amber {
          background: #fbf2df;
        }
        .gold {
          color: var(--amber);
        }

        /* header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 18px 0;
          transition: all 0.25s ease;
        }
        .header--scrolled {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          padding: 12px 0;
        }
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand__badge {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--amber);
        }
        .brand__text {
          font-weight: 800;
          letter-spacing: -0.3px;
          color: #fff;
        }
        .brand__text--dark {
          color: #111;
        }
        .brand__elite {
          color: var(--amber);
          margin-left: 6px;
        }

        .nav {
          display: none;
          gap: 26px;
          align-items: center;
          font-weight: 700;
          font-size: 14px;
        }
        .nav a {
          color: rgba(255, 255, 255, 0.82);
        }
        .nav--dark a {
          color: rgba(20, 20, 20, 0.72);
        }
        .nav a:hover {
          opacity: 0.9;
        }
        .nav__cta {
          background: #c98b1a;
          color: #fff !important;
          padding: 10px 16px;
          border-radius: 999px;
        }
        .nav__cta:hover {
          background: #b77d14;
        }

        /* hero */
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 72px;
        }
        .hero__bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.06);
          animation: slowZoom 18s ease-in-out infinite alternate;
        }
        .hero__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.58);
          z-index: 1;
        }
        .hero__content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 34px 0;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(211, 156, 58, 0.18);
          border: 1px solid rgba(211, 156, 58, 0.28);
          color: #ffdca0;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
        }
        .hero__title {
          margin: 18px 0 12px;
          font-size: clamp(30px, 5vw, 68px);
          line-height: 1.08;
          color: #fff;
          font-weight: 900;
          letter-spacing: -0.8px;
        }
        .hero__desc {
          margin: 0 auto 22px;
          max-width: 760px;
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(15px, 2vw, 20px);
          line-height: 1.65;
        }
        .hero__actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 18px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 14px;
          font-weight: 900;
          transition: transform 0.15s ease, background 0.15s ease,
            opacity 0.15s ease;
          width: 100%;
          max-width: 420px;
        }
        .btn--primary {
          background: #c98b1a;
          color: #fff;
          box-shadow: 0 16px 30px rgba(201, 139, 26, 0.22);
        }
        .btn--primary:hover {
          background: #b77d14;
          transform: translateY(-1px);
        }
        .btn--ghost {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
        }
        .btn--ghost:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        /* offers */
        .grid3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .card {
          background: #fbfbfb;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 26px;
          padding: 22px;
          transition: box-shadow 0.25s ease, border-color 0.25s ease,
            transform 0.25s ease;
        }
        .card:hover {
          border-color: rgba(211, 156, 58, 0.35);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .card__icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: rgba(211, 156, 58, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b77d14;
          margin-bottom: 14px;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .card:hover .card__icon {
          background: #c98b1a;
          color: #fff;
        }
        .card__title {
          margin: 0 0 8px;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.2px;
        }
        .card__text {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }

        /* why */
        .ornament {
          position: absolute;
          top: -80px;
          right: -120px;
          width: 520px;
          height: 520px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(211, 156, 58, 0.22),
            transparent 60%
          );
          opacity: 0.8;
          pointer-events: none;
        }
        .why {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: center;
        }
        .h2 {
          margin: 0 0 16px;
          font-size: clamp(26px, 4vw, 46px);
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.6px;
        }
        .why__list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .why__item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .check {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(211, 156, 58, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--amber);
          margin-top: 2px;
        }
        .why__item p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.6;
        }
        .why__right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .masonry {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .masonry img {
          width: 100%;
          border-radius: 18px;
          object-fit: cover;
          height: 220px;
        }
        .col1 img:first-child {
          height: 260px;
        }
        .col2 img:last-child {
          height: 260px;
        }

        /* form card */
        .formCard {
          background: #fff;
          border-radius: 34px;
          overflow: hidden;
          border: 1px solid rgba(211, 156, 58, 0.18);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
          display: grid;
          grid-template-columns: 1fr;
        }
        .formCard__left {
          background: #c98b1a;
          color: #fff;
          padding: 26px;
        }
        .h3 {
          margin: 10px 0 10px;
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -0.4px;
        }
        .mutedOnAmber {
          margin: 0 0 16px;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.65;
        }
        .contactLines {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }
        .line {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.92);
          font-weight: 700;
        }
        .formCard__right {
          padding: 26px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .row2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .label {
          font-size: 12px;
          color: var(--muted);
          font-weight: 800;
          letter-spacing: 0.3px;
        }
        .input,
        .select {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid var(--line);
          background: #fff;
          font-size: 14px;
          outline: none;
          transition: box-shadow 0.12s ease, border-color 0.12s ease;
        }
        .input:focus,
        .select:focus {
          border-color: rgba(201, 139, 26, 0.55);
          box-shadow: 0 0 0 4px rgba(201, 139, 26, 0.16);
        }
        .submit {
          width: 100%;
          margin-top: 6px;
          border: 0;
          cursor: pointer;
          padding: 14px;
          border-radius: 14px;
          font-weight: 900;
          color: #fff;
          background: linear-gradient(180deg, #b89264, #d2b48c);
          transition: opacity 0.15s ease, transform 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .submit:hover {
          transform: translateY(-1px);
        }
        .submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }
        .fine {
          margin-top: 10px;
          text-align: center;
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.5;
        }

        /* whatsapp float */
        .waFloat {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 80;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          background: #22c55e;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          transition: transform 0.15s ease;
        }
        .waFloat:hover {
          transform: scale(1.06);
        }

        @keyframes slowZoom {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.1);
          }
        }

        @media (min-width: 900px) {
          .nav {
            display: flex;
          }
          .grid3 {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 22px;
          }
          .why {
            grid-template-columns: 1fr 1fr;
            gap: 56px;
          }
          .formCard {
            grid-template-columns: 5fr 7fr;
          }
          .formCard__left {
            padding: 42px;
          }
          .formCard__right {
            padding: 42px;
          }
          .row2 {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .btn {
            width: auto;
          }
        }

        @media (max-width: 420px) {
          .section {
            padding: 64px 0;
          }
          .card {
            padding: 18px;
            border-radius: 22px;
          }
          .card__title {
            font-size: 20px;
          }
          .h3 {
            font-size: 24px;
          }
          .formCard {
            border-radius: 26px;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="card">
      <div className="card__icon" aria-hidden="true">
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </div>
  );
}