import React from "react";
import Head from "next/head";
const EmaarHeroSection = ({ openPopup }) => {
  return (
    <div
      className="elementor-element elementor-element-29190c2 e-flex e-con-boxed e-con e-parent e-lazyloaded"
      data-id="29190c2"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
      data-rocket-lazy-bg-9e845e83-1782-46af-a32a-919bfc6e7a80="loaded"
    >
                            <Head>
        <link rel="stylesheet" href="/assets/css/new.css" />
      </Head>
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-d923b28 e-con-full e-flex e-con e-child"
          data-id="d923b28"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-12e69fc animated-fast elementor-widget elementor-widget-heading animated slideInUp"
            data-id="12e69fc"
            data-element_type="widget"
            data-settings="{}"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h1 className="elementor-heading-title elementor-size-default">
                Emaar The Oasis – Dubai’s Most Prestigious Waterfront Community
              </h1>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-43a54d1 animated-fast pum-trigger popmake-987707 elementor-widget elementor-widget-button animated fadeIn"
            data-id="43a54d1"
            data-element_type="widget"
            data-settings='{"_animation_delay":100}'
            data-widget_type="button.default"
            style={{ cursor: "pointer" }}
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-icon">
                      <i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i>
                    </span>
                    <span onClick={openPopup} className="elementor-button-text">Register your interest</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-42a5562 e-con-full e-flex e-con e-child"
          data-id="42a5562"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-bf6cf17 e-con-full blur-background blur-bg-box animated-fast e-flex e-con e-child animated slideInRight"
            data-id="bf6cf17"
            data-element_type="container"
            data-settings='{"animation_delay":0}'
          >
            <div
              className="elementor-element elementor-element-6a12252 e-con-full e-flex e-con e-child"
              data-id="6a12252"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-1816919 elementor-widget elementor-widget-heading"
                data-id="1816919"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">AED 8.5M</h2>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-7e58201 elementor-widget elementor-widget-text-editor"
                data-id="7e58201"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">Starting price</div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-0fac2ad elementor-widget elementor-widget-heading"
              data-id="0fac2ad"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">
                  Booking from AED 850K (USD 231K)
                </h3>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-743f3e0 e-con-full animated-fast e-flex e-con e-child"
            data-id="743f3e0"
            data-element_type="container"
            data-settings='{"background_background":"classic","animation":"none","animation_delay":0}'
          >
            <div
              className="elementor-element elementor-element-ac7fe9a e-con-full e-flex e-con e-child"
              data-id="ac7fe9a"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-3989a1c elementor-widget elementor-widget-heading"
                data-id="3989a1c"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">80/20</h2>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-878e4a2 elementor-widget elementor-widget-text-editor"
                data-id="878e4a2"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>Payment Plan</p>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-bd2c5e0 elementor-widget elementor-widget-heading"
              data-id="bd2c5e0"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">
                  4 to 7 bedroom Standalone Villas
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-d6c6f7d e-con-full e-flex e-con e-child"
          data-id="d6c6f7d"
          data-element_type="container"
          data-settings='{"position":"absolute"}'
        ></div>
      </div>
    </div>
  );
};

export default EmaarHeroSection;
