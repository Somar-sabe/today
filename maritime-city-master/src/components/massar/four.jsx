import React from "react";

export default function EverythingAtYourDoorstep({ openPopup }) {
  return (
     <>
    <style>
        {`
@media (max-width: 768px) {
  .doorstep-section {
    height: auto !important;
    padding-top: 200px;
    padding-bottom: 50px;
  }
}

        `}
      </style>
    <section
    className="doorstep-section"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/your-background.jpg')", // replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "40px 0px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2 style={{marginBottom: "20px" }}>
          <strong>Everything at your Doorstep</strong>
        </h2>

        <p style={{ fontSize: "1.1rem", marginBottom: "20px", lineHeight: "1.6" }}>
          <strong>Masaar 3</strong> provides its residents with a privileged
          position within the central region of Sharjah, with tranquillity
          and metropolis convenience. The development provides easy access
          to major points in Sharjah together with the city&apos;s most esteemed
          residential areas. Residents can easily reach Dubai because the
          community connects directly to Emirates Road which creates a
          perfect setting for people who need an upscale lifestyle.
        </p>

        <ul style={{ textAlign: "left", marginBottom: "30px", paddingLeft: "20px", lineHeight: "1.5" }}>
          <li>02 Minutes - Nasma Central Park</li>
          <li>02 Minutes - Tilal Mall</li>
          <li>02 Minutes - Sharjah Botanical Garden</li>
          <li>15 Minutes - Sharjah International Airport Free Zone SAIF</li>
          <li>20 Minutes - Sharjah Corniche</li>
          <li>20 Minutes - Dubai International Airport</li>
          <li>20 Minutes - Aljada, Sharjah</li>
        </ul>

        <a
        onClick={openPopup}
          href="#page-block-t5krfndfgeb"
          style={{
            height: "3.75rem",
            width: "20.9375rem",
            display: "inline-block",
            backgroundColor: "#FFD700", // yellow
            color: "#000",
            padding: "15px 30px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          Get Payment Plan
        </a>
      </div>
    </section>
    </>
  );
}
