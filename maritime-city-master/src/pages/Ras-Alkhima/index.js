import path from "path";
import fs from "fs/promises";
import { useSelector } from "react-redux";
import { getProducts, productSlug } from "@/lib/product";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import Interest from "@/components/intrest/intrest";
import ThreeColumnsSection from "@/components/ThreeColumnsSectionsilva/ThreeColumnsSection";
import TravelTimesSectionsss from "@/components/silvab/silva";
import TravelTimesSectionss from "@/components/silvac/silva";
import TravelTimesSection from "@/components/silvad/silva";
import HeroSectionStyleOne from "@/components/hero/styleTen";
import EnquireSection from "@/components/enquireSectionSilva/enquireSection";
import featuresData from "@/data/service";
import ScrollToContact from "@/components/scroll-to-top";
import CounterUp from "@/components/counterUpSilva";
import GallerySection from "@/components/silvaGallery/silvaGallery";
import PropertyDetailsInfo from "@/components/detail/detali";
import Slider from "react-slick";
import ContactFormIr from "@/components/SilvaContact/SilvaContact";


function NewTemplate(props) {
  const { products } = useSelector((state) => state.product);
  const { cartItems, wishlistItems, compareItems } = useSelector((state) => ({
    cartItems: state.cart.cartItems,
    wishlistItems: state.wishlist.wishlistItems,
    compareItems: state.compare.compareItems,
  }));

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
      aria-disabled={currentSlide === 0}
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
      aria-disabled={currentSlide === slideCount - 1}
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
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1199,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
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
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
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
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <HeroSectionStyleOne data={Herodata} />
        <EnquireSection />
        <ThreeColumnsSection />
        <TravelTimesSection />
        
        <TravelTimesSectionss />
        <TravelTimesSectionsss />
       <GallerySection />
       <CounterUp />


        <div className="responsive-container">
        <Interest />
  <section id="contact-form" style={{marginBottom:'60px',marginTop:'60px'}}>
    <ContactFormIr />
  </section>
  </div>
        <ScrollToContact />

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

export default NewTemplate;
