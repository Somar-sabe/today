import { Fragment, useState } from "react";
import { HeaderOne } from "@/components/header";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scroll-to-top";
import PromotionBar from "@/components/promo/prom";

const LayoutOne = ({ children, navPositionClass, topbar }) => {
  const [toggleClassName, SetToggleClassName] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  function toggleClassNameInBody() {
    SetToggleClassName((toggleClassName) => !toggleClassName);
  }

  return (
    <Fragment>
      <div 
        className={`body-wrapper ${toggleClassName ? "ltn__utilize-open" : ""}`}
      >
        <PromotionBar />
        <HeaderOne
          toggleClassNameInBody={toggleClassNameInBody}
          SetToggleClassName={SetToggleClassName}
          navPositionClass={navPositionClass}
          topbar={topbar}
          openPopup={() => setOpenPopup(true)}  
        />
        {children}
        <Footer />
        <ScrollToTop />
      </div>
    </Fragment>
  );
};

export default LayoutOne;
