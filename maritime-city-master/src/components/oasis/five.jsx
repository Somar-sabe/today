import React from "react";

const OasisLocation = () => {
  return (
    <div data-wpr-lazyrender="1" className="jumbotron p-com-loc">
      <div className="container">

        <div style={{textAlign:"center"}} className="community-locator">
          <img        
            width="1460"
            height="915"
            src="https://cdn.properties.emaar.com/wp-content/uploads/2023/06/MicrosoftTeams-image-3.jpg"
            className="w-100"
            alt="View The Oasis on Google Maps"
            decoding="async"
            fetchpriority="high"
            srcSet="
              /img/imaar.jpg,
              /img/imaar.jpg 300w,
              /img/imaar.jpg 1024w,
              /img/imaar.jpg 768w
            "
            sizes="(max-width: 1460px) 100vw, 1460px"
          />
        </div>

        <div className="row location-advantages text-center mt-5 d-flex justify-content-center">
          <div className="col-6 col-sm-3 col-lg-2">
            <span className="feature-list">
              <span className="feature-head">18</span>
              Minutes to Al Maktoum International Airport
            </span>
          </div>

          <div className="col-6 col-sm-3 col-lg-2">
            <span className="feature-list">
              <span className="feature-head">20</span>
              
              Minutes to Dubai Hills Estate, Dubai Hills Mall &amp; Dubai Hills Golf Course
            </span>
          </div>

          <div className="col-6 col-sm-3 col-lg-2">
            <span className="feature-list">
              <span className="feature-head">28</span>
              Minutes to Dubai Marina &amp; Dubai Marina Mall
            </span>
          </div>

          <div className="col-6 col-sm-3 col-lg-2">
            <span className="feature-list">
              <span className="feature-head">35</span>
              Minutes to Downtown Dubai &amp; Dubai Mall
            </span>
          </div>
        </div>

        <div className="row mt-5 text-center d-flex justify-content-center">

        </div>

      </div>
      <style jsx>{`
      .feature-head {
          font-family: 'Optima LT W02 Roman';
    font-size: 24px;
    line-height: 36px;
    letter-spacing: normal;

      }

.location-advantages span {
    display: block;
    text-transform: uppercase;
    color: #232323;
    font-family: 'Lato', 'Open Sans', sans-serif;
    letter-spacing: normal;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 24px;
    font-weight: 400;
}
    .text-center {
    text-align: center !important;
}
@media (max-width: 730px) {
  .community-locator img{
    height: 50%;
  }
}


     `}</style>
    </div>
  );
};

export default OasisLocation;
