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
import ContactFormIr from "../contactFormIr/contactFormIr";

function AboutUsStyleOneIr({ sectionSpace }) {
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
      <div style={{ paddingTop: 0 }} className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className='align-self-center order-1 order-lg-2'>
              <div className='about-us-info-wrap' dir="rtl">
                <div className='section-title-area mb-20'>
                  <h6 className='section-subtitle section-subtitle-2 ltn__secondary-color'>
                    املاک
                  </h6>

                  <h1 className='section-title'>
                    نمای کلی<span>.</span>
                  </h1>

                  <p>
                    جمیرا رزیدنسز در برج‌های امارات واقع در مرکز تجارت در خیابان شیخ زاید، دنیایی نمادین از آپارتمان‌های لوکس و خدماتی با ۱ تا ۴ اتاق خواب است که توسط شرکت مراس در دبی ارائه شده است.
                    <br /><br />
                    این برج‌های بلند با طراحی خلاقانه برای تعریف مجدد سبک زندگی روزمره با مهمان‌نوازی بی‌نظیر و تجربیاتی فوق‌العاده در فضاهایی با طراحی دقیق و امکانات در سطح جهانی ساخته شده‌اند.
                  </p>
                </div>

                <ul className='ltn__list-item-half clearfix'>
                  <li>
                    ۳.۵۱ میلیون درهم
                    <br />
                    قیمت شروع
                  </li>

                  <li>
                    ۲۰۳۰<br />
                    زمان تحویل
                  </li>
                </ul>

                <div className={`btn-wrapper animated ${showModal ? "hidden" : ""}`}>
                  <button style={{
                    backgroundColor: "#bc986b",
                    textAlign: "center",
                    borderRadius: "6px",
                    fontSize: "22px",
                    lineHeight: "45px",
                    bottom: "77px",
                    color: "#fff",
                    padding: "12px 24px",
                    display: "flex",
                    alignItems: "center"
                  }}
                    id="registerScrollBtn"
                    className="scroll-top register-btn"
                    onClick={scrollToContactForm}
                  >
                    ثبت علاقه‌مندی
                  </button>
                </div>

                <Modal
                  isOpen={showModal}
                  className='formStyleModal'
                  onRequestClose={() => setShowModal(false)}
                  ariaHideApp={false}
                >
                  <div className="formWrapper" dir="rtl">
                    <button className='closeButton' onClick={() => setShowModal(false)}>
                      X
                    </button>
                    <h2 className="formTitle">دانلود بروشور</h2>
                    <ContactFormIr />
                  </div>
                </Modal>

              </div>
            </Col>

            <Col style={{ paddingTop: 40 }} xs={12} lg={6} className='align-self-start order-2 order-lg-1'>
              <div className='about-us-img-wrap about-img-left'>
                <Image
                  src='/img/product-3/harbour-feat.jpg'
                  alt='درباره ما'
                  width={800}
                  height={800}
                />
                <div className='about-us-img-info about-us-img-info-2 about-us-img-info-3'>
                  <div className='ltn__video-img ltn__animation-pulse1'>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOneIr;
