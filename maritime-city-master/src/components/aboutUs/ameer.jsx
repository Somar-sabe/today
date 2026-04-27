import React from "react";
import Head from "next/head";

const Banner = () => {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="banner">
      <Head>
        <link rel="stylesheet" href="/assets/css/kh.css" />
      </Head>
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="banner-video"
        preload="none"
      >
        <source
          src="https://provident.s3.us-east-1.amazonaws.com/video/dubai-hills-video.mp4?v=2"
          type="video/mp4"
          alt="video"
        />
      </video> */}
      <div className="container">
        <div className="banner-section">
          <div className="banner-inner">
            <div className="banner-left">
              <div className="banner-desk">
                <img
                  className="inner-logo"
                  src="assets/images/damac-islands-logo.svg?v=2"
                  alt=""
                />
                <p>
                  Introducing the new phase of DAMAC Islands 2, a vibrant
                  community that brings six exotic island destinations to life.
                  Explore a beautifully designed waterfront with luxurious villas,
                  lively lifestyle hubs, and tranquil blue lagoons.
                </p>
                <div>
                  <a
                    href="#contactFormSection"
                    className="white-bg register-btn popup-with-form"
                    onClick={scrollToContactForm}
                  >
                    <img
                      src="assets/images/banner-file.svg"
                      alt="download icon"
                      loading="lazy"
                    />
                    Check Available units
                  </a>
                </div>
              </div>

              <div className="banner-wrap-mob">
                <img
                  className="inner-logo"
                  src="assets/images/damac-islands-logo.svg?v=2"
                  alt=""
                />

                <div className="banner-brochure-btn">
                  <a
                    href="#contactFormSection"
                    className="white-bg register-btn popup-with-form2"
                    onClick={scrollToContactForm}
                  >
                    <div className="arrow-wrap">
                      <div className="arrow">
                        <img
                          src="assets/images/down-arrow.svg?v=2"
                          alt="Download Arrow"
                        />
                      </div>
                    </div>
                    Download the Brochure
                  </a>
                </div>

                <a className="animated-scroll-btn" data-target="about">
                  <div className="scroll-circle">
                    <div className="animated-arrow-container">
                      <div className="moving-arrow">
                        <img
                          src="assets/images/arrow-down.svg"
                          alt="Scroll Arrow"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="scroll-caption">Scroll to know more</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-bottom-sec desk-only">
        <div className="container">
          <p>Your Tropical Sanctuary Awaits</p>
          <div>
            <a
              href="#contactFormSection"
              className="black-bg register-btn popup-with-form2"
              onClick={scrollToContactForm}
              data-project="project1"
            >
              <div className="arrow-wrap">
                <div className="arrow">
                  <img
                    src="assets/images/down-arrow-damac.svg?v=2"
                    alt="Download Arrow"
                  />
                </div>
              </div>
              Download the Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
