import React from "react";
import styles from "./massar.module.css";

export default function EmptySection() {
  return (
    <section
      className={`${styles.section} ${styles["section-relative"]}`}
      id="page-block-ncu4pmp292p"
      data-at="section"
    >
      <div
        className={`${styles["section-holder-border"]} ${styles["item-block"]} ${styles["item-absolute"]}`}
        data-at="section-border"
      ></div>

      <div
        className={`${styles["section-holder-overlay"]} ${styles["item-block"]} ${styles["item-absolute"]}`}
        data-at="section-overlay"
      ></div>

      <div className={styles["section-block"]}>
        <div
          className={`${styles["section-inner"]} ${styles["section-fit"]} ${styles["section-relative"]}`}
        ></div>
      </div>
    </section>
  );
}
