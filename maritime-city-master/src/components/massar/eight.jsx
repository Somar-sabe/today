import React from "react";

export default function FullScreenImagess() {
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
        src="/img/1756889794-65557232-ghost-img192.jpg"
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
