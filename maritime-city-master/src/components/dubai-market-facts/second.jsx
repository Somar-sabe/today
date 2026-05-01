"use client";
import { useEffect } from "react";

export default function AltairLanding() {
  useEffect(() => {
    // STAR BG
    const canvas = document.getElementById("starCanvas");
    const hero = document.querySelector(".hero");

    if (canvas && hero) {
      hero.appendChild(canvas);

      for (let i = 0; i < 60; i++) {
        const dot = document.createElement("div");
        dot.className = "star-dot";
        const size = Math.random() * 2.5 + 0.5;

        dot.style.cssText = `
          width:${size}px;
          height:${size}px;
          top:${Math.random() * 100}%;
          left:${Math.random() * 100}%;
          position:absolute;
          border-radius:50%;
          background:#E8D5A3;
          opacity:0;
          animation: twinkle ${(Math.random() * 4 + 2).toFixed(1)}s ease-in-out infinite;
        `;

        canvas.appendChild(dot);
      }
    }

    // REVEAL
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, i * 60);
          io.unobserve(entry.target);
        }
      });
    });

    reveals.forEach((el) => io.observe(el));

    // FORM
    const btn = document.getElementById("submitBtn");
    if (btn) {
      btn.onclick = () => {
        const inputs = document.querySelectorAll("input");
        let ok = true;

        inputs.forEach((i) => {
          if (!i.value.trim()) ok = false;
        });

        if (!ok) {
          btn.textContent = "⚠ Fill all fields";
          return;
        }

        btn.textContent = "✓ Sent!";
      };
    }
  }, []);

  return (
    <div className="altair-wrapper">
      <div id="starCanvas"></div>

      <section className="hero">
        <div className="hero-left">
          <h1>
            Your Gateway to <br />
            <span>Dubai Properties</span>
          </h1>

          <p>
            Dubai investment opportunities with strong ROI and tax-free benefits.
          </p>
        </div>

        <div className="hero-right">
          <div className="form-card">
            <h2>Speak With an Advisor</h2>

            <input placeholder="First name" />
            <input placeholder="Email" />
            <input placeholder="Phone" />

            <button id="submitBtn">Register →</button>
          </div>
        </div>
      </section>

      <div className="numbers-strip">
        <h2>AED 917B Transactions</h2>
      </div>

      <section className="prop-grid">
        <div className="prop-card">
          <h3>Apartments</h3>
          <p>High ROI investment</p>
        </div>

        <div className="prop-card">
          <h3>Villas</h3>
          <p>Premium homes</p>
        </div>
      </section>

      <style jsx>{`
        .altair-wrapper {
          background: #0d1b2a;
          color: #fff;
          font-family: sans-serif;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          position: relative;
        }

        #starCanvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
        }

        .hero-left {
          padding: 6rem;
        }

        .hero-left h1 {
          font-size: 3rem;
        }

        .hero-left span {
          color: #c8a96e;
        }

        .hero-right {
          display: flex;
          align-items: center;
          padding: 4rem;
        }

        .form-card {
          width: 100%;
          background: #112237;
          padding: 2rem;
        }

        input {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.7rem;
          background: #111;
          border: 1px solid #333;
          color: #fff;
        }

        button {
          width: 100%;
          padding: 1rem;
          background: #c8a96e;
          border: none;
          cursor: pointer;
        }

        .numbers-strip {
          padding: 3rem;
          text-align: center;
          background: #2b7fd4;
        }

        .prop-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .prop-card {
          padding: 2rem;
          background: #162d47;
        }
      `}</style>
    </div>
  );
}