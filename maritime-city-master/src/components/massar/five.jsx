import React from "react";

export default function AmenitiesSection({ openPopup }) {
  return (
    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: "url('/images/your-background.jpg')", // replace with your image
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
        <h1 style={{marginBottom: "20px" }}>
          <strong>Amenities</strong>
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
          Masaar 2 delivers to its community resident’s wellness-focused
          amenities and recreation facilities. Residents benefit from complete
          fitness facilities and a gathering place where they can socialize and
          remain active for good health. The development features special areas
          for meditation together with yoga facilities, which help residents
          achieve serenity within the natural environment.
        </p>

        <ul style={{ textAlign: "left", paddingLeft: "20px", lineHeight: "1.5", marginBottom: "30px" }}>
          <li>Fully-equipped fitness club</li>
          <li>Anchor supermarket</li>
          <li>Cafes and Restaurants</li>
          <li>Skate Park</li>
          <li>Amphitheatre</li>
          <li>Tennis Courts</li>
          <li>Basketball Courts</li>
          <li>Cycling and Running Tracks</li>
          <li>Yoga and Meditation spaces</li>
          <li>Children’s Adventure Park</li>
        </ul>

        <a
        onClick={openPopup}
          href="#page_block_footer"
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
          Let’s Talk!
        </a>
      </div>
    </section>
  );
}
