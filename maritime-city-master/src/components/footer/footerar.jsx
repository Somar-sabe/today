import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const FooterAr = function () {
  return (
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area">
        <div className="footer-top-area section-bg-2 plr--5" >
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      {/* <img src="/img/logo.png" alt="Logo" /> */}
                      <Image src="/img/logo.png" alt="الشعار" width={148} height={45} />
                    </div>
                  </div>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing.
                  </p> */}
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>دبي، الإمارات العربية المتحدة</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+97145798350">+971 45-798-350</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaEnvelope />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="mailto:info@altairre.ae">
                              info@altairre.ae
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <Link href="https://www.facebook.com/altairre.ae/" title="فيسبوك">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/altair.realestate/" title="تويتر">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://ae.linkedin.com/company/altair-re" title="لينكد إن">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.tiktok.com/@altair.realestate?_t=8iVDTnouo9F&_r=1" title="يوتيوب">
                          <FaTiktok />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">الشركة</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="https://altairre.ae/ar/about-company">من نحن</Link>
                      </li>
                      <li>
                        <Link href="https://altairre.ae/ar/off-plan">العقارات</Link>
                      </li>
                      <li>
                        <Link href="https://altairre.ae/ar/news">الأخبار</Link>
                      </li>
                      <li>
                        <Link href="https://altairre.ae/ar/contact">اتصل بنا</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">النشرة الإخبارية</h4>
                  <p>
                    اشترك في نشرتنا الإخبارية الأسبوعية واستلم التحديثات عبر
                    البريد الإلكتروني.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="البريد الإلكتروني*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          {" "}
                          <FaPaperPlane />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5" >
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix">
                  <p>
                    جميع الحقوق محفوظة لـ EVO Labs{" "}
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>
                    <li>
                      <Link href="https://altairre.ae/ar/privacy-policy">الشروط والأحكام</Link>
                    </li>
                    <li>
                      <Link href="https://altairre.ae/ar/faq">الاسئلة الشائعة</Link>
                    </li>
                    <li>
                      <Link href="https://altairre.ae/ar/privacy-policy">سياسة الخصوصية</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default FooterAr;
