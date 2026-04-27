import React from "react";
 import Head from "next/head";

const PaymentPlansSection = () => {
  const plans = [
    { type: "4-Bedroom", description: "Residences" },
    { type: "5-Bedroom", description: "Residences" },
  ];

  return (
    <section id="paymentplans" className="wow">
                      <Head>
                        <link rel="stylesheet" href="/assets/css/kh.css" />
                      </Head>
      <div className="container">
        <div className="section-head">
          <span>Payment Plan</span>
          <h2>Damac Islands Payment Plan</h2>
        </div>

        <div className="payment-plan-grid">
          {plans.map((plan, index) => (
            <div className="paymentplan-grid-item" key={index}>
              <div className="paymentplan-grid-item-wrap">
                <div>
                  <a
                    href="#brochurePopup"
                    className="popup-with-form2 dynamic-text-btn pdf-icon"
                    data-project="project1"
                    data-title="Download Payment Plan for Free"
                  >
                    <img
                      src="assets/images/pdf-icon.svg"
                      loading="lazy"
                      alt="pdf Icon"
                    />
                  </a>
                  <a
                    href="#brochurePopup"
                    className="popup-with-form2 dynamic-text-btn"
                    data-project="project1"
                    data-title="Download Payment Plan for Free"
                  >
                    <p>
                      <strong>{plan.type}</strong> {plan.description}
                    </p>
                  </a>
                </div>

                <div className="call-to-action-btns">
                  <div>
                    <a
                      href="#brochurePopup"
                      className="black-bg register-btn popup-with-form2 dynamic-text-btn"
                      data-project="project1"
                      data-title="Download Payment Plan for Free"
                    >
                      Download Payment Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentPlansSection;
