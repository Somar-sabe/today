import React from "react";
        import Head from "next/head";// import your CSS directly from public folder

const AmenitiesSection = () => {
  const amenities = [
    { img: "assets/images/icons/icon-1.svg", text: "Lagoon Waterfalls" },
    { img: "assets/images/icons/icon-2.svg", text: "Paddling" },
    { img: "assets/images/icons/icon-3.svg", text: "Jungle River" },
    { img: "assets/images/icons/icon-4.svg", text: "Aqua Park" },
    { img: "assets/images/icons/icon-5.svg", text: "Mini Golf Island" },
    { img: "assets/images/icons/icon-6.svg", text: "Fitness Park" },
    { img: "assets/images/icons/icon-7.svg", text: "Hot Springs Spa" },
    { img: "assets/images/icons/icon-8.svg", text: "Private Boat Rides" },
  ];

  return (
    <section id="amenities" className="wow">


              <Head>
                <link rel="stylesheet" href="/assets/css/kh.css" />
              </Head>
      <div className="container-fluid amenities">
        <div className="section-head">
          <span>Features</span>
          <h2>Premium Lifestyle Amenities</h2>
        </div>

        <div className="amenity-grid">
          {amenities.map((item, index) => (
            <div className="amenity-grid-item" key={index}>
              <img
                src={item.img}
                alt="Community Highlights & Amenities Icon"
                loading="lazy"
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="call-to-action-btns">
          <div>
            <a
              href="#contactPopup"
              className="black-bg register-btn popup-with-form"
            >
              <img
                src="assets/images/banner-file.svg"
                alt="download icon"
                loading="lazy"
              />
              Check available units
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
