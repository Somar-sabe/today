import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ContactForm from "../contactForm/contactForm";

function AboutUsStyleOne({ sectionSpace }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const scrollToContactForm = () => {
    const formSection = document.getElementById('contactFormSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <>
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className='align-self-start'>
              <div className='about-us-img-wrap about-img-left'>
                <Image
                  src='/img/product-3/harbour-feat.jpg'
                  alt='About Us Image'
                  width={800}
                  height={800}
                />
                <div className='about-us-img-info about-us-img-info-2 about-us-img-info-3'>
                  <div className='ltn__video-img ltn__animation-pulse1'>
                    {/* <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button> */}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className='align-self-center'>
              <div className='about-us-info-wrap'>
                <div className='section-title-area mb-20'>
                  <h6 className='section-subtitle section-subtitle-2 ltn__secondary-color'>
                    Property
                  </h6>
                  {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Payment Plan
                  </h6>
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Master Plan
                  </h6> */}

<h1 className='section-title'>
  Damac unveils luxury development in Dubai Maritime City<span>.</span>
</h1>
<p>
Damac presents Seacrest, a new development at Dubai Maritime City, offering luxury 1 - 3 bed apartments with waterfront views and premium amenities at best price. The meaning of ‘Seacrest’ is a coastal area where waves break. Here, you’ll not only enjoy sea and wave views but also the peaceful and convenient lifestyle that Dubai offers.

This residential development is crafted within a most desirable community ‘Dubai Maritime City”, setting a new standard for high-end architecture design and family friendly living. These luxury apartments are decorated with modern fittings & fixtures, branded interior design and floor to ceiling windows for maximum views & privacy, from outside you will get a wide range of amenities & features with the best security system. The master plan of this development facilitates tranquil living with maximum convenience.</p>

                </div>
                <ul className='ltn__list-item-half clearfix'>
                  <li>
                    AED 2.16M
                    <br />
                    Starting price
                  </li>

                  <li>
                    2030 <br />
                    Handover
                  </li>
                </ul>
                {/* <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    Enimad minim veniam quis nostrud exercitation <br />
                    llamco laboris. Lorem ipsum dolor sit amet
                  </p>
                </div> */}
                {/* <div className="btn-wrapper animated">
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    DOWNLOAD BROCHURE
                  </button>
                  <Modal isOpen={showModal} style="formStyleModal"  onRequestClose={() => setShowModal(false)}>
                    <button onClick={() => setShowModal(false)}>X</button>
                    <form className="contactForm">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" />

                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" />

                      <label htmlFor="phone">Phone:</label>
                      <input type="tel" id="phone" name="phone" />

                      <div className="btn-wrapper animated">
                        <button
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </Modal>
                </div> */}
                {/* ---- */}
                {/* <div
                  className={`btn-wrapper animated ${showModal ? "hidden" : ""
                    }`}
                >
                  <button
                    onClick={() => setShowModal(true)}
                    className='downloadBtn'
                  >
                    Download Brochure
                  </button>
                </div>
                <Modal
                  isOpen={showModal}
                  className='formStyleModal'
                  onRequestClose={() => setShowModal(false)}
                  ariaHideApp={false}
                > 
                <button
                    className='closeButton'
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                <ContactForm/>
                </Modal> */}
                <div  className={`btn-wrapper animated ${showModal ? "hidden" : ""}`}>
                    <button style={{ backgroundColor: "#bc986b", textAlign: "center", borderRadius: "6px", fontSize: "22px", lineHeight: "45px", bottom: "77px", color: "#fff", padding: "12px 24px",display:"flex",alignItems:"center" }}
 id="registerScrollBtn" className="scroll-top register-btn" onClick={scrollToContactForm}>
        Register
      </button>
                </div>
                <Modal
                  isOpen={showModal}
                  className='formStyleModal'
                  onRequestClose={() => setShowModal(false)}
                  ariaHideApp={false}
                >
                  <div className="formWrapper">
                    <button className='closeButton' onClick={() => setShowModal(false)}>
                      X
                    </button>
                    <h2 className="formTitle">Download Brochure</h2>
                    <ContactForm />
                  </div>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default AboutUsStyleOne;
