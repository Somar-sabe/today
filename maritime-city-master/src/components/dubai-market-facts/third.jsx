import React from 'react';

const ContactSection = () => {
  const styles = {
    section: {
      backgroundColor: '#0a192f',
      color: '#ffffff',
      padding: '6rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
    },
    // Left Content
    contentSide: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
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
    description: {
      color: '#9ca3af',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      maxWidth: '500px',
    },
    statsRow: {
      display: 'flex',
      gap: '3rem',
      marginTop: '2rem',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid #1f2937',
      paddingLeft: '1.5rem',
    },
    statValue: {
      fontSize: '2rem',
      color: '#c5a358',
      fontFamily: 'serif',
    },
    statLabel: {
      fontSize: '10px',
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginTop: '0.5rem',
    },
    // Form Container
    formCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid #1f2937',
      padding: '3rem',
      borderRadius: '2px',
      position: 'relative',
    },
    formHeader: {
      marginBottom: '2rem',
    },
    formTitle: {
      fontSize: '2rem',
      fontFamily: 'serif',
      marginBottom: '0.5rem',
    },
    formSubtitle: {
      fontSize: '0.8rem',
      color: '#9ca3af',
    },
    // Form Elements
    inputGroupRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '1rem',
    },
    fieldWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    label: {
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#c5a358',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid #1f2937',
      padding: '0.8rem 1rem',
      color: '#ffffff',
      fontSize: '0.9rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    submitBtn: {
      backgroundColor: '#c5a358',
      color: '#0a192f',
      border: 'none',
      width: '100%',
      padding: '1.2rem',
      fontSize: '11px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      cursor: 'pointer',
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
    },
    actionRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginTop: '1rem',
    },
    secondaryBtn: {
      backgroundColor: 'transparent',
      border: '1px solid #1f2937',
      color: '#ffffff',
      padding: '1rem',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    privacyText: {
      fontSize: '10px',
      color: '#4b5563',
      textAlign: 'center',
      marginTop: '1.5rem',
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Left Content Column */}
        <div style={styles.contentSide}>
          <div style={styles.badge}>
            <span>★</span>
            <span>Altair Real Estate · Dubai 2026</span>
          </div>
          <h2 style={styles.title}>
            Your Gateway to<br />
            <span style={styles.italicAccent}>Exceptional</span><br />
            Dubai Properties
          </h2>
          <p style={styles.description}>
            While global uncertainty reshapes capital flows, Dubai's fundamentals remain unshaken 
            — and Altair's expert team is here to guide you through every step of your 
            investment journey.
          </p>
          
          <div style={styles.statsRow}>
            <div style={styles.statItem}>
              <span style={styles.statValue}>AED 917B</span>
              <span style={styles.statLabel}>Transactions in 2025</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statValue}>8.1%</span>
              <span style={styles.statLabel}>Avg. Rental Yield</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statValue}>0%</span>
              <span style={styles.statLabel}>Capital Gains Tax</span>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div style={styles.formCard}>
          <div style={styles.formHeader}>
            <h3 style={styles.formTitle}>Speak With an Altair Advisor</h3>
            <p style={styles.formSubtitle}>Register your interest and we'll reach out within 24 hours — no obligation, complete discretion.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div style={styles.inputGroupRow}>
              <div style={styles.fieldWrapper}>
                <label style={styles.label}>First Name</label>
                <input style={styles.input} type="text" placeholder="First name" />
              </div>
              <div style={styles.fieldWrapper}>
                <label style={styles.label}>Last Name</label>
                <input style={styles.input} type="text" placeholder="Last name" />
              </div>
            </div>

            <div style={styles.fieldWrapper}>
              <label style={styles.label}>Email Address</label>
              <input style={styles.input} type="email" placeholder="your@email.com" />
            </div>

            <div style={styles.fieldWrapper}>
              <label style={styles.label}>Phone / WhatsApp</label>
              <input style={styles.input} type="tel" placeholder="+971 or international" />
            </div>

            <div style={styles.inputGroupRow}>
              <div style={styles.fieldWrapper}>
                <label style={styles.label}>Budget</label>
                <input style={styles.input} type="text" placeholder="Select range" />
              </div>
              <div style={styles.fieldWrapper}>
                <label style={styles.label}>Interest</label>
                <input style={styles.input} type="text" placeholder="I'm looking to..." />
              </div>
            </div>

            <button style={styles.submitBtn}>
              Register My Interest —
            </button>

            <div style={styles.actionRow}>
              <button style={styles.secondaryBtn}>
                <span style={{color: '#25D366'}}>●</span> WhatsApp Us
              </button>
              <button style={styles.secondaryBtn}>
                📞 Call Now
              </button>
            </div>

            <p style={styles.privacyText}>
              🔒 Secure & Confidential. Privacy Policy
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;