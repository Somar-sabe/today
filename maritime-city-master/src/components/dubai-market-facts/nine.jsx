import React from 'react';

const TeamSection = () => {
  const styles = {
    section: {
      backgroundColor: '#0a192f',
      color: '#ffffff',
      padding: '6rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    // Upper Content Layout
    topRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem',
      marginBottom: '6rem',
      alignItems: 'start',
    },
    headerSide: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
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
      fontSize: '4rem',
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
      color: 'white',
      fontSize: '1rem',
      lineHeight: '1.7',
      maxWidth: '480px',
    },
    // Stats Grid
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
    },
    statCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      padding: '2rem',
      borderLeft: '3px solid #4a90e2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '140px',
    },
    statValue: {
      fontSize: '2.5rem',
      fontFamily: 'serif',
      color: '#c5a358',
      lineHeight: '1',
      marginBottom: '0.5rem',
    },
    statLabel: {
      fontSize: '12px',
      color: 'white',
      textTransform: 'capitalize',
      letterSpacing: '0.05em',
    },
    // Team Members Row
    teamRow: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '3rem',
      paddingTop: '2rem',
    },
    memberContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      width: '150px',
    },
    avatarWrapper: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      overflow: 'hidden',
      marginBottom: '1rem',
      backgroundColor: '#1f2937',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    avatarImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    memberName: {
      fontSize: '0.9rem',
      fontWeight: '600',
      margin: '0 0 0.25rem 0',
    },
    memberRole: {
      fontSize: '0.75rem',
      color: '#c5a358',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    }
  };

  const stats = [
    { value: '19+', label: 'Specialist Advisors' },
    { value: '10+', label: 'Languages Spoken' },
    { value: 'Off-Plan', label: 'Secondary & Rentals' },
    { value: 'Free', label: 'Customer Care, Always' },
  ];

  const team = [
    { name: 'Raheleh Azhdari', role: 'Sales Manager', img: 'https://via.placeholder.com/150' },
    { name: 'Majid Malik', role: 'Finance Manager', img: 'https://via.placeholder.com/150' },
    { name: 'Mozhdeh Maaref', role: 'Sales Agent', img: 'https://via.placeholder.com/150' },
    { name: 'Peter Emmanuel', role: 'Sales Agent', img: 'https://via.placeholder.com/150' },
    { name: 'Oliver Cho', role: 'Sales Agent', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Top Header and Stats */}
        <div style={styles.topRow}>
          <div style={styles.headerSide}>
            <div style={styles.badge}>
              <span>★</span>
              <span>Meet the Altair Team</span>
            </div>
            <h2 style={styles.title}>
              19+ Expert Advisors.<br />
              <span style={styles.italicAccent}>One Goal.</span>
            </h2>
            <p style={styles.description}>
              Our multilingual, multicultural team brings local expertise and global perspective 
              to every client relationship. From your first enquiry to your title deed — we are 
              with you every step of the way.
            </p>
          </div>

          <div style={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} style={styles.statCard}>
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Avatars */}
        <div style={styles.teamRow}>
          {team.map((member, idx) => (
            <div key={idx} style={styles.memberContainer}>
              <div style={styles.avatarWrapper}>
                {/* Replace src with actual image paths */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={styles.avatarImg} 
                />
              </div>
              <h4 style={styles.memberName}>{member.name}</h4>
              <p style={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;