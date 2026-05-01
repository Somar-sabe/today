"use client";

import { useState } from "react";

export default function Hero() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    interest: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    return form.firstName && form.lastName && form.email && form.phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      await new Promise((res) => setTimeout(res, 1200));

      console.log(form);

      setSuccess(true);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        budget: "",
        interest: "",
      });
    } catch (err) {
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">

          {/* LEFT */}
          <div className="left">
            <p className="badge">★ ALTAIR REAL ESTATE - DUBAI 2026</p>

            <h1>
              Your Gateway to<br />
              <span>Exceptional</span>
            </h1>

            <h2>Dubai Properties</h2>

            <p className="desc">
              Expert guidance for investing in Dubai real estate with premium advisory support.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="form" onSubmit={handleSubmit}>
            <h3>Speak With an Advisor</h3>
            <p className="sub">
              Register interest — response within 24 hours
            </p>

            {success && (
              <div className="success">✔ Submitted successfully</div>
            )}

            <div className="row">
              <input
                name="firstName"
                value={form.firstName}
                placeholder="First Name *"
                onChange={handleChange}
              />
              <input
                name="lastName"
                value={form.lastName}
                placeholder="Last Name *"
                onChange={handleChange}
              />
            </div>

            <input
              name="email"
              value={form.email}
              placeholder="Email *"
              onChange={handleChange}
            />

            <input
              name="phone"
              value={form.phone}
              placeholder="Phone *"
              onChange={handleChange}
            />

            <div className="row">
              <input
                name="budget"
                value={form.budget}
                placeholder="Budget"
                onChange={handleChange}
              />
              <input
                name="interest"
                value={form.interest}
                placeholder="Interest"
                onChange={handleChange}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "REGISTER INTEREST →"}
            </button>
          </form>
        </div>
      </section>

      {/* INLINE CSS */}
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0b1c2c, #0e2a44, #091521);
          color: #fff;
          padding: 60px 20px;
          font-family: Arial, sans-serif;
        }

        .container {
          display: flex;
          gap: 60px;
          max-width: 1100px;
          width: 100%;
        }

        .left {
          flex: 1;
        }

        .badge {
          color: #facc15;
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 48px;
          font-weight: 300;
          margin: 0;
        }

        h1 span {
          color: #facc15;
          font-style: italic;
        }

        h2 {
          font-size: 44px;
          font-weight: 300;
          margin-top: 10px;
        }

        .desc {
          margin-top: 20px;
          color: #b5c0cc;
          max-width: 420px;
          line-height: 1.6;
        }

        .form {
          flex: 1;
          background: #0f2740;
          padding: 30px;
          border: 1px solid #1e3a5a;
          border-radius: 12px;
        }

        h3 {
          margin: 0;
          font-weight: 300;
        }

        .sub {
          font-size: 12px;
          color: #9aa7b3;
          margin-bottom: 20px;
        }

        .row {
          display: flex;
          gap: 10px;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          background: transparent;
          border: 1px solid #2a4a6b;
          color: white;
          outline: none;
          border-radius: 6px;
        }

        input:focus {
          border-color: #facc15;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #facc15;
          border: none;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
        }

        button:disabled {
          opacity: 0.6;
        }

        .success {
          color: #4ade80;
          margin-bottom: 10px;
          font-size: 13px;
        }

        @media (max-width: 900px) {
          .container {
            flex-direction: column;
          }

          h1 {
            font-size: 36px;
          }

          h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
}