'use client'

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size (safe for Next.js)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.trim().length < 5) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      Name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      Phone: phone,
      Email: formData.get("email"),
      Message: `Budget: ${formData.get("budget")}, Interest: ${formData.get("interest")}`,
      ContactType: "https://promotion.altairre.ae/maritime-city-en",
    };

    try {
      const response = await fetch("https://api.altairre.ae/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/Thankyou");
      } else {
        alert("There was an error submitting the form.");
      }
    } catch {
      alert("Network error. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    section: {
      backgroundColor: '#0a192f',
      color: '#ffffff',
      padding: isMobile ? '3rem 1rem' : '6rem 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: isMobile ? '2rem' : '4rem',
      alignItems: 'center',
    },
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
      fontSize: isMobile ? '2.4rem' : '4.5rem',
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
      fontSize: isMobile ? '1rem' : '1.1rem',
      lineHeight: '1.7',
      maxWidth: '500px',
    },
    statsRow: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1.5rem' : '3rem',
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
    formCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid #1f2937',
      padding: isMobile ? '1.5rem' : '3rem',
    },
    formHeader: {
      marginBottom: '2rem',
    },
    formTitle: {
      fontSize: '2rem',
      fontFamily: 'serif',
    },
    formSubtitle: {
      fontSize: '0.8rem',
      color: '#9ca3af',
    },
    inputGroupRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
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
      opacity: isSubmitting ? 0.7 : 1,
    },
    actionRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
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
            While global uncertainty reshapes capital flows, Dubai fundamentals remain unshaken 
            — and Altair expert team is here to guide you through every step.
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

        <div style={styles.formCard}>
          <form onSubmit={handleSubmit}>

            <div style={styles.inputGroupRow}>
              <input name="firstName" style={styles.input} placeholder="First name" required />
              <input name="lastName" style={styles.input} placeholder="Last name" required />
            </div>

            <input name="email" style={styles.input} placeholder="Email" required />

            <PhoneInput
              country={'ae'}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: '100%',
                paddingLeft: '48px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid #1f2937',
                color: '#fff'
              }}
              containerStyle={{ width: '100%' }}
            />

            <button type="submit" style={styles.submitBtn}>
              {isSubmitting ? "Submitting..." : "Register My Interest —"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;