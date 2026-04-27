import React from "react";

const PropertiesForSale = () => {
      const scrollToContactForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("contact-form"); // make sure this matches your section id
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <style>
        {`
        .properties-wrapper {
          padding: 20px 20px;
          max-width: 1300px;
          margin: auto;
        }

        .breadcrumb {
          display: inline-block;
          padding: 6px 14px;
          background: #f4f4f4;
          border-radius: 6px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .title {
          font-size: 48px;
          font-weight: 700;
          margin: 0 0 15px 0;
          line-height: 1.2;
        }

        .subtitle {
          max-width: 460px;
          margin-top: 10px;
          color: #444;
          line-height: 1.6;
          font-size: 16px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 50px;
        }

        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e7e7e7;
        }

        .card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .card-content {
          padding: 25px;
          border-top: 1px solid #eee;
        }

        .card-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .card-list {
          padding-left: 0;
          list-style: none;
          margin-bottom: 25px;
        }

        .card-list li {
          margin-bottom: 8px;
          font-size: 15px;
        }

        .learn-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border: 1px solid #c8c8c8;
          border-radius: 10px;
          text-decoration: none;
          color: black;
          font-weight: 500;
          transition: 0.2s;
        }

        .learn-btn:hover {
          background: #f5f5f5;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 32px;
          }
        }
        `}
      </style>

      <div className="properties-wrapper">
        <div className="breadcrumb">Emaar The Oasis Projects</div>

        <h1 className="title">
          The Oasis by Emaar <br /> Properties for Sale
        </h1>

        <p className="subtitle">
          Discover Emaar The Oasis latest projects – a collection of signature
          villas and mansions redefining luxury in one of Dubai’s most
          desirable waterfront destinations.
        </p>

        <div className="cards-grid">
          {/* Card 1 */}
          <div className="card">
            <img src="/assets/images/p1.jpg" alt="Ostra Palace" />

            <div className="card-content">
              <h3 className="card-title">
                Ostra Palace Villas at Emaar Oasis
              </h3>

              <ul className="card-list">
                <li>✔ 4, 5 & 6–BR Branded Villas</li>
                <li>✔ Starting From AED 13.1M</li>
                <li>✔ Q3 2029 Handover</li>
              </ul>

              <a onClick={scrollToContactForm} className="learn-btn" href="#">
                Learn More <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src="/assets/images/p2.jpg" alt="Address Villas Tierra" />

            <div className="card-content">
              <h3 className="card-title">
                Address Villas Tierra at Emaar Oasis
              </h3>

              <ul className="card-list">
                <li>✔ 4, 5 and 6–BR Waterfront Villas</li>
                <li>✔ Starting From AED 13.16M</li>
                <li>✔ Q2 2029 Handover</li>
              </ul>

              <a onClick={scrollToContactForm} className="learn-btn" href="#">
                Learn More <span>→</span>
              </a>
            </div>
          </div>

          <div className="card">
            <img src="/assets/images/p3.jpg" alt="Lavita at The Oasis" />

            <div className="card-content">
              <h3 className="card-title">
                Lavita at The Oasis by Emaar
              </h3>

              <ul className="card-list">
                <li>✔ Luxury 6–7BR Mansions in The Oasis</li>
                <li>✔ Starting From AED 36M</li>
                <li>✔ Q4 2028 Handover</li>
              </ul>

              <a onClick={scrollToContactForm} className="learn-btn" href="#">
                Learn More <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src="/assets/images/p4.jpg" alt="Address Villas Tierra" />

            <div className="card-content">
              <h3 className="card-title">
                Mirage The Oasis by Emaar
              </h3>

              <ul className="card-list">
                <li>✔ Luxury 5-6BR Villas & Mansions</li>
                <li>✔ Starting From AED 15.8M</li>
                <li>✔ Q2 2028 Handover</li>
              </ul>

              <a onClick={scrollToContactForm} className="learn-btn" href="#">
                Learn More <span>→</span>
              </a>
            </div>
          </div>

                    <div className="card">
            <img src="/assets/images/p5.jpg" alt="Address Villas Tierra" />

            <div className="card-content">
              <h3 className="card-title">
                Palmiera 2 At The Oasis By Emaar
              </h3>

              <ul className="card-list">
                <li>✔ Exclusive 4-Bedroom Villas</li>
                <li>✔ Starting From AED 9.18M</li>
                <li>✔ Q2 2028 Handover</li>
              </ul>

              <a onClick={scrollToContactForm} className="learn-btn" href="#">
                Learn More <span>→</span>
              </a>
            </div>
          </div>


          
                    <div className="card">
            <img src="/assets/images/p6.jpg" alt="Address Villas Tierra" />

            <div className="card-content">
              <h3 className="card-title">
                Palmiera 3 At The Oasis By Emaar
              </h3>

              <ul className="card-list">
                <li>✔ Limited Collection of 4-BR Villas</li>
                <li>✔ Starting From AED 9.18M</li>
                <li>✔ Q4 2028 Handover</li>
              </ul>

              <a onClick={scrollToContactForm} className="learn-btn" href="#">
                Learn More <span>→</span>
              </a>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default PropertiesForSale;
