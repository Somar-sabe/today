import React, { useState } from "react";
import Head from "next/head";

const SliderSection = () => {
  const [activeTab, setActiveTab] = useState("interior");
  const [interiorIndex, setInteriorIndex] = useState(0);
  const [exteriorIndex, setExteriorIndex] = useState(0);

  const interiorSlides = [
    { src: "assets/images/slides/exterior/1.jpg", alt: "Front View" },
    { src: "assets/images/slides/exterior/2.jpg", alt: "Backyard" },
    { src: "assets/images/slides/exterior/3.jpg", alt: "Swimming Pool" },
    { src: "assets/images/slides/exterior/4.jpg", alt: "Garden View" },
    { src: "assets/images/slides/exterior/5.jpg", alt: "Night View" },
  ];

  const exteriorSlides = [
    { src: "assets/images/slides/interior/1.jpg", alt: "Front View" },
    { src: "assets/images/slides/interior/2.jpg", alt: "Backyard" },
    { src: "assets/images/slides/interior/3.jpg", alt: "Swimming Pool" },
    { src: "assets/images/slides/interior/4.jpg", alt: "Garden View" },
  ];

  const slidesMap = {
    interior: { slides: interiorSlides, index: interiorIndex, setIndex: setInteriorIndex },
    exterior: { slides: exteriorSlides, index: exteriorIndex, setIndex: setExteriorIndex },
  };

  const handlePrev = (tab) => {
    const { index, setIndex, slides } = slidesMap[tab];
    setIndex(index > 0 ? index - 1 : slides.length - 1);
  };

  const handleNext = (tab) => {
    const { index, setIndex, slides } = slidesMap[tab];
    setIndex(index < slides.length - 1 ? index + 1 : 0);
  };

  const handleThumbnailClick = (tab, idx) => {
    slidesMap[tab].setIndex(idx);
  };

  const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="slider-section" className="wow animated">
      <Head>
        <link rel="stylesheet" href="/assets/css/kh.css" />
      </Head>

      <div className="slider-container container">
        {/* Tabs and Button */}
        <div className="slider-head-sec">
          <div className="slider-tabs">
            <button
              className={`tab ${activeTab === "interior" ? "active" : ""}`}
              onClick={() => setActiveTab("interior")}
            >
              Exterior
            </button>
            <button
              className={`tab ${activeTab === "exterior" ? "active" : ""}`}
              onClick={() => setActiveTab("exterior")}
            >
              Interior
            </button>
          </div>
          <div className="call-to-action-btns">
            <div>
              <a
                href="#contact-form"
                className="white-bg register-btn dynamic-text-btn"
                onClick={scrollToContactForm}
              >
                Download Payment Plan
              </a>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {["interior", "exterior"].map((tab) => {
          const { slides, index } = slidesMap[tab];
          return (
            <div
              key={tab}
              className={`tab-content ${activeTab === tab ? "active" : ""}`}
              id={tab}
            >
              <div className="slider-wrapper">
                <div
                  className="slider"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {slides.map((slide, i) => (
                    <div className="slide" key={i}>
                      <img src={slide.src} alt={slide.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pagination-wrapper">
                <button className="nav-arrow" onClick={() => handlePrev(tab)}>
                  <img src="assets/images/slides/prev.svg" alt="icon" />
                </button>

                <div className="thumbnails">
                  {slides.map((slide, i) => (
                    <div
                      className={`thumbnail ${i === index ? "active" : ""}`}
                      key={i}
                      onClick={() => handleThumbnailClick(tab, i)}
                    >
                      <img src={slide.src} alt={slide.alt} loading="lazy" />
                    </div>
                  ))}
                </div>

                <button className="nav-arrow" onClick={() => handleNext(tab)}>
                  <img src="assets/images/slides/next.svg" alt="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SliderSection;
