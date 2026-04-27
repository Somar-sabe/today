
import path from "path";
import fs from "fs/promises";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import Interest from "@/components/intrest/intrest";
import ContactForm from "@/components/contactForm/contactForm";
import featuresData from "@/data/service";
import ScrollToContact from "@/components/scroll-to-top";
import DubaiGreenHeartHero from "@/components/bararione";
import SanctuarySection from "@/components/bararitow";
import WorldClassAmenities from "@/components/bara"; 
import UnitsAndPricing from "@/components/bre";
import SecureUnitCallback from "@/components/bro";
import InvestmentCalculatorSection from "@/components/bks";
import ContactPopup from "../../components/ContactPopup";
import Lead from "@/components/contactnew/LeadFormCard";

function MaritimeCity(props) {
  const [openPopup, setOpenPopup] = useState(false);
  const { products } = useSelector((state) => state.product);
  const featuredProducts = getProducts(products, "buying", "featured", 5);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const { Herodata } = props;

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const productCarouselsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  return (
    <>
      <LayoutOne topbar={true}>
      <ContactPopup isOpen={openPopup} onClose={() => setOpenPopup(false)} />
      <DubaiGreenHeartHero openPopup={() => setOpenPopup(true)}  />
      <SanctuarySection />
      <WorldClassAmenities />
      <UnitsAndPricing openPopup={() => setOpenPopup(true)} />
      <SecureUnitCallback />
      <InvestmentCalculatorSection />
        <div className="responsive-container">
            <Interest />
            <Lead />
        </div>
      <ScrollToContact/>
   

        <style jsx>{`
  .responsive-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .responsive-container {
      flex-direction: column;
      align-items: center;
    }
  }
`}</style>

      </LayoutOne>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
  const Herodata = JSON.parse(await fs.readFile(filePath));

  return {
    props: {
      Herodata,
    },
  };
}

export default MaritimeCity;
