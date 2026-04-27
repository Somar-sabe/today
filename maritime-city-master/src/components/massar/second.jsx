import React from "react";

export default function MasaarSection({ openPopup }) {
  return (

    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: "url('/images/your-background.jpg')", // replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
            <style>{`
                         .bakurem{
             font-size: 2.5rem;
              margin-bottom: 20px;
              white-space: nowrap;
             }
             @media (max-width: 768px) {
             .bakurem{
             font-size: 1rem;
              margin-bottom: "20px";
              white-space: nowrap;
             }
            }
             `}</style>
      <div
        style={{
          maxWidth: "800px",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        {/* HEADLINE */}
        <h1  >
          <strong>Masaar 3 Villas & Townhouses in Sharjah</strong>
        </h1>

        {/* PARAGRAPH */}
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          Masaar 3 is a newly launched residential development that presents a 
          collection of 2 to 5 bedroom villas and townhouses with posh amenities. 
          This second residential phase of its forest lifestyle mega community is 
          designed with the traditional Sanskrit Vastu Shastra principles, which aim 
          to integrate architecture with nature.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          Set within the wonderful forest locality at Masaar community within Sharjah 
          will further pave a way to be at the top. The development strategic locality
          provides you easy access to the major road networks and the highways, so you 
          can have hassle-free connectivity without facing any further issues.
        </p>

        {/* BUTTON */}
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
          I&apos;m Interested
        </a>
      </div>
    </section>
  );
}
