'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const HeroSectionStyleOnear = () => {
  return (
    <section id="home" className="slider-area slider-four fix p-relative" dir="ltr">
      {/* Call Box */}
      <div className="call-box">
        <ul>
          <li>
            <div className="icon">
              <Image src="/img/icons/phone-call.png" alt="Call" width={40} height={40} />
            </div>
          </li>
          <li>
            <div className="text">
              <a href="tel:+9715852087573" style={{ textDecoration: "none", color: "inherit" }}>
                <span>Call Now!</span>
                <strong>+971 585 2087 73</strong>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="call-boxi">
        <ul>
          <li>
            <div className="icon">
              <Image
                src="/placeholder.png"
                alt="Call"
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL="/placeholder-blur.png"
              />
            </div>
          </li>
        </ul>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="single-slider slider-bg d-flex align-items-center p-relative">
            <div className="content-lines-wrapper2">
              <div className="content-lines-inner2">
                <div className="content-lines2"></div>
              </div>
            </div>
            <div className="image-layer" style={{ backgroundImage: 'url(assets/images/banner.jpg)' }}></div>
            <div className="dark-overlay"></div>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-8">
                  <div className="slider-content s-slider-content">
                    <h2>
                      <span>Luxury Residences</span>
                    </h2>
                    <p style={{ paddingRight: "0" }}>
                      A seamless blend of serene waterfront views and modern luxury, offering breathtaking views of the Gulf and the ocean.
                    </p>
                    <div style={{ zIndex: 99999999999999 }} className="slider-btn mt-30">
                      <button
                        style={{ zIndex: 99999999999999 }}
                        className="btn ss-btn mr-15"
                        onClick={() => {
                          document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Get Consultation
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="single-slider slider-bg d-flex align-items-center p-relative">
            <div className="content-lines-wrapper2">
              <div className="content-lines-inner2">
                <div className="content-lines2"></div>
              </div>
            </div>
            <div className="image-layer" style={{ backgroundImage: 'url(assets/images/banner.jpg)' }}></div>
            <div className="dark-overlay"></div>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-8">
                  <div className="slider-content s-slider-content">
                    <h2>
                      <span>Luxury Residences</span>
                    </h2>
                    <p style={{ paddingRight: "0" }}>
                      Elegantly designed with Art Deco style and fluid architecture, providing seamless indoor-outdoor living. Enjoy upscale living, world-class amenities, and a vibrant coastal lifestyle just minutes from the heart of Dubai.
                    </p>
                    <div className="slider-btn mt-30">
                      <button
                        style={{ zIndex: 99999999999999 }}
                        className="btn ss-btn mr-15"
                        onClick={() => {
                          const contactSection = document.getElementById("contact-form");
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        Get Consultation
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>

      <style jsx>{`
        .call-boxi {
          display: none;
          position: absolute;
          bottom: 50px;
          left: 7.8%;
          width: 200px;
          height: 200px;
          background-color: wheat;
        }
        .call-box {
          position: absolute;
          bottom: 50px;
          right: 7.8%;
        }
        .dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }
        .slider-content {
          position: relative;
        }
        .image-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        .single-slider {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }
        slider-area {
          height: 100vh;
        }
      `}</style>
    </section>
  );
};

export default HeroSectionStyleOnear;
