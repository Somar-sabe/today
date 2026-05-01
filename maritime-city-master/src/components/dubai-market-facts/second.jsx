"use client";
import { useEffect } from "react";

export default function AltairLanding() {
  useEffect(() => {
    // STAR BG
    const canvas = document.getElementById("starCanvas");
    const hero = document.querySelector(".hero");

    if (canvas && hero && canvas.children.length === 0) {
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
          --dur:${(Math.random() * 4 + 2).toFixed(1)}s;
          --delay:${(Math.random() * 5).toFixed(1)}s;
          --op:${(Math.random() * 0.5 + 0.15).toFixed(2)};
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
          }, i * 70);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach((el) => io.observe(el));
  }, []);

  return (
    <div className="altair">
      <div id="starCanvas" className="star-canvas"></div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-left">
          <h1 className="hero-h1">
            Your Gateway to <br />
            <em>Exceptional</em> Dubai Properties
          </h1>

          <p className="hero-sub">
            Dubai remains one of the strongest real estate markets globally with high ROI and zero tax.
          </p>

          <div className="hero-stats">
            <div>
              <strong>AED 917B</strong>
              <span>Transactions</span>
            </div>
            <div>
              <strong>8.1%</strong>
              <span>Rental Yield</span>
            </div>
            <div>
              <strong>0%</strong>
              <span>Tax</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="form-card">
            <h2>Speak With Advisor</h2>

            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email" />
            <input placeholder="Phone" />

            <button>Register Interest</button>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <h2>Why Dubai</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Zero Tax</h3>
            <p>No capital gains or income tax.</p>
          </div>

          <div className="why-card">
            <h3>High ROI</h3>
            <p>Up to 10% rental yields.</p>
          </div>

          <div className="why-card">
            <h3>Stable Currency</h3>
            <p>AED pegged to USD.</p>
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="properties">
        <h2>Property Types</h2>

        <div className="prop-grid">
          <div className="prop-card">
            <h3>Apartments</h3>
            <p>High liquidity investments.</p>
          </div>

          <div className="prop-card">
            <h3>Villas</h3>
            <p>Family premium living.</p>
          </div>

          <div className="prop-card">
            <h3>Luxury</h3>
            <p>Ultra high-end assets.</p>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .altair {
          background: #0d1b2a;
          color: #f4f1ec;
          font-family: 'DM Sans', sans-serif;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          position: relative;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(#0d1b2a, #091422);
        }

        .hero-left {
          padding: 6rem;
          z-index: 2;
        }

        .hero-h1 {
          font-size: 3rem;
        }

        .hero-h1 em {
          color: #c8a96e;
        }

        .hero-sub {
          margin: 1rem 0 2rem;
          color: #aaa;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
        }

        .hero-stats strong {
          display: block;
          color: #c8a96e;
        }

        .hero-right {
          display: flex;
          align-items: center;
          padding: 4rem;
          z-index: 2;
        }

        .form-card {
          width: 100%;
          background: rgba(17,34,55,0.9);
          padding: 2rem;
        }

        input {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.8rem;
          background: #111;
          border: 1px solid #333;
          color: #fff;
        }

        button {
          width: 100%;
          padding: 1rem;
          background: #c8a96e;
          border: none;
        }

        .why {
          padding: 5rem;
          background: #112237;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }

        .why-card {
          padding: 2rem;
          background: #162d47;
        }

        .properties {
          padding: 5rem;
        }

        .prop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .prop-card {
          padding: 2rem;
          background: #112237;
        }

        .star-canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .star-dot {
          position: absolute;
          border-radius: 50%;
          background: #e8d5a3;
          opacity: 0;
          animation: twinkle var(--dur) ease-in-out infinite;
        }

        @keyframes twinkle {
          0%,100% { opacity: 0 }
          50% { opacity: var(--op) }
        }
      `}</style>
    </div>
  );
}