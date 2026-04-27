import React from "react";

const NearbyCommunities = () => {
  return (
    <div data-wpr-lazyrender="1" className="jumbotron home-featured-communities pt-0">
      <div className="communities-menu-featured">
        <div className="container">
          <h2>Nearby Communities</h2>

          <div className="slider slider-nav row text-center">
            
            <div className="col-12 col-md-3 communities-featured-block">
              <a >
                <img
                  className="som"
                  data-src="https://cdn.properties.emaar.com/wp-content/uploads/2020/03/AR_DSC_6360-1-320x415.jpg"
                  alt="Arabian Ranches"
                  title="Arabian Ranches"
                  width="440"
                  height="615"
                  src="https://cdn.properties.emaar.com/wp-content/uploads/2020/03/AR_DSC_6360-1-320x415.jpg"
                />
              </a>
              <h3 className="mt-4 mb-2">
                <a >
                  Arabian Ranches
                </a>
              </h3>
              <span className="community-tagline">Journey beyond the ordinary</span>
              <span className="bhk-number">3 &amp; 4 Bedroom Villas &amp; Townhouses</span>
            </div>

            <div className="col-12 col-md-3 communities-featured-block">
              <a >
                <img
                  className="som"
                  data-src="https://cdn.properties.emaar.com/wp-content/uploads/2020/03/EMAAR_DubaiRanchesMP_CGI07_04-3-320x415.jpg"
                  alt="Arabian Ranches III | Luxury Villas for Sale in Dubai"
                  title="Arabian Ranches III | Luxury Villas for Sale in Dubai"
                  width="440"
                  height="615"
                  src="https://cdn.properties.emaar.com/wp-content/uploads/2020/03/EMAAR_DubaiRanchesMP_CGI07_04-3-320x415.jpg"
                />
              </a>
              <h3 className="mt-4 mb-2">
                <a >
                  Arabian Ranches III
                </a>
              </h3>
              <span className="community-tagline">Find your happy place</span>
              <span className="bhk-number">3-4 bedrooms Villas &amp; Townhouses</span>
            </div>

            <div className="col-12 col-md-3 communities-featured-block">
              <a >
                <img
                  className="som"
                  data-src="https://cdn.properties.emaar.com/wp-content/uploads/2020/05/DUBAI_MARINA_COMMUNITY-320x415.jpg"
                  alt="Dubai Marina Community by Emaar Properties"
                  title="Dubai Marina Community by Emaar Properties"
                  width="440"
                  height="615"
                  src="https://cdn.properties.emaar.com/wp-content/uploads/2020/05/DUBAI_MARINA_COMMUNITY-320x415.jpg"
                />
              </a>
              <h3 className="mt-4 mb-2">
                <a href="https://properties.emaar.com/en/our-communities/dubai-marina/">
                  Dubai Marina
                </a>
              </h3>
              <span className="community-tagline">A pioneering waterfront project</span>
              <span className="bhk-number">1-3 bedrooms Apartments</span>
            </div>

            <div className="col-12 col-md-3 communities-featured-block">
              <a >
                <img
                  className="som"
                  data-src="https://cdn.properties.emaar.com/wp-content/uploads/2020/04/DHE_COMMUNITY_HERO-resize-320x415.jpeg"
                  alt="Dubai Hills Estate Golf Course"
                  title="Dubai Hills Estate Golf Course"
                  width="440"
                  height="615"
                  src="https://cdn.properties.emaar.com/wp-content/uploads/2020/04/DHE_COMMUNITY_HERO-resize-320x415.jpeg"
                />
              </a>
              <h3 className="mt-4 mb-2">
                <a >
                  Dubai Hills Estate
                </a>
              </h3>
              <span className="community-tagline">The Green Heart of Dubai</span>
              <span className="bhk-number">
                3 to 6 Bedroom Apartments, Villas &amp; Townhouses
              </span>
            </div>

          </div>
        </div>
      </div>
       <style jsx>{`
.som{
    border-radius: 5px;
    max-height:50%;}
            `}</style>
    </div>
  );
};

export default NearbyCommunities;
