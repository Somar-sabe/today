import React from "react";

const FullPageImage = ({ alt }) => {

   const scrollToContactForm = () => {
    const section = document.getElementById("contactform");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <style>
        {`

          /* Base styles */
          .container {
            width: 100vw;
            height: 100%;
            overflow: hidden;
            
            align-items: center;
            padding-right: 0px !important;
            padding-left: 0px !important;
          }

          .image {
            width: 100%;
            height: 100vh;
            object-fit: fill;
          }

          /* Hide desktop images on mobile */
          @media (max-width: 767px) {
            .desktop-only {
              display: none;
            }
          }

          /* Hide mobile images on desktop */
          @media (min-width: 768px) {
            .mobile-only {
              display: none;
            }
          }
        `}
      </style>

      <div className="container" style={{ maxWidth: "100vw" }}>
        {/* Only on mobile */}
        <div className="mobile-only">
          <img src="/assets/images/wkxkx.png" alt={alt} className="image" onClick={scrollToContactForm} />
          <img src="/assets/images/wm.png" alt={alt} className="image" onClick={scrollToContactForm} />
          <img src="/assets/images/mw.png" alt={alt} className="image" onClick={scrollToContactForm}/>
          <img src="/assets/images/sad.png" alt={alt} className="image" onClick={scrollToContactForm} />
        </div>

        {/* Only on desktop */}
        <div className="desktop-only">
          <img src="/assets/images/Screenshotsom.png" alt={alt} className="image" onClick={scrollToContactForm} />
          <img src="/assets/images/Screenshot.png" alt={alt} className="image" onClick={scrollToContactForm} />
          <img src="/assets/images/Screenshoo.png" alt={alt} className="image" onClick={scrollToContactForm} />
          <img src="/assets/images/Screenshotsomar.png" alt={alt} className="image" onClick={scrollToContactForm} />
          <img src="/assets/images/Screenshotdiala.png" alt={alt} className="image" onClick={scrollToContactForm} />
          <img src="/assets/images/Screenshotgh.png" alt={alt} className="image" onClick={scrollToContactForm} />
        </div>
      </div>
    </>
  );
};

export default FullPageImage;
