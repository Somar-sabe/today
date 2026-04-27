import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { productSlug } from "@/lib/product";
import Link from "next/link";
import HeaderTopBarOne from "./headerTopBar/headerTopBarStyleOne";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";
import { FaCartArrowDown, FaRegUser, FaSearch, FaTimes } from "react-icons/fa";
import MenuList from "@/components/header/elements/menuList";
import Image from 'next/image';

const HeaderSix = function ({ SetToggleClassName, topbar }) {
  useEffect(() => {
    const newBtn = document.getElementById("registerScrollBtn");
    if (newBtn) {
      newBtn.addEventListener("click", () => {
        const contactSection = document.getElementById("contact-form");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Optional cleanup
    return () => {
      if (newBtn) {
        newBtn.removeEventListener("click", () => {});
      }
    };
  }, []);
  
  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }; // <-- this was missing
  
  const [searchFormOpener, searchFormOpenerSet] = useState(false);

  const [cartMenuOpener, cartMenuOpenerSet] = useState(false);
  const [overlayBtn, SetoverlayBtn] = useState(false);
  const [offCanVastoggleBtn, SetOffCanVastoggleBtn] = useState(false);

  function offcanVasToggler() {
    SetToggleClassName(true);
    SetoverlayBtn(true);
    SetOffCanVastoggleBtn((offCanVastoggleBtn) => !offCanVastoggleBtn);
  }

  function searchForm() {
    searchFormOpenerSet((searchFormOpener) => !searchFormOpener);
  }

  function cartMenu() {
    SetoverlayBtn(true);
    cartMenuOpenerSet((cartMenuOpener) => !cartMenuOpener);
    SetToggleClassName(false);
  }

  function closeSideBar() {
    SetoverlayBtn(false);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
  }

  function overlay() {
    SetoverlayBtn((overlayBtn) => !overlayBtn);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
    SetToggleClassName(false);
  }

  const { cartItems } = useSelector((state) => state.cart);

  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector(".ltn__header-sticky");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const { products } = useSelector((state) => state.product);
  const [currentItems, setCurrentItems] = useState([]);

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const updatedProducts = query.length ? SearchProduct(products) : [];

  // useEffect(() => {
  //   setCurrentItems(updatedProducts);
  // }, [products, query]);

  return (
    <>
      <header className="ltn__header-area ltn__header-5">
        {/* <!-- ltn__header-top-area start --> */}
        {/* {topbar ? <HeaderTopBarOne /> : null} */}

        {/* <!-- ltn__header-top-area end --> */}

        {/* <!-- ltn__header-middle-area start --> */}
        <div
          className={clsx(
            "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white",
            scroll > headerHeight && "sticky-active"
          )}
        >
          <Container>
            <Row>
              <Col>
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link href="#">
                      <Image  src="/img/logo.png" alt="Logo" width={148} height={45}/>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'end'}}>
                <div className="header-menu d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                    <button id="registerScrollBtn" className="scroll-top register-btn" onClick={scrollToContactForm}>
        Call Me Back
      </button>
                    </div>
                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- ltn__header-middle-area end --> */}
      </header>

      {/* <!-- Utilize Cart Menu Start --> */}

      <HeaderCartMenu
        cartMenu={cartMenu}
        cartMenuOpener={cartMenuOpener}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Cart Menu End --> */}

      {/* <!-- Utilize Mobile Menu Start --> */}
      <MobileMenu
        offCanVastoggleBtn={offCanVastoggleBtn}
        offcanVasToggler={offcanVasToggler}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Mobile Menu End --> */}
      <div
        className="ltn__utilize-overlay"
        style={{
          display: overlayBtn ? "block" : "none",
          opacity: overlayBtn ? "1" : "0",
        }}
        onClick={overlay}
      ></div>
       <style jsx>{`
        .register-btn {
            display: flex
;
    align-items: center;
          padding: 12px 24px;
          font-size: 16px;
          background-color: #bc986b;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .register-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
};

export default HeaderSix;
