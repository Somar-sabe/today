import React from "react";

const FaqSection = () => {
  return (
    <div data-wpr-lazyrender="1" className="jumbotron pt-0">
      <div className="container">
        <div className="seo-faqs mb-0">
          <h2>FAQs</h2>

          <div id="seo-faq-accordion" className="pt-lg-3">

            {/* FAQ 1 */}
            <div className="card">
              <div className="card-header" id="heading0">
                <h4 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapse0"
                    aria-expanded="true"
                    aria-controls="collapse0"
                  >
                    What are the key highlights of The Oasis By Emaar?
                  </button>
                </h4>
              </div>

              <div
                id="collapse0"
                className="collapse show"
                aria-labelledby="heading0"
                data-parent="#seo-faq-accordion"
              >
                <div className="card-body">
                  <p>
                    The key highlights include stunningly designed villas, gated community for
                    tranquillity, prime location with seamless connectivity, vibrant community
                    engagement, meticulously crafted water bodies including lagoons, and
                    exceptional amenities.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="card">
              <div className="card-header" id="heading1">
                <h4 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                  >
                    What types of properties are available at The Oasis?
                  </button>
                </h4>
              </div>

              <div
                id="collapse1"
                className="collapse"
                aria-labelledby="heading1"
                data-parent="#seo-faq-accordion"
              >
                <div className="card-body">
                  <p>
                    The Oasis is a unique residential development that offers spacious villas,
                    townhouses, luxurious mansions and super-mansions with 4 &amp; 5 bedrooms,
                    ranging from 7,940 to 8,260 square feet, designed to redefine luxury living.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="card">
              <div className="card-header" id="heading2">
                <h4 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    What amenities are available for residents at The Oasis?
                  </button>
                </h4>
              </div>

              <div
                id="collapse2"
                className="collapse"
                aria-labelledby="heading2"
                data-parent="#seo-faq-accordion"
              >
                <div className="card-body">
                  <p>
                    1. <strong>Community Parks:</strong> Enjoy beautifully landscaped parks within the
                    community, providing residents with serene spaces.<br />
                    2. <strong>Jogging Track:</strong> Stay active with dedicated jogging tracks.<br />
                    3. <strong>Local Mosques:</strong> Convenient access to mosques.<br />
                    4. <strong>Beaches:</strong> Access to pristine beaches.<br />
                    5. <strong>Central Location:</strong> Easy access to key destinations.<br />
                    6. <strong>World Class Health Facilities:</strong> Access to medical care.<br />
                    7. <strong>54 km Bicycle Route:</strong> Dedicated for cycling enthusiasts.<br />
                    8. <strong>Ample Parking:</strong> Plenty of parking spaces.<br />
                    9. <strong>Sporting Facilities:</strong> Wide range of sports options.<br />
                    10. <strong>100 Million Sq Ft Development:</strong> Vast community area.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="card">
              <div className="card-header" id="heading3">
                <h4 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    Where is The Oasis located?
                  </button>
                </h4>
              </div>

              <div
                id="collapse3"
                className="collapse"
                aria-labelledby="heading3"
                data-parent="#seo-faq-accordion"
              >
                <div className="card-body">
                  <p>
                    The Oasis is strategically located with access to Burj Khalifa, Downtown Dubai,
                    Dubai International Airport, Sheikh Zayed Road, and The Dubai Mall.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="card">
              <div className="card-header" id="heading4">
                <h4 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    Are there any schools near The Oasis by Emaar?
                  </button>
                </h4>
              </div>

              <div
                id="collapse4"
                className="collapse"
                aria-labelledby="heading4"
                data-parent="#seo-faq-accordion"
              >
                <div className="card-body">
                  <p>
                    Yes, The Oasis is conveniently located near reputable schools and educational
                    institutions, providing families with excellent options.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="card">
              <div className="card-header" id="heading5">
                <h4 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    How is the connectivity of The Oasis to major transportation routes?
                  </button>
                </h4>
              </div>

              <div
                id="collapse5"
                className="collapse"
                aria-labelledby="heading5"
                data-parent="#seo-faq-accordion"
              >
                <div className="card-body">
                  <p>
                    The Oasis enjoys excellent connectivity to Sheikh Zayed bin Hamdan Road (D54)
                    and the future extension of Al Khail Road (E44).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
