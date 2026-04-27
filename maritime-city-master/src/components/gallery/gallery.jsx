import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    '/img/8.jpg',
    '/img/10.jpg',
    '/img/14.jpg',
    '/img/16.jpg',
    '/img/25.jpg',
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust threshold as needed
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (index, event) => {
    event.preventDefault();
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handlePrev = () =>
    setPhotoIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setPhotoIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      {!isMobile ? (
        <div className="galleryRow">
          <div className="wrapper">
            <div className="left">
              <a href="#" onClick={(e) => openModal(0, e)}>
                <Image className="leftItem" src={images[0]} alt="" width={612} height={450} />
              </a>
            </div>
            <div className="right">
              <div className="grid">
                {images.slice(1).map((src, index) => (
                  <a href="#" key={index + 1} onClick={(e) => openModal(index + 1, e)}>
                    <Image className="gridItem" src={src} alt="" width={230} height={215} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {images.map((src, index) => (
            <div key={index}>
              <Image src={src} alt="" layout="responsive" width={700} height={475} />
            </div>
          ))}
        </Carousel>
      )}

      {isOpen && (
        <div className="modal display">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modalContent">
            <Carousel
              selectedItem={photoIndex}
              showThumbs={false}
              showStatus={false}
              onChange={(index) => setPhotoIndex(index)}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button type="button" onClick={handlePrev} title={label} className="arrows prev">
                    &#10094;
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button type="button" onClick={handleNext} title={label} className="arrows next">
                    &#10095;
                  </button>
                )
              }
            >
              {images.map((src, index) => (
                <div key={index}>
                  <Image src={src} alt="" layout="responsive" width={700} height={475} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}
