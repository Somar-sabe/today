'use client';

import Image from 'next/image';

export default function Port() {
  return (
    <section id="services-area2" className="services-area2 pb-90 fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="section-title center-align mb-50 text-center">
              <h5>04. Our Portfolio</h5>
              <h2>What We Provide</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="masonry-gallery-huge">
              <div className="grid col2" style={{ position: 'relative', height: '2530px' }}>
                {[
                  'protfolio-img01.png',
                  'protfolio-img02.png',
                  'protfolio-img03.png',
                  'protfolio-img04.png',
                  'protfolio-img05.png',
                ].map((img, index) => (
                  <div
                    key={img}
                    className="grid-item hover-zoomin financial"
                    style={{ position: 'absolute', left: '0%', top: `${index * 506}px` }}
                  >
                    <a href={`/img/gallery/${img}`} className="popup-image">
                      <figure className="gallery-image">
                        <Image
                          src={`/img/gallery/${img}`}
                          alt="Portfolio"
                          width={600}
                          height={400}
                          className="img"
                        />
                        <figcaption>
                          <h4>Apartment Security</h4>
                          <span>Residences Flats</span>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
       
       @media only screen and (max-width: 768px) {
.about-title h2 {
 font-size: 32px; /* Adjust to your preferred mobile size */
}
 .h2{
 font-size:40px;}
     p {
     font-size: 18px;
 }
   }
   `}</style>
    </section>
  );
}
