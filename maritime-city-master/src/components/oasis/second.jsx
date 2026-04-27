import React from "react";


const HeroBanner = () => {
  return (
    <div className="hero-banner pt-4">
      <a
        href="#"
        className="image-wrapper open-global-swiper kos"
        data-swiper-index="1"
      >
        <img
     
          fetchPriority="high"
          src="/img/OASIS_1620-x-832-1620x832.jpg"
          alt="The Oasis by Emaar"
          title="OASIS_1620 x 832"
          width="1620"
          height="832"
          className="w-100"
        />
      </a>
             <style jsx>{`
  .kos img{
             max-height:70vh;
             }
             @media (max-height: 730px) {
             .kos img{
             max-height:50vh;
             }}
.som{
    border-radius: 5px;
    max-height:50%;}
            `}</style>
    </div>
  );
};

export default HeroBanner;
