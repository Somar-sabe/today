import React from "react";

export default function FullScreenImagesssss() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src="/img/Screenshot (906).png"
        alt="Full Screen"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </section>
  );
}
