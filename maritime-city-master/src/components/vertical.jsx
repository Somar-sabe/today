import React from "react";
import styles from "./VerticalImages.module.css";

const VerticalImages = () => {
  // Desktop images (public folder)
  const desktopImages = [
    "/Screenshot (1).png",
    "/Screenshot (3).png",
    "/Screenshot (4).png",
    "/Screenshot (6).png",

  ];

  // Mobile images (public folder)
  const mobileImages = [
    "/Screenshot (13).png",
    "/Screenshot (14).png",
    "/Screenshot (18).png",
  ];

  return (
    <div className={styles.container}>
      {/* Desktop Images */}
      <div className={styles.desktopOnly}>
        {desktopImages.map((src, index) => (
          <div key={index} className={styles.section}>
            <img src={src} alt={`Desktop Image ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>

      {/* Mobile Images */}
      <div className={styles.mobileOnly}>
        {mobileImages.map((src, index) => (
          <div key={index} className={styles.section}>
            <img src={src} alt={`Mobile Image ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalImages;
