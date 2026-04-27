import React from "react";


export default function FullScreenImage() {
  return (
        <>
      <style>{`
        .hero-section {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 17.5rem !important;
          }
        }
      `}</style>
    <section className="hero-section">
      <img
       src="/img/65557212-0-TH-33-Corner-03.webp"
        alt="Full Screen"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </section>
    </>
  );
}
