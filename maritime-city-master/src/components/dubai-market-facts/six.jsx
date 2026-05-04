'use client'

import React from 'react';

const PortfolioSection = () => {
  const portfolios = [
    {
      category: 'OFF-PLAN & SECONDARY · GOLDEN VISA ELIGIBLE',
      title: 'Apartments & Studios',
      description: 'High-demand, high-liquidity properties in Dubai\'s most active residential corridors. Ideal for rental income investors and first-time buyers targeting the Golden Visa threshold.',
      locations: 'Business Bay · Dubai Marina · JBR · JVC · Creek Harbour',
      yield: '7–9%',
      price: 'From AED 700K'
    },
    {
      category: 'PREMIUM · CAPITAL APPRECIATION',
      title: 'Villas & Townhouses',
      description: 'Family-grade properties in Dubai\'s most sought-after communities. Strong capital appreciation and premium tenants.',
      locations: 'Dubai Hills · Tilal Al Ghaf · Arabian Ranches · Damac Hills',
      yield: '5–7%',
      price: 'From AED 2.2M'
    },
    {
      category: 'ULTRA-PRIME · WEALTH PRESERVATION',
      title: 'Penthouses & Waterfront',
      description: 'Iconic addresses including Palm Jumeirah and Bluewaters Island.',
      locations: 'Palm Jumeirah · Emaar Beachfront · Bluewaters · Port De La Mer',
      yield: '4–6%',
      price: 'From AED 5M'
    }
  ];

  return (
    <section className="section">

      {/* Header */}
      <div className="headerRow">
        <div>
          <div className="badge">
            <span>★</span>
            <span>Altair Portfolio</span>
          </div>

          <h2 className="mainTitle">
            Every Budget.<br />
            <span className="italicAccent">Every Strategy.</span>
          </h2>
        </div>

        <p className="headerDescription">
          Whether you are entering the market for the first time or expanding a portfolio, Altairs advisors match you to the right property.
        </p>
      </div>

      {/* Grid */}
      <div className="grid">
        {portfolios.map((p, i) => (
          <div key={i} className="card">

            <p className="cardCategory">{p.category}</p>
            <h3 className="cardTitle">{p.title}</h3>
            <p className="cardDescription">{p.description}</p>

            <div className="location">
              📍 {p.locations}
            </div>

            <div className="cardDataRow">
              <div>
                <span className="yieldValue">{p.yield}</span>
                <span className="label">Gross Rental Yield</span>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="priceValue">{p.price}</span>
                <span className="label">Entry Price</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ONLY RESPONSIVE FIXES */}
      <style jsx>{`
        .section {
          background-color: #0a192f;
          color: #ffffff;
          padding: 6rem 2rem;
          font-family: system-ui, -apple-system, sans-serif;
          min-height: 100vh;
        }

        .headerRow {
          max-width: 1200px;
          margin: 0 auto 5rem auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .badge {
          color: #c5a358;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mainTitle {
          font-size: 4.5rem;
          font-weight: 300;
          line-height: 1.1;
          font-family: serif;
          margin: 0;
        }

        .italicAccent {
          font-style: italic;
          color: #c5a358;
        }

        .headerDescription {
          color: white;
          font-size: 1.125rem;
          line-height: 1.7;
          max-width: 500px;
        }

        .grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .card {
          border: 1px solid #1f2937;
          padding: 2.5rem;
          background: #1f2937;
        }

        .cardCategory {
          color: #4a90e2;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .cardTitle {
          font-size: 1.875rem;
          font-family: serif;
        }

        .cardDescription {
          color: white;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .location {
          color: white;
          font-size: 0.8rem;
          margin: 0.5rem 0;
        }

        .cardDataRow {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #1f2937;
          padding-top: 1.5rem;
          margin-top: 1rem;
        }

        .yieldValue {
          font-size: 2rem;
          color: #c5a358;
          font-family: serif;
        }

        .priceValue {
          font-size: 0.9rem;
          color: #ffffff;
          font-weight: bold;
        }

        .label {
          font-size: 10px;
          color: white;
          text-transform: uppercase;
          display: block;
        }

        /* ✅ MOBILE FIX ONLY */
        @media (max-width: 768px) {
          .headerRow {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .mainTitle {
            font-size: 2.4rem;
          }

          .section {
            padding: 3rem 1rem;
          }

          .card {
            padding: 1.5rem;
          }

          .cardDataRow {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;