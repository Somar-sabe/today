import Link from "next/link";
import {
  FaRegUser,
  FaRegHeart,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";

import {
  getSiblings,
  getClosest,
  slideUp,
  slideDown,
  slideToggle,
} from "@/lib/product";
import { useSelector } from "react-redux";

const MobileMenu = function ({ offCanVastoggleBtn, closeSideBar }) {
  const { cartItems } = useSelector((state) => state.cart);

  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    parentEl.classList.toggle("active");
    if (
      parentEl?.classList.contains("menu-expand") ||
      target.classList.contains("menu-expand")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        sibling.classList.remove("active");
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };

  return (
    <>
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu   ${
          offCanVastoggleBtn ? "ltn__utilize-open" : ""
        }`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link href="#">
                <Image  src="/img/logo.png" alt="Logo"  width={148} height={45}/>
              </Link>
            </div>
            <button onClick={closeSideBar} className="ltn__utilize-close">
              ×
            </button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link href="#">Home</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/home">Home Style 01</Link>
                  </li>
                  <li>
                    <Link href="/home/page-two">Home Style 02</Link>
                  </li>
                  <li>
                    <Link href="/home/page-three">Home Style 03</Link>
                  </li>
                  <li>
                    <Link href="/home/page-four">Home Style 04</Link>
                  </li>
                  <li>
                    <Link href="/home/page-five">Home Style 05</Link>
                  </li>
                  <li>
                    <Link href="/home/page-six">Home Style 06</Link>
                  </li>
                  <li>
                    <Link href="/home/page-seven">Home Style 07</Link>
                  </li>
                  <li>
                    <Link href="/home/page-eight">Home Style 08</Link>
                  </li>
                  <li>
                    <Link href="/home/page-nine">Home Style 09</Link>
                  </li>
                  <li>
                    <Link href="/home/page-ten">Home Style 10</Link>
                  </li>
                  <li>
                    <Link href="/home/page-eleven">Home Style 11</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Property</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="#">Property</Link>
                  </li>
                  <li>
                    <Link href="#">Property Grid</Link>
                  </li>
                  <li>
                    <Link href="#">Property List</Link>
                  </li>
                  <li>
                    <Link href="#">Property Left sidebar</Link>
                  </li>
                  <li>
                    <Link href="#">
                      Property right sidebar
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="#">Cart</Link>
                  </li>
                  <li>
                    <Link href="#">Wishlist</Link>
                  </li>
                  <li>
                    <Link href="#">Checkout</Link>
                  </li>
                  <li>
                    <Link href="#">Order Tracking</Link>
                  </li>
                  <li>
                    <Link href="#">My Account</Link>
                  </li>
                  <li>
                    <Link href="#">Sign in</Link>
                  </li>
                  <li>
                    <Link href="#">Register</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">News</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="#">News</Link>
                  </li>
                  <li>
                    <Link href="#">News Grid</Link>
                  </li>
                  <li>
                    <Link href="#">News Left sidebar</Link>
                  </li>
                  <li>
                    <Link href="#">News Right sidebar</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Pages</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>

                  <li>
                    <Link href="#">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="#">Portfolio - 02</Link>
                  </li>

                  <li>
                    <Link href="#">Team</Link>
                  </li>

                  <li>
                    <Link href="#">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#">History</Link>
                  </li>
                  {/* <li>
                    <Link href="/add-listing">Add Listing</Link>
                  </li> */}
                  <li>
                    <Link href="#">Google Map Locations</Link>
                  </li>
                  <li>
                    <Link href="#">404</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                  <li>
                    <Link href="#">Coming Soon</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <Link href="#" title="My Account">
                  <span className="utilize-btn-icon">
                    <FaRegUser />
                  </span>
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" title="Wishlist">
                  <span className="utilize-btn-icon">
                    <FaRegHeart />
                    {cartItems.length > 0 ? (
                      <sup>{cartItems.length}</sup>
                    ) : (
                      <sup>0</sup>
                    )}
                  </span>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" title="Shoping Cart">
                  <span className="utilize-btn-icon">
                    <FaShoppingCart />
                    {cartItems.length > 0 ? (
                      <sup>{cartItems.length}</sup>
                    ) : (
                      <sup>0</sup>
                    )}
                  </span>
                  Shoping Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
