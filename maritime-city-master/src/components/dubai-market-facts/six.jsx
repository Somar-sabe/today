import React from 'react';

const PortfolioSection = () => {
  const styles = {
    section: {
      backgroundColor: '#0a192f',
      color: '#ffffff',
      padding: '6rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
    },
    headerRow: {
      maxWidth: '1200px',
      margin: '0 auto 5rem auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'start',
    },
    headerTitleSide: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#c5a358', // Muted Gold
      fontSize: '12px',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    mainTitle: {
      fontSize: '4.5rem',
      fontWeight: '300',
      lineHeight: '1.1',
      fontFamily: 'serif',
      margin: '0',
    },
    italicAccent: {
      fontStyle: 'italic',
      color: '#c5a358',
    },
    headerDescription: {
      color: '#9ca3af', // Muted Gray
      fontSize: '1.125rem',
      lineHeight: '1.7',
      maxWidth: '500px',
      marginTop: '2.5rem',
    },
    // Grid and Cards
    grid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
    },
    card: {
      backgroundColor: '#0a192f',
      border: '1px solid #1f2937', // Dark border
      borderRadius: '4px',
      padding: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    // Card Typography
    cardCategory: {
      color: '#4a90e2', // Soft Blue
      fontSize: '11px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      margin: '0',
    },
    cardTitle: {
      fontSize: '1.875rem',
      fontFamily: 'serif',
      fontWeight: '400',
      margin: '0',
      lineHeight: '1.2',
    },
    cardDescription: {
      color: '#9ca3af',
      fontSize: '0.9rem',
      lineHeight: '1.6',
      margin: '0',
      flexGrow: 1,
    },
    locationContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#9ca3af',
      fontSize: '0.8rem',
      margin: '0.5rem 0',
    },
    locationIcon: {
      color: '#c5a358',
    },
    // Card Data (Yield and Price)
    cardDataRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingTop: '1.5rem',
      borderTop: '1px solid #1f2937',
      marginTop: 'auto',
    },
    yieldGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    yieldValue: {
      fontSize: '2rem',
      color: '#c5a358',
      fontFamily: 'serif',
      lineHeight: '1',
    },
    dataLabel: {
      fontSize: '10px',
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginTop: '0.25rem',
    },
    priceGroup: {
      textAlign: 'right',
    },
    priceValue: {
      fontSize: '0.9rem',
      color: '#ffffff',
      fontWeight: 'bold',
    },
    
  };

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
      description: 'Family-grade properties in Dubai\'s most sought-after communities. Strong capital appreciation and premium long-term tenants from the expatriate professional community.',
      locations: 'Dubai Hills · Tilal Al Ghaf · Arabian Ranches · Damac Hills',
      yield: '5–7%',
      price: 'From AED 2.2M'
    },
    {
      category: 'ULTRA-PRIME · WEALTH PRESERVATION',
      title: 'Penthouses & Waterfront',
      description: 'Iconic addresses. Emaar Beachfront, Palm Jumeirah, Bluewaters Island, Port De La Mer. Luxury assets with sky-high appreciation and an ultra-high-net-worth tenant pool.',
      locations: 'Palm Jumeirah · Emaar Beachfront · Bluewaters · Port De La Mer',
      yield: '4–6%',
      price: 'From AED 5M'
    }
  ];

  return (
    <section style={styles.section}>
      {/* Upper Header Row */}
      <div style={styles.headerRow}>
        <div style={styles.headerTitleSide}>
          <div style={styles.badge}>
            <span>★</span>
            <span>Altair Portfolio</span>
          </div>
          <h2 style={styles.mainTitle}>
            Every Budget.<br />
            <span style={styles.italicAccent}>Every Strategy.</span>
          </h2>
        </div>
        <p style={styles.headerDescription}>
          Whether you are entering the market for the first time or adding to an established portfolio, Altairs advisors match you to the right property — not just any property. We work across off-plan, secondary, and rental markets.
        </p>
      </div>

      {/* Main Portfolio Grid */}
      <div style={styles.grid}>
        {portfolios.map((p, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.cardCategory}>{p.category}</p>
            <h3 style={styles.cardTitle}>{p.title}</h3>
            <p style={styles.cardDescription}>{p.description}</p>
            
            <div style={styles.locationContainer}>
              <span style={styles.locationIcon}>📍</span>
              <span>{p.locations}</span>
            </div>

            <div style={styles.cardDataRow}>
              <div style={styles.yieldGroup}>
                <span style={styles.yieldValue}>{p.yield}</span>
                <span style={styles.dataLabel}>Gross Rental Yield</span>
              </div>
              <div style={styles.priceGroup}>
                <span style={styles.priceValue}>{p.price}</span>
                <span style={styles.dataLabel}>Entry Price</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;