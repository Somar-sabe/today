import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const HeaderStyleOne = function ({ SetToggleClassName, topbar }) {
  const [cartMenuOpener, cartMenuOpenerSet] = useState(false);
  const [overlayBtn, SetoverlayBtn] = useState(false);
  const [offCanVastoggleBtn, SetOffCanVastoggleBtn] = useState(false);

  function offcanVasToggler() {
    SetToggleClassName(true);
    SetoverlayBtn(true);
    SetOffCanVastoggleBtn((prev) => !prev);
  }

  function cartMenu() {
    SetoverlayBtn(true);
    cartMenuOpenerSet((prev) => !prev);
    SetToggleClassName(false);
  }

  function closeSideBar() {
    SetoverlayBtn(false);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
  }

  function overlay() {
    SetoverlayBtn((prev) => !prev);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
    SetToggleClassName(false);
  }

  const { cartItems } = useSelector((state) => state.cart);

  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef(null);

  useEffect(() => {
    const headerEl = headerRef.current;
    if (headerEl) setHeaderHeight(headerEl.offsetHeight);

    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const newBtn = document.getElementById("registerScrollBtn");
    const handler = () => {
      const contactSection = document.getElementById("contact-form");
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    };

    if (newBtn) newBtn.addEventListener("click", handler);

    return () => {
      if (newBtn) newBtn.removeEventListener("click", handler);
    };
  }, []);

  return (
    <>
      <header className="ltn__header-area ltn__header-5">
        <div
          ref={headerRef}
          className={clsx(
            "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white",
            scroll > headerHeight && "sticky-active"
          )}
        >
          <Container>
            <Row className="align-items-center">
              {/* LOGO */}
              <Col xs={6} md={4}>
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link href="/" aria-label="Go to homepage" className="logoLink">
<span className="logoBox">
  <Image
    src="/img/logo.png"
    alt="Logo"
    fill
    priority
    sizes="(max-width: 420px) 120px, (max-width: 768px) 140px, 170px"
    style={{ objectFit: "contain" }}
  />
</span>

                    </Link>
                  </div>
                </div>
              </Col>

              {/* ACTIONS */}
              <Col xs={6} md={8} className="d-flex justify-content-end">
                <div className="header-contact-actions">
                  <a href="tel:+971586232132" className="contact-btn phone-btn">
                    <span className="btnIcon" aria-hidden="true">
                      <FaPhoneAlt />
                    </span>

                    <span className="btnText">
                      <span className="btnTop">Call us</span>
                      <span className="btnSub">+971 58 623 2132</span>
                    </span>
                  </a>

                  <a
                    href="https://wa.me/971586232132"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn whatsapp-btn"
                  >
                    <span className="btnIcon" aria-hidden="true">
                      <FaWhatsapp />
                    </span>

                    <span className="btnText">
                      <span className="btnTop">WhatsApp</span>
                      <span className="btnSub">Chat now</span>
                    </span>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <HeaderCartMenu
        cartMenu={cartMenu}
        cartMenuOpener={cartMenuOpener}
        closeSideBar={closeSideBar}
      />

      <MobileMenu
        offCanVastoggleBtn={offCanVastoggleBtn}
        offcanVasToggler={offcanVasToggler}
        closeSideBar={closeSideBar}
      />

      <div
        className="ltn__utilize-overlay"
        style={{
          display: overlayBtn ? "block" : "none",
          opacity: overlayBtn ? "1" : "0",
        }}
        onClick={overlay}
      />

      <style jsx>{`
        .logoLink {
          display: inline-flex;
          align-items: center;
        }

        /* ===== LUXURY ACTIONS ===== */
        .header-contact-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .contact-btn {
          position: relative;
          height: 46px;
          padding: 0 14px 0 12px;
          border-radius: 16px;

          display: inline-flex;
          align-items: center;
          gap: 10px;

          text-decoration: none;
          white-space: nowrap;

          /* luxury glass */
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.92),
            rgba(255, 255, 255, 0.78)
          );
          border: 1px solid rgba(15, 23, 42, 0.10);
          box-shadow: 0 18px 50px rgba(2, 6, 23, 0.10);
          backdrop-filter: blur(10px);

          transition: transform 0.16s ease, box-shadow 0.16s ease,
            border-color 0.16s ease, background 0.16s ease;
        }

        /* subtle gold hairline */
        .contact-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(201, 169, 110, 0.55),
            rgba(255, 255, 255, 0),
            rgba(15, 23, 42, 0.12)
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.9;
        }

        .contact-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 26px 70px rgba(2, 6, 23, 0.14);
          border-color: rgba(201, 169, 110, 0.25);
        }

        .btnIcon {
          width: 34px;
          height: 34px;
          border-radius: 12px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          background: rgba(15, 23, 42, 0.06);
          border: 1px solid rgba(15, 23, 42, 0.08);

          color: rgba(11, 18, 32, 0.88);
          flex: 0 0 auto;
        }

        .btnText {
          display: grid;
          line-height: 1.05;
        }

        .btnTop {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(11, 18, 32, 0.86);
        }

        .btnSub {
          margin-top: 3px;
          font-size: 13px;
          font-weight: 800;
          color: rgba(11, 18, 32, 0.72);
        }

        /* WhatsApp special: elegant green accent (not ugly solid) */
        .whatsapp-btn .btnIcon {
          background: rgba(34, 197, 94, 0.12);
          border-color: rgba(34, 197, 94, 0.18);
          color: rgba(34, 197, 94, 0.95);
        }

        .whatsapp-btn:hover {
          border-color: rgba(34, 197, 94, 0.22);
        }

        /* ===== Mobile ===== */
        @media (max-width: 768px) {
          .header-contact-actions {
            gap: 8px;
          }

          .contact-btn {
            height: 38px;
            padding: 0 10px;
            border-radius: 14px;
            gap: 8px;
          }

          .btnIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
          }

          /* ✅ make buttons compact + beautiful */
          .btnSub {
            display: none; /* hide phone number + "chat now" to avoid overflow */
          }

          .btnTop {
            font-size: 11px;
            letter-spacing: 0.12em;
          }
        }

        @media (max-width: 720px) {
          /* super small: hide text, icons only */
          .btnText {
            display: none;
          }

          .contact-btn {
            padding: 0 10px;
          }
        }
          .logoLink{
  display: inline-flex;
  align-items: center;
}

/* ✅ responsive logo box */
.logoBox{
  position: relative;
  width: 170px;   /* desktop */
  height: 46px;   /* keep header height clean */
  display: inline-block;
}

/* mobile sizes */
@media (max-width: 768px){
  .logoBox{
    width: 140px;
    height: 40px;
  }
}

@media (max-width: 420px){
  .logoBox{
    width: 120px;
    height: 36px;
  }
}

      `}</style>
    </>
  );
};

export default HeaderStyleOne;
