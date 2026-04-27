import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { projects } from "../../components/ProjectsList";

import HeaderSix from "@/components/header/headerSix";
import styles from "./ProjectTimeline.module.css";
import Footer from "@/components/footer/footer";
import Interest from "@/components/intrest/intrest";
import ContactForm from "@/components/contactForm/contactForm";
import Lead from "@/components/contactnew/LeadFormCard";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // ✅ Hooks FIRST (important)
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Find project safely
  const project = useMemo(() => {
    if (!slug) return null;
    return projects.find((p) => p.href === `/projects/${slug}`) || null;
  }, [slug]);

  // ✅ Build gallery array (no duplicates + no empty)
  const galleryImages = useMemo(() => {
    if (!project) return [];
    const arr = [project.image, project.simage, project.timage].filter(Boolean);
    const seen = new Set();
    return arr.filter((src) => {
      if (seen.has(src)) return false;
      seen.add(src);
      return true;
    });
  }, [project]);

  const openGalleryAt = (idx) => {
    if (!galleryImages[idx]) return;
    setActiveIndex(idx);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  const prevImg = () => {
  setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
};

const nextImg = () => {
  setActiveIndex((i) => (i + 1) % galleryImages.length);
};
  // ✅ ESC close
useEffect(() => {
  if (!galleryOpen) return;

  const onKeyDown = (e) => {
    if (e.key === "Escape") closeGallery();
    if (e.key === "ArrowLeft") prevImg();
    if (e.key === "ArrowRight") nextImg();
  };

  window.addEventListener("keydown", onKeyDown);
  return () => window.removeEventListener("keydown", onKeyDown);
}, [galleryOpen, galleryImages.length]);

  // ✅ Your original returns (after hooks)
  if (router.isFallback || !slug) {
    return <p>Loading project details...</p>;
  }

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={styles.page}>
      <HeaderSix />

 

{/* ✅ LIGHTBOX GALLERY (WITH ARROWS) */}
{galleryOpen && (
  <div
    className={styles.lbOverlay}
    onClick={closeGallery}
    role="dialog"
    aria-modal="true"
  >
    <button
      className={styles.lbClose}
      onClick={closeGallery}
      aria-label="Close"
      type="button"
    >
      ×
    </button>

    <div className={styles.lbStage} onClick={(e) => e.stopPropagation()}>
      {/* ✅ LEFT ARROW */}
      {galleryImages.length > 1 && (
        <button
          type="button"
          className={`${styles.lbArrow} ${styles.lbArrowLeft}`}
          onClick={prevImg}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      <img
        src={galleryImages[activeIndex]}
        alt={`${project.title} preview ${activeIndex + 1}`}
        className={styles.lbImg}
        draggable="false"
      />

      {/* ✅ RIGHT ARROW */}
      {galleryImages.length > 1 && (
        <button
          type="button"
          className={`${styles.lbArrow} ${styles.lbArrowRight}`}
          onClick={nextImg}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {/* ✅ Thumbnails */}
      {galleryImages.length > 1 && (
        <div className={styles.lbThumbs}>
          {galleryImages.map((src, idx) => (
            <button
              key={src + idx}
              type="button"
              className={`${styles.lbThumbBtn} ${
                idx === activeIndex ? styles.lbThumbActive : ""
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <img
                src={src}
                alt={`thumb ${idx + 1}`}
                className={styles.lbThumb}
                draggable="false"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
)}

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroMain}>
            <div className={styles.badge}>Off-plan</div>

            <img
              src={project.image}
              alt={project.title}
              className={styles.heroImg}
              onClick={() => openGalleryAt(0)}
              style={{ cursor: "zoom-in" }}
            />
          </div>

          <div className={styles.heroSide}>
            <img
              src={project.simage}
              alt={project.title}
              className={styles.heroSideImg}
              onClick={() => openGalleryAt(1)}
              style={{ cursor: "zoom-in" }}
            />
            <img
              src={project.timage}
              alt={project.title}
              className={styles.heroSideImg}
              onClick={() => openGalleryAt(2)}
              style={{ cursor: "zoom-in" }}
            />
          </div>
        </div>

        <div className={styles.heroOverlay}>
          <div className={styles.heroOverlayInner}>
            <div>
              <h1 className={styles.heroTitle}>{project.title}</h1>
              <p className={styles.heroSubtitle}>{project.location}</p>
            </div>

            <div className={styles.heroCTA}>
              <div className={styles.ctaText}>
                Get in touch now for more information.
              </div>

              <button
                type="button"
                aria-label="WhatsApp"
                className={styles.whatsappBtn}
                onClick={() => {
                  const phone = "971586232132"; // no +
                  const message = encodeURIComponent(
                    "Hi, I'm interested. Please send me more information."
                  );
                  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                }}
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className={styles.container}>
        {/* QUICK INFO */}
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.h2}>Project Details</h2>
            <a href="#contact-form" className={styles.primaryBtn}>
              Enquire Now
            </a>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Price</div>
              <div className={styles.detailValue}>{project.price}</div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Location</div>
              <div className={styles.detailValue}>{project.location}</div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Bedrooms</div>
              <div className={styles.detailValue}>
                {project.bedrooms || "N/A"}
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Delivery</div>
              <div className={styles.detailValue}>{project.delivery}</div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Sales Start</div>
              <div className={styles.detailValue}>{project.salesStart}</div>
            </div>
          </div>
        </section>

        {/* DEVELOPER */}
        <section className={styles.card}>
          <div className={styles.developerRow}>
            <div>
              <div className={styles.muted}>Developed by</div>
              <div className={styles.devName}>
                {project.developerName || "Developer"}
              </div>
            </div>
            <img
              src={project.developerLogo}
              alt="Developer Logo"
              className={styles.devLogo}
            />
          </div>
        </section>

        {/* ABOUT */}
        <section className={styles.card}>
          <h2 className={styles.h2}>About the Project</h2>
          <p className={styles.paragraph}>{project.describ}</p>
          <p className={styles.paragraph}>{project.describb}</p>
        </section>

        {/* TIMELINE */}
        <section id="project-timeline" className={styles.card}>
          <h2 className={styles.h2Center}>Project Timeline</h2>
          <ul className={styles.timeline}>
            <li className={styles.step}>
              <div className={styles.markerCol}>
                <span className={`${styles.dot} ${styles.dotDone}`}>✓</span>
                <span className={`${styles.vLine} ${styles.vLineDone}`} />
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>Project announcement</div>
                <div className={styles.stepMeta}>{project.announcement}</div>
              </div>
            </li>

            <li className={styles.step}>
              <div className={styles.markerCol}>
                <span className={`${styles.dot} ${styles.dotDone}`}>✓</span>
                <span className={`${styles.vLine} ${styles.vLineDone}`} />
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>Booking started</div>
                <div className={styles.stepMeta}>{project.bookingStart}</div>
              </div>
            </li>

            <li className={styles.step}>
              <div className={styles.markerCol}>
                <span className={`${styles.dot} ${styles.dotDone}`}>✓</span>
                <span className={styles.vLine} />
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>Construction started</div>
                <div className={styles.stepMeta}>{project.salesStart}</div>
              </div>
            </li>

            <li className={styles.step}>
              <div className={styles.markerCol}>
                <span className={styles.dot} />
              </div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>Expected completion</div>
                <div className={styles.stepMeta}>{project.delivery}</div>
              </div>
            </li>
          </ul>
        </section>

        {/* CONTACT (same as you had) */}
        <div className="responsive-container">
          <Interest />
          <section id="contact-form">
            <Lead />
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .responsive-container {
          display: flex;
          justify-content: space-around;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .responsive-container {
            flex-direction: column;
            align-items: center;
          }
        }

      `}</style>
    </div>
  );
};

export default ProjectPage;
