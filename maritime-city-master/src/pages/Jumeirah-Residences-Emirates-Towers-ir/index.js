import path from "path";
import fs from "fs/promises";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutTwo } from "@/layouts";
import HeroSectionStyleOnear from "@/components/hero/threeStyle";
import HeroSectionStyleFiveFa from "@/components/hero/stylefiveir";
import Interestar from "@/components/intrest/intrestar";
import AboutUsStyleOneFa from "@/components/aboutUs/aboutusgallir";
import ContactFormIr from "@/components/contactFormJltIr/contactFormjltIr";
import CounterUpar from "@/components/counterUpIr";
import featuresData from "@/data/service";
import Gallery from "@/components/gallery/galleryjlt";
import ScrollToContact from "@/components/scroll-to-top-ar";
import PropertyDetailsInfo from "@/components/detail/detailir";

function MaritimeCityAr(props) {
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
      <LayoutTwo topbar={true}>
        <HeroSectionStyleOnear data={Herodata} />
        <div style={{ marginTop: 40, marginBottom: 80 }}>
        <div className="cfor">
        <ContactFormIr />
        </div>
  <PropertyDetailsInfo />
</div>
<AboutUsStyleOneFa sectionSpace="pt-120 pb-90" />
        <serviceItemThree/>
    
        <HeroSectionStyleFiveFa data={Herodata} />
              <Gallery sectionSpace="pt-120 pb-90"/>

        {/* <!-- ABOUT US AREA END -->

      <!-- COUNTER UP AREA START --> */}

      
        <CounterUpar />
        <div className="responsive-container">
  <Interestar />
  <section id="contact-form">
    <ContactFormIr />
  </section>
</div>
<ScrollToContact/>
   

        <style jsx>{`
  .responsive-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
 @media (min-width: 768px) {
.cfor{
display:none;
}
        }
  @media (max-width: 768px) {
    .responsive-container {
      flex-direction: column;
      align-items: center;
    }
  }
    
.react-tel-input {
  direction: rtl !important;
}

`}</style>

      </LayoutTwo>
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

export default MaritimeCityAr;
