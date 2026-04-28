import React from 'react';
import {
  TrendingDown,
  ShieldCheck,
  Building2,
  LineChart,
  ArrowRight,
  Mail
} from 'lucide-react';

export default function DubaiLandingSection() {
  const styles = {
    wrapper: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#0f172a',
      backgroundColor: 'white'
    },

hero: {
  position: 'relative',
  background:
    'linear-gradient(120deg, rgba(11,18,32,0.65), rgba(15,23,42,0.55)), url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ffffff',
  padding: '140px 20px',
  textAlign: 'center'
},

heroTitle: {
  fontSize: '52px',
  fontWeight: '700',
  letterSpacing: '-0.8px',
  maxWidth: '900px',
  margin: '0 auto 16px',
  lineHeight: '1.15',
  color: '#ffffff'
},

heroText: {
  fontSize: '17px',
  color: 'rgba(255,255,255,0.85)',
  maxWidth: '620px',
  margin: '0 auto',
  lineHeight: '1.6'
},

    buttonPrimary: {
      marginTop: '26px',
      padding: '13px 24px',
      background: '#f59e0b',
      color: '#0b1220',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },

    section: {
      padding: '85px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
      backgroundColor:'white'
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '18px'
    },

    card: {
      background: '#0f172a',
      border: '1px solid rgba(255,255,255,0.06)',
      padding: '22px',
      borderRadius: '12px',
      color: 'white',
      transition: 'transform 0.2s ease, border 0.2s ease',
      cursor: 'default'
    },

    icon: {
      color: '#f59e0b',
      marginBottom: '12px'
    },

    title: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '6px'
    },

    text: {
      color: 'rgba(226,232,240,0.75)',
      lineHeight: '1.6',
      fontSize: '14px'
    },

    trust: {
      background: '#f8fafc',
      textAlign: 'center',
      padding: '75px 20px'
    },

    trustTitle: {
      fontSize: '30px',
      fontWeight: '700',
      marginBottom: '10px',
      letterSpacing: '-0.3px'
    },

    trustText: {
      maxWidth: '650px',
      margin: '0 auto',
      color: '#475569',
      fontSize: '15px',
      lineHeight: '1.7'
    },

    cta: {
      background: '#0b1220',
      color: 'white',
      textAlign: 'center',
      padding: '85px 20px'
    },

    form: {
      marginTop: '26px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },

    input: {
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid rgba(255,255,255,0.08)',
      backgroundColor: 'rgba(255,255,255,0.04)',
      color: 'white',
      fontSize: '14px',
      outline: 'none'
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Is Dubai’s Property Market Really Slowing Down?
        </h1>

        <p style={styles.heroText}>
          Headlines suggest uncertainty — but institutional data tells a very different story about demand, supply, and long-term value.
        </p>

        <button style={styles.buttonPrimary}>
          Get the Real Data <ArrowRight size={16} />
        </button>
      </section>

      {/* CARDS */}
      <section style={styles.section} >
        <div style={styles.grid}>
          {[
            {
              icon: TrendingDown,
              title: 'Are prices falling?',
              text:
                'No major correction is visible. Transaction volumes have normalized, not collapsed.'
            },
            {
              icon: ShieldCheck,
              title: 'Why is the market stable?',
              text:
                'Demand is driven by end-users and long-term residents, not short-term speculation.'
            },
            {
              icon: Building2,
              title: 'Construction pipeline',
              text:
                'Higher build costs are slowing oversupply and stabilizing asset values.'
            },
            {
              icon: LineChart,
              title: 'Investor takeaway',
              text:
                'Less volatility, more predictable long-term growth as the market matures.'
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                style={styles.card}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.border =
                    '1px solid rgba(245,158,11,0.25)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border =
                    '1px solid rgba(255,255,255,0.06)';
                }}
              >
                <Icon style={styles.icon} />
                <div style={styles.title}>{item.title}</div>
                <p style={styles.text}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRUST */}
      <section style={styles.trust}>
        <h2 style={styles.trustTitle}>
          Dubai hasn’t weakened — it has matured.
        </h2>
        <p style={styles.trustText}>
          A shift from speculative cycles to structured, regulated, demand-driven growth is reshaping the market landscape.
        </p>
      </section>


    </div>
  );
}