import React from 'react';

const ResilienceSection = () => {
  const styles = {
    section: {
      backgroundColor: '#0a192f',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
    },
    // Left Column Styles
    visualColumn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    },
    circle: {
      position: 'relative',
      width: '350px',
      height: '350px',
      borderRadius: '50%',
      border: '1px solid rgba(156, 163, 175, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    },
    percentage: {
      display: 'block',
      fontSize: '7rem',
      fontFamily: 'serif',
      color: '#c5a358',
      lineHeight: '1',
    },
    circleSubtext: {
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: '#9ca3af',
      marginTop: '0.5rem',
      lineHeight: '1.6',
    },
    quote: {
      fontStyle: 'italic',
      fontFamily: 'serif',
      fontSize: '1.25rem',
      color: '#d1d5db',
      textAlign: 'center',
    },
    // Right Column Styles
    contentColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#c5a358',
      fontSize: '12px',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '300',
      lineHeight: '1.1',
      fontFamily: 'serif',
      margin: '0',
    },
    accentItalic: {
      fontStyle: 'italic',
      color: '#c5a358',
    },
    description: {
      color: '#9ca3af',
      fontSize: '1.125rem',
      lineHeight: '1.6',
      maxWidth: '500px',
    },
    // Stats List
    statsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid #1f2937',
    },
    statItem: {
      display: 'flex',
      gap: '1rem',
    },
    bullet: {
      color: '#4a90e2',
      fontSize: '1.25rem',
    },
    statTitle: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: '0 0 0.25rem 0',
    },
    statBody: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      lineHeight: '1.5',
      margin: '0',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Left Column */}
        <div style={styles.visualColumn}>
          <div style={styles.circle}>
            <div>
              <span style={styles.percentage}>96%</span>
              <p style={styles.circleSubtext}>
                of Iranian Missile & Drone<br />
                attacks intercepted by<br />
                UAE Air Defence — March<br />
                2026
              </p>
            </div>
          </div>
          <p style={styles.quote}>
            "Dubai was tested in real time — and it held."
          </p>
        </div>

        {/* Right Column */}
        <div style={styles.contentColumn}>
          <header style={styles.header}>
            <div style={styles.badge}>
              <span>★</span>
              <span>Dubai's Resilience Story</span>
            </div>
            <h2 style={styles.title}>
              Tested Under <span style={styles.accentItalic}>Pressure.</span><br />
              Proven in Practice.
            </h2>
            <p style={styles.description}>
              The 2026 regional conflict reached the UAE borders. For the first time, Dubai 
              faced direct attack. Here is what the data shows — and why experienced 
              investors stayed the course.
            </p>
          </header>

          <div style={styles.statsList}>
            <StatItem 
              title="96% of Attacks Intercepted" 
              body="The UAE's layered air defence performed at a global benchmark level. Infrastructure remained fully operational throughout." 
              styles={styles}
            />
            <StatItem 
              title="DIFC Company Registrations: +59% in March 2026" 
              body="During the peak conflict month, 258 new companies registered at DIFC — up from 162 in March 2025. Investors don't leave Dubai; they consolidate here." 
              styles={styles}
            />
            <StatItem 
              title="AED 55.18B in January 2026 Transactions" 
              body="A 43.9% year-on-year surge just weeks before tensions peaked — confirming the market's underlying structural strength." 
              styles={styles}
            />
            <StatItem 
              title="Ceasefire Conditions Accelerating Recovery" 
              body="With peace talks advancing, Palm Jumeirah, Downtown, and Dubai Hills are seeing the fastest luxury market recovery — exactly where Altair operates." 
              styles={styles}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for clean repetition
const StatItem = ({ title, body, styles }) => (
  <div style={styles.statItem}>
    <span style={styles.bullet}>✦</span>
    <div>
      <h4 style={styles.statTitle}>{title}</h4>
      <p style={styles.statBody}>{body}</p>
    </div>
  </div>
);

export default ResilienceSection;