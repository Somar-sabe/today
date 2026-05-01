import React from 'react';

const TestimonialsSection = () => {
  const styles = {
    section: {
      backgroundColor: '#0a192f',
      color: '#ffffff',
      padding: '8rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      marginBottom: '4rem',
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#c5a358',
      fontSize: '11px',
      fontWeight: 'bold',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: '1.5rem',
    },
    title: {
      fontSize: '4.5rem',
      fontWeight: '400',
      lineHeight: '1.1',
      fontFamily: 'serif',
      margin: '0',
    },
    italicAccent: {
      fontStyle: 'italic',
      color: '#c5a358',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
    },
    card: {
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '3rem 2.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
    },
    stars: {
      color: '#c5a358',
      fontSize: '0.75rem',
      letterSpacing: '0.2em',
    },
    quoteIcon: {
      fontSize: '2rem',
      fontFamily: 'serif',
      color: 'rgba(197, 163, 88, 0.3)',
      lineHeight: '0',
      marginBottom: '-1rem',
    },
    quoteText: {
      fontFamily: 'serif',
      fontStyle: 'italic',
      fontSize: '1.15rem',
      lineHeight: '1.7',
      color: '#e5e7eb',
      margin: '0',
    },
    authorName: {
      color: '#c5a358',
      fontSize: '0.9rem',
      fontWeight: '500',
      margin: '1.5rem 0 0.25rem 0',
    },
    authorInfo: {
      color: '#9ca3af',
      fontSize: '0.75rem',
      textTransform: 'capitalize',
      margin: '0',
    }
  };

  const testimonials = [
    {
      text: "Altair made the entire process simple. From viewing properties online to signing the title deed, every step was explained clearly. I now have a fully tenanted apartment in Business Bay generating 8.4% yield.",
      author: "James R.",
      info: "British Investor · Business Bay, 2024"
    },
    {
      text: "The Golden Visa advice from the Altair team was invaluable. We bought in Dubai Hills, received our family visas within three months, and our property has already appreciated over 18%. Truly exceptional service.",
      author: "Priya M.",
      info: "Indian Entrepreneur · Dubai Hills, 2024"
    },
    {
      text: "Even during the tensions of early 2026, my Altair advisor kept me informed and reassured. Zero void periods on my Palm Jumeirah unit. Dubai and Altair — a combination I trust completely.",
      author: "Khalid A.",
      info: "Gulf Investor · Palm Jumeirah, 2025"
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <div style={styles.badge}>
            <span>★</span>
            <span>Client Stories</span>
          </div>
          <h2 style={styles.title}>
            Real Clients.<br />
            <span style={styles.italicAccent}>Real Results.</span>
          </h2>
        </header>

        {/* Testimonials Grid */}
        <div style={styles.grid}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.stars}>★★★★★</div>
              <div style={styles.quoteIcon}>“</div>
              <p style={styles.quoteText}>{t.text}</p>
              <div>
                <p style={styles.authorName}>{t.author}</p>
                <p style={styles.authorInfo}>{t.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;