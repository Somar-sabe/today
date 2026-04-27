import React from "react";

const LocationSection = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Location small title */}
      <div style={{ animation: "slideInUp 0.6s ease" }}>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#3A3A3A",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Location
        </span>
      </div>

      {/* Main Heading */}
      <div style={{ animation: "slideInUp 0.6s ease", animationDelay: "0.05s" }}>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "600",
            color: "#1a1a1a",
            margin: "0",
            lineHeight: "1.2",
          }}
        >
          A Connected Community with Natural Appeal
        </h2>
      </div>

      {/* Description */}
      <div style={{ animation: "slideInUp 0.6s ease", animationDelay: "0.1s" }}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            maxWidth: "800px",
            color: "#444",
            marginTop: "10px",
          }}
        >
          Ideally located in Dubai, The Oasis offers a peaceful escape
          surrounded by nature. Enjoy seamless connectivity to key city
          destinations while living in complete serenity.
        </p>
      </div>

      {/* Image with vertical text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Vertical Text */}


        {/* Image */}
        <img
          src="/assets/images/emaar-the-oasis-location-1.jpg" // استبدل بالرابط الحقيقي
          alt="Oasis Location"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes slideInUp {
            from {
              transform: translateY(25px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* 📱 Mobile Styles */
          @media (max-width: 768px) {
            h2 {
              font-size: 28px !important;
            }

            p {
              font-size: 16px !important;
            }

            span {
              font-size: 16px !important;
            }

            div[style] {
              padding: 40px 15px !important;
            }

            div[style*="display: flex"] {
              flex-direction: column !important;
              align-items: center !important;
            }

            div[style*="writing-mode"] {
              writing-mode: horizontal-tb !important;
              margin-bottom: 20px;
            }
          }

          /* 📱 Small Phones */
          @media (max-width: 480px) {
            h2 {
              font-size: 24px !important;
            }
            p {
              font-size: 15px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LocationSection;
