import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyleSeven = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryImages = [
    "/img/14.jpg",
    "/img/10.jpg",
    "/img/8.jpg"
  ];

  return (
    <section id="about" className="about-area about-p pt-120 pb-120 p-relative fix">
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="s-about-img p-relative wow fadeInLeft animated">
              <Image
                src="/img/16.jpg"
                alt="About"
                width={600}
                height={500}
                className="img-flu"
              />
            </div>
          </div>

          {/* Right Content */}
          <div style={{ marginTop: 30 }} className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-content s-about-content wow fadeInRight animated">
              <div className="about-title second-title pb-20">
                <h5>01. About Us</h5>
                <h2>We Develop Qulity Projects Since 2015</h2>
              </div>

              <p>
                Discover premium residences designed for those who demand excellence,
                where every detail reflects sophistication and uncompromising quality
                in the heart of Dubai&apos;s most exclusive locations.
              </p>

              <div className="about-content3 mb-25">
                <ul className="green">
                  <li>Architecturally stunning designs with attention to every luxurious detail.</li>
                  <li>Smart home technology seamlessly integrated for modern living.</li>
                  <li>Strategically located in Dubai’s most sought-after neighborhoods.</li>
                  <li>Unmatched craftsmanship, delivering both style and substance.</li>
                </ul>
              </div>

              <div className="about-gallery">
                {isMobile ? (
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={4000}
                  >
                    {galleryImages.map((src, index) => (
                      <div key={index}>
                        <Image
                          src={src}
                          alt={`Gallery ${index + 1}`}
                          width={300}
                          height={200}
                          className="img-flui"
                        />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <div className="row">
                    {galleryImages.map((src, index) => (
                      <div className="col-md-4" key={index}>
                        <Image
                          src={src}
                          alt={`Gallery ${index + 1}`}
                          width={300}
                          height={200}
                          className="img-flui"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-area {
          background-color: #f8f9fa;
        }
        .img-flui {
          max-width: 100%;
          height: 130px;
        }
        .img-flu {
          max-width: 100%;
          height: 570px;
        }
          @media only screen and (max-width: 768px) {
  .about-title h2 {
    font-size: 32px; /* Adjust to your preferred mobile size */
  }
        p {
        font-size: 18px;
    }
      }
      `}</style>
    </section>
  );
};

export default StyleSeven;
