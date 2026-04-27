import React from "react";

const PaymentPlan = () => {
      const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form"); // make sure this matches your section id
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="payment-plan"
      style={{
        scrollMarginTop: "70px",
        width: "100%",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Small Title */}
      <div style={{ animation: "fadeIn 0.6s ease" }}>
        <span
          style={{
            fontSize: "18px",
            fontWeight: 500,
            textTransform: "uppercase",
            color: "#3A3A3A",
            letterSpacing: "1px",
          }}
        >
          Payment Plan
        </span>
      </div>

      {/* Main Heading */}
      <div style={{ animation: "fadeIn 0.6s ease", animationDelay: "0.05s" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#1a1a1a",
            margin: "0",
            lineHeight: "1.3",
          }}
        >
          Invest Smart with Emaar’s Flexible Plan
        </h2>
      </div>

      {/* Description */}
      <div style={{ animation: "fadeIn 0.6s ease", animationDelay: "0.1s" }}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#444",
            marginTop: "10px",
          }}
        >
          The Oasis by Emaar features a flexible and investor-friendly payment
          plan designed to make luxury living more accessible. With payments
          spread conveniently over the construction period and a final
          installment on handover, buyers can secure their dream villa with
          ease and plan their finances comfortably.
        </p>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 20px",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: 500,
            transition: "0.3s",
          }}
        >
          <span>Download Payment Plan</span>
          <i className="vamtamtheme- vamtam-theme-arrow-right"></i>
        </a>

        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 20px",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: 500,
            transition: "0.3s",
          }}
        >
          <span>Download Brochure</span>
          <i className="vamtamtheme- vamtam-theme-arrow-right"></i>
        </a>
      </div>

      {/* Payment Steps */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          marginTop: "40px",
        }}
      >
        {[
          {
            percent: "10%",
            title: "Down Payment",
            desc: "Secure your unit with just a 10% initial payment.",
          },
          {
            percent: "70%",
            title: "During Construction",
            desc: "Enjoy flexible installments throughout the construction period.",
          },
          {
            percent: "20%",
            title: "On Handover",
            desc: "Pay the remaining balance upon project completion.",
          },
        ].map((step, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              animation: "slideInUp 0.6s ease",
              animationDelay: `${idx * 0.1}s`,
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: 600,
                color: "#000",
              }}
            >
              {step.percent}
            </span>
            <h5
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#1a1a1a",
                margin: 0,
              }}
            >
              {step.title}
            </h5>
            <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Inline Keyframes & Responsive */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Mobile */
          @media (max-width: 768px) {
            h2 { font-size: 28px !important; }
            h5 { font-size: 18px !important; }
            p { font-size: 15px !important; }
            span { font-size: 16px !important; }
            div[style*="display: flex"]:not([style*="flex-direction: column"]) {
              flex-direction: column !important;
              gap: 15px !important;
            }
          }

          /* Small Phones */
          @media (max-width: 480px) {
            h2 { font-size: 24px !important; }
            h5 { font-size: 16px !important; }
            p { font-size: 14px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default PaymentPlan;
