import React from "react";
import Head from "next/head";

const AboutSection = () => {
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form"); // make sure this matches your section id
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/kh.css" />
      </Head>

      <section id="about" className="wow">
        <div className="container about-content">
          {/* Left Side */}
          <div className="about-left">
            <div className="section-head">
              <span>Overview</span>
              <h2>Key Highlights of DAMAC Islands 2</h2>
            </div>

            <div className="about-details">
              <p>
                Developed by DAMAC Properties, DAMAC Islands Phase 2 is a luxury
                waterfront community located in Dubailand. The development blends
                serene tropical design with world-class architecture, delivering
                an unmatched island lifestyle in the heart of Dubai.
              </p>
              <p>
                This master development will feature spacious residences with 4 to
                5 bedrooms. Residents can enjoy amenities such as lagoon
                waterfalls, jungle rivers, mini golf islands, fitness parks, and
                private boat rides, all within a tranquil yet vibrant setting.
              </p>

              <div className="call-to-action-btns about-above-btns">
                <div>
                  <a
                    href="#contact-form"
                    className="black-bg register-btn dynamic-text-btn"
                    onClick={scrollToContactForm}
                  >
                    <img
                      src="assets/images/tabler-icon-file.svg"
                      alt="download icon"
                      loading="lazy"
                    />
                    Request Payment Plan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="about-right">
            <div className="about-right-item">
              <h3>Damac Islands Payment Plan</h3>
              <p>
                Own your home at Damac Islands with a flexible plan. Get your
                priority access today.
              </p>
            </div>
            <div className="about-right-item">
              <h3>Types of Units</h3>
              <p>
                Damac Islands townhouses and villas include 4 to 5-bedroom
                residences, offering a lifestyle of spacious luxury and comfort.
              </p>
            </div>
            <div className="about-right-item">
              <h3>Tropical-Themed Destinations</h3>
              <p>
                Live among tropical beauty inspired by the Maldives, Bora Bora,
                Seychelles, Hawaii, Bali, and Fiji, each reflected in the distinct
                character of Damac Islands in Dubailand.
              </p>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="call-to-action-btns about-below-btns">
            <div>
              <a
                href="#contact-form"
                className="black-bg register-btn dynamic-text-btn"
                onClick={scrollToContactForm}
              >
                <img
                  src="assets/images/tabler-icon-file.svg"
                  alt="download icon"
                  loading="lazy"
                />
                Request Payment Plan
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
