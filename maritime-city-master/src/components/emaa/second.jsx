import React from "react";
import Head from "next/head";

const OasisSection = ({ openPopup }) => {
    const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form"); // make sure this matches your section id
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="elementor-element elementor-element-8114ebe e-con-full e-flex e-con e-parent e-lazyloaded"
      data-id="8114ebe"
      data-element_type="container"
    >
                    <Head>
        <link rel="stylesheet" href="/assets/css/new.css" />
      </Head>
      <div
        className="elementor-element elementor-element-5b03dab e-flex e-con-boxed e-con e-child"
        data-id="5b03dab"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-3fdeabc e-con-full e-flex e-con e-child"
            data-id="3fdeabc"
            data-element_type="container"
          >
            {/* FIRST BOX */}
            <div
              className="elementor-element elementor-element-4b293a5 e-con-full animated-fast e-flex e-con e-child animated slideInUp"
              data-id="4b293a5"
              data-element_type="container"
              data-settings='{"animation":"slideInUp"}'
            >
              <div
                className="elementor-element elementor-element-e65b7d2 elementor-widget elementor-widget-heading"
                data-id="e65b7d2"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h5 className="elementor-heading-title elementor-size-default">
                    Exclusive Villa-Only Community
                  </h5>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-09f6ef4 elementor-widget elementor-widget-text-editor"
                data-id="09f6ef4"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    The Oasis by Emaar is a rare, master-planned development
                    dedicated entirely to standalone villas—no apartments or
                    townhouses. This ensures unmatched privacy, low density, and
                    a peaceful environment tailored for upscale family living.
                  </p>
                </div>
              </div>
            </div>

            {/* SECOND BOX */}
            <div
              className="elementor-element elementor-element-e939fe0 e-con-full animated-fast e-flex e-con e-child animated slideInUp"
              data-id="e939fe0"
              data-element_type="container"
              data-settings='{"animation":"slideInUp","animation_delay":50}'
            >
              <div
                className="elementor-element elementor-element-347dbda elementor-widget elementor-widget-heading"
                data-id="347dbda"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h5 className="elementor-heading-title elementor-size-default">
                    Ideal for investors and homeowners
                  </h5>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-685a1f6 elementor-widget elementor-widget-text-editor"
                data-id="685a1f6"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    The Oasis by Emaar offers luxury villas designed for both
                    refined living and high investment potential. Whether you’re
                    seeking a private sanctuary or a smart long-term asset, it
                    delivers the best of both worlds.
                  </p>
                </div>
              </div>
            </div>

            {/* THIRD BOX (ICON + BUTTON) */}
            <div
              className="elementor-element elementor-element-f606535 e-con-full e-flex e-con e-child"
              data-id="f606535"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-7dc5afc animated-fast elementor-view-default elementor-widget elementor-widget-icon animated slideInUp"
                data-id="7dc5afc"
                data-element_type="widget"
                data-settings='{"_animation":"slideInUp"}'
                data-widget_type="icon.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <div className="elementor-icon">
                      <i
                        aria-hidden="true"
                        className="vamtamtheme- vamtam-theme-logo-sign"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-c0fa649 elementor-widget elementor-widget-spacer"
                data-id="c0fa649"
                data-element_type="widget"
                data-widget_type="spacer.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner"></div>
                  </div>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-552357d animated-fast pum-trigger popmake-987707 elementor-widget elementor-widget-button animated fadeIn"
                data-id="552357d"
                data-element_type="widget"
                data-settings='{"_animation":"fadeIn","_animation_delay":100}'
                data-widget_type="button.default"
                style={{ cursor: "pointer" }}
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="#"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <i
                            aria-hidden="true"
                            className="vamtamtheme- vamtam-theme-arrow-right"
                          ></i>
                        </span>
                        <span onClick={openPopup} className="elementor-button-text">
                          Register your interest
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OasisSection;
