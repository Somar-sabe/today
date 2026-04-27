import React from "react";

const CommunityFeatures = () => {
  return (
    <div className="community-features mt-5">
      <div className="container">
        <div className="col-12 p-0">
          <h2>Amenities</h2>
          <div className="community-features-text">
            <p>
              The Oasis by Emaar presents a wealth of amenities designed to
              enrich residents’ lives and foster a vibrant community atmosphere.
              Within this expansive master community, residents have access to
              beautifully landscaped parks, jogging tracks, and local mosques,
              offering serene spaces for relaxation. With convenient access to
              pristine beaches and a central location, leisure and exploration
              are effortlessly woven into daily life.
            </p>
          </div>
        </div>

        <div className="col-12 p-0 pt-3 mb-0">
          <div className="row">
            <div className="col-6 col-sm-4 col-md-3 feature-item">
              <i className="fas fa-landmark" aria-hidden="true"></i>
              <span className="feature-list">
                <span className="feature-head">100 million sq ft</span>
                Total Land Area
              </span>
            </div>

            <div className="col-6 col-sm-4 col-md-3 feature-item">
              <i className="fas fa-home" aria-hidden="true"></i>
              <span className="feature-list">
                <span className="feature-head">3100</span>
                Villas
              </span>
            </div>

            <div className="col-6 col-sm-4 col-md-3 feature-item">
              <i className="fas fa-tree" aria-hidden="true"></i>
              <span className="feature-list">
                <span className="feature-head">25% of the Land</span>
                Open Spaces + Amenities
              </span>
            </div>

            <div className="col-6 col-sm-4 col-md-3 feature-item">
              <i className="fas fa-golf-ball" aria-hidden="true"></i>
              <span className="feature-list">
                <span className="feature-head">4 International Golf Courses</span>
                In Close Proximity
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 30px;
        }

        .feature-item i {
          font-size: 36px;
          color: #bc986b;
          margin-bottom: 10px;
        }

        .feature-head {
          display: block;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .feature-list {
          font-size: 14px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default CommunityFeatures;
