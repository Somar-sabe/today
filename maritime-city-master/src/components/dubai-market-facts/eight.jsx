import React from 'react';

const AreasCovered = () => {
  const styles = {
    section: {
      backgroundColor: '#0a192f',
      color: '#ffffff',
      padding: '8rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '60vh',
    },
    contentWrapper: {
      maxWidth: '1200px',
      width: '100%',
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
      margin: '0 0 2rem 0',
      maxWidth: '600px',
      color:'white !important',
    },
    italicAccent: {
      fontStyle: 'italic',
      color: '#c5a358',
    },
    description: {
      color: 'white',
      fontSize: '1.1rem',
      lineHeight: '1.6',
      maxWidth: '550px',
      marginBottom: '4rem',
    },
    tagContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      width: '100%',
    },
    tag: {
      padding: '0.8rem 1.5rem',
      border: '1px solid rgba(74, 144, 226, 0.3)', // Muted blue border
      color: '#4a90e2', // Brand blue
      fontSize: '0.85rem',
      letterSpacing: '0.02em',
      backgroundColor: 'transparent',
      whiteSpace: 'nowrap',
    },
    tagMuted: {
      padding: '0.8rem 1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'white',
      fontSize: '0.85rem',
      letterSpacing: '0.02em',
      backgroundColor: 'transparent',
      whiteSpace: 'nowrap',
    }
  };

  const primaryAreas = [
    "Palm Jumeirah",
    "Downtown Dubai",
    "Dubai Hills Estate",
    "Emaar Beachfront",
    "Dubai Marina",
    "Business Bay"
  ];

  const secondaryAreas = [
    "Dubai Creek Harbour",
    "JBR",
    "Bluewaters Island",
    "Port De La Mer",
    "Jumeirah Golf Estates",
    "Tilal Al Ghaf",
    "Damac Hills",
    "Dubailand",
    "+ More on Request"
  ];

  return (
    <section style={styles.section}>
      <div style={styles.contentWrapper}>
        {/* Header Section */}
        <div style={styles.badge}>
          <span>★</span>
          <span>Areas We Cover</span>
        </div>
        
        <h2 style={styles.title}>
          Every Prime Address<br />
          in <span style={styles.italicAccent}>Dubai</span>
        </h2>
        
        <p style={styles.description}>
          Altair team is active across all of Dubai key investment zones — from 
          established landmarks to emerging growth corridors.
        </p>

        {/* Tag Cloud Section */}
        <div style={styles.tagContainer}>
          {primaryAreas.map((area, idx) => (
            <div key={idx} style={styles.tag}>
              {area}
            </div>
          ))}
          {secondaryAreas.map((area, idx) => (
            <div key={idx} style={styles.tagMuted}>
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasCovered;