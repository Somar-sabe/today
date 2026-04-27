import React from "react";
import Head from "next/head";

const BannerSection = () => {
  return (
    <section id="banner" className="banner-section">
              <Head>
        <link rel="stylesheet" href="/assets/style/kh.css" />
      </Head>
      {/* Optional background video (disabled by default) */}
      {/* 
      <video
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
        />
      </video>
      */}

      <div className="container">
        <div className="banner-inner">
          {/* ===== Left Content ===== */}
          <div className="banner-left">
            <img
              className="inner-logo"
              src="images/damac-islands-logo.svg?v=2"
              alt="Damac Islands Logo"
            />
            <p>
              Introducing the new phase of <strong>DAMAC Islands 2</strong>, a
              vibrant community that brings six exotic island destinations to
              life. Explore a beautifully designed waterfront with luxurious
              villas, lively lifestyle hubs, and tranquil blue lagoons.
            </p>
            <div className="cta-group">
              <a
                href="#contactPopup"
                className="white-bg register-btn popup-with-form"
              >
                <img
                  src="assets/images/banner-file.svg"
                  alt="download icon"
                  loading="lazy"
                />
                Check Available Units
              </a>
            </div>
          </div>

          {/* ===== Right Visual / Logo Placeholder ===== */}
          <div className="banner-right">
            <div className="form-img">
              <img src="images/damac-logo.svg" alt="Damac Logo" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="banner-bottom-sec">
        <div className="container bottom-container">
          <p>Your Tropical Sanctuary Awaits</p>
          <div>
            <a
              href="#brochurePopup"
              className="black-bg register-btn popup-with-form2"
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

      {/* ===== Scoped CSS ===== */}
      <style jsx>{`
        #banner {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url("images/banner-bg.jpg") center/cover no-repeat;
          color: #fff;
          padding: 100px 20px 60px;
        }

        .banner-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .banner-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
        }

        .banner-left {
          flex: 1 1 500px;
        }

        .inner-logo {
          width: 240px;
          margin-bottom: 25px;
        }

        .banner-left p {
          font-size: 18px;
          line-height: 1.6;
          max-width: 600px;
          margin-bottom: 30px;
        }

        .cta-group a {
          display: inline-flex;
          align-items: center;
          background: #fff;
          color: #000;
          padding: 12px 20px;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-group a:hover {
          background: #f2f2f2;
          transform: translateY(-2px);
        }

        .cta-group img {
          margin-right: 10px;
          width: 22px;
          height: 22px;
        }

        .banner-right .form-img img {
          width: 180px;
        }

        .banner-bottom-sec {
          background: #000;
          padding: 30px 20px;
          text-align: center;
          margin-top: 60px;
        }

        .banner-bottom-sec p {
          color: #fff;
          font-size: 20px;
          margin-bottom: 20px;
        }

        .black-bg {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          color: #000;
          padding: 12px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .black-bg:hover {
          background: #f2f2f2;
        }

        .arrow-wrap {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }

        .arrow img {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 992px) {
          #banner {
            padding: 80px 20px 40px;
          }

          .inner-logo {
            width: 200px;
          }

          .banner-left p {
            font-size: 16px;
          }

          .banner-right {
            display: none;
          }

          .banner-bottom-sec {
            margin-top: 40px;
          }
        }

        @media (max-width: 480px) {
          .cta-group a {
            width: 100%;
            justify-content: center;
          }

          .banner-bottom-sec p {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default BannerSection;
