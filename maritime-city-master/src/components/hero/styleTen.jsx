'use client';
import Image from 'next/image';
import ContactForm from '@/components/SilvaContact/SilvaContact'; // adjust path as needed

const HeroSectionStyleOne = () => {
  return (
    <section id="home" className="slider-area slider-four fix p-relative">
      <div className="single-slider slider-bg d-flex align-items-center p-relative">
        <div className="content-lines-wrapper2">
          <div className="content-lines-inner2">
            <div className="content-lines2"></div>
          </div>
        </div>
        <div className="hero-contact-form bkoa">
          <ContactForm />
        </div>
        <div
          className="image-layer"
          style={{
            backgroundImage:
              'url(/img/silva3.jpeg)',
          }}
        ></div>
        <div className="dark-overlay"></div>
      </div>

      <style jsx>{`
           @media (max-width: 768px) {
     .bkoa{
     display:none;}
     }
        .dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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

        .call-boxi {
          display: none;
          position: absolute;
          bottom: 50px;
          right: 7.8%;
          width: 200px;
          height: 200px;
          background-color: wheat;
        }

        .call-box {
          position: absolute;
          bottom: 50px;
          left: 7.8%;
        }
      `}</style>
        <style jsx>{`
        .dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
         
          z-index: 1;
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
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-contact-form {
          position: absolute;
          z-index: 2;
          border-radius: 10px;
          left: 10px;
        }

      `}</style>
    </section>
  );
};

export default HeroSectionStyleOne;
