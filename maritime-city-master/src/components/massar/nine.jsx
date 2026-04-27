import React from "react";

export default function PaymentPlanSection({ openPopup }) {
  return (

    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // light gray background, adjust if needed
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        {/* HEADLINE */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
          <strong>Payment Plan</strong>
        </h1>

        {/* Percentages */}
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "20px" }}>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>5%</p>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>35%</p>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>60%</p>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>100%</p>
        </div>

        {/* Labels */}
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "30px" }}>
          <p>Down Payment</p>
          <p>During Construction</p>
          <p>On Handover</p>
          <p>Ownership</p>
        </div>

        {/* Property Prices */}
        <div style={{ marginBottom: "30px" }}>
          <p className="hidden-mobile">2 Bed Townhouses - AED 1.79 Million</p>
          <p className="hidden-mobile">3 Bed Townhouses - On Request</p>
          <p className="hidden-mobile">4 Bed Townhouses - On Request</p>
          <p className="hidden-mobile">5 Bed Villas - On Request</p>

          {/* For mobile */}
          <div className="hidden-desktop" style={{ display: "none" }}>
            <p>2 Bed Townhouses | AED 1.79 Million</p>
            <p>3 Bed Townhouses | On Request</p>
            <p>4 Bed Townhouses | On Request</p>
            <p>5 Bed Villas | On Request</p>
          </div>
        </div>

        {/* BUTTON */}
        <a
        onClick={openPopup}
          href="#page_block_footer"
          style={{
            height: "3.75rem",
            width: "15.9375rem",
            display: "inline-block",
            backgroundColor: "#FFD700", // yellow
            color: "#000",
            padding: "15px 35px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          Request for Pricing
        </a>
      </div>
    </section>
  );
}
