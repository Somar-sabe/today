import React from "react";

const PropertyListing = () => {
  const properties = [
    {
      
      imgSrc: "/img/HERO_1620X832_1-6-706x385.jpg",
      imgAlt: "HERO_1620X832_1",
      title: "Palace Villas – Ostra at The Oasis",
      beds: "4-6",
    },
    {
     
      imgSrc: "/img/HERO_1620X832_3-706x385.jpg",
      imgAlt: "HERO_1620X832_3",
      title: "Address Villas – Tierra",
      beds: "4 - 6",
    },
    {
     
      imgSrc: "/img/HERO_1620X832_1-706x385 (1).jpg",
      imgAlt: "HERO_1620X832_1",
      title: "Lavita at The Oasis",
      beds: "6 - 7",
    },
    {
     
      imgSrc: "/img/HERO_1620X832_2-2-706x385.jpg",
      imgAlt: "HERO_1620X832_2",
      title: "Palmiera 3 at The Oasis",
      beds: "4",
    },
    {
    
      imgSrc: "/img/HERO_1620X832_1-706x385.jpg",
      imgAlt: "HERO_1620X832_1",
      title: "Palmiera 2 at The Oasis",
      beds: "4",
    },
    {
      
      imgSrc: "/img/HERO_1620X832_1-706x385 (2).jpg",
      imgAlt: "HERO_1620X832_1",
      title: "Mirage at The Oasis",
      beds: "5-6",
    },
    {
    
      imgSrc: "/img/HERO_1620X832_1-706x385.jpg",
      imgAlt: "PALMIERA_HERO_3",
      title: "Palmiera",
      beds: "4-5",
    },
  ];

  return (
    <div className="prop-search-listing pt-3 pt-sm-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <h2 className="mb-2">Properties in The Oasis</h2>
          </div>
        </div>

        <div className="row mt-5">
          {properties.map((property, index) => (
            <div key={index} className="col-12 col-sm-6 mb-5 property-list">
              <a >
                <img
                style={{ borderRadius: "5px" }} 
                  data-src={property.imgSrc}
                  src={property.imgSrc}
                  alt={property.imgAlt}
                  title={property.imgAlt}
                  width="706"
                  height="385"
                  className="w-100"
                />
              </a>
              <section>
                <span className="community-name">THE OASIS</span>
                <h3>
                  <a tabIndex="0">
                    {property.title}
                  </a>
                </h3>
                <ul>
                  <li>
                    <i className="fas fa-bed" aria-hidden="true"></i> {property.beds}
                  </li>
                </ul>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
