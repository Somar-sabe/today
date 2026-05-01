import React from 'react';

const FeaturesGrid = () => {
  const styles = {
    section: {
      backgroundColor: '#0a192f',
      color: '#ffffff',
      padding: '4rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
    },
    grid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    card: {
      padding: '3rem 2.5rem',
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    iconBox: {
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      borderRadius: '4px',
    },
    number: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      fontSize: '4rem',
      fontFamily: 'serif',
      color: 'rgba(255, 255, 255, 0.03)',
      fontWeight: 'bold',
      lineHeight: '1',
    },
    title: {
      fontSize: '1.5rem',
      fontFamily: 'serif',
      fontWeight: '400',
      margin: '0',
    },
    description: {
      color: '#9ca3af',
      fontSize: '0.9rem',
      lineHeight: '1.6',
      margin: '0',
      flexGrow: 1,
    },
    footerLink: {
      color: '#4a90e2',
      fontSize: '0.8rem',
      textDecoration: 'none',
      marginTop: 'auto',
    }
  };

  const features = [
    {
      num: '01',
      icon: '💰',
      title: 'Zero Tax on Your Returns',
      text: "No capital gains tax. No income tax. No inheritance tax. Dubai's tax-free regime is not a temporary incentive — it's constitutionally embedded into the UAE's economic model.",
      link: 'Save up to 28% vs. equivalent UK tax liability'
    },
    {
      num: '02',
      icon: '📈',
      title: 'Rental Yields That Work for You',
      text: "Gross yields of 6–10% are standard across Altair's portfolio areas. Compare that to London (2.8%), Singapore (3.5%), or Hong Kong (2.2%) — Dubai simply outperforms.",
      link: 'Average gross yield: 8.1% across prime areas'
    },
    {
      num: '03',
      icon: '🏛️',
      title: 'Dollar-Pegged Stability',
      text: "The UAE Dirham has been pegged to the US Dollar since 1997 — nearly 30 years of unbroken currency stability, eliminating exchange rate risk for international investors.",
      link: 'AED/USD peg: 28+ consecutive years'
    },
    {
      num: '04',
      icon: '🪪',
      title: '10-Year Golden Visa',
      text: "Invest AED 2M+ in property and qualify for UAE's Golden Visa — 10-year renewable residency covering you, your spouse, and your children. Altair handles the full process.",
      link: 'Altair guides you through every step of the visa process'
    },
    {
      num: '05',
      icon: '⚖️',
      title: 'Investor-Grade Legal Protection',
      text: "RERA regulation, Dubai Land Department oversight, mandatory escrow accounts for off-plan projects, and full freehold ownership rights for foreigners — your investment is protected by law.",
      link: 'Freehold ownership in 63+ designated areas'
    },
    {
      num: '06',
      icon: '🌍',
      title: 'Dubai as a Safe-Haven Magnet',
      text: "The Arab Spring (2011), Russia–Ukraine war (2022), and regional conflicts in 2026 — each crisis brought a new wave of capital and new buyers to Dubai. The pattern is consistent.",
      link: 'HNW capital inflows from conflict regions: +46% YoY'
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {features.map((f, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.number}>{f.num}</div>
            <div style={styles.iconBox}>{f.icon}</div>
            <h3 style={styles.title}>{f.title}</h3>
            <p style={styles.description}>{f.text}</p>
            <div style={styles.footerLink}>{f.link}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;