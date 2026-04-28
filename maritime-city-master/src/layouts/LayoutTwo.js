import { Fragment, useState } from "react";
import { HeaderTwo } from "@/components/header";
import FooterAr from "@/components/footer/footerar";
import ScrollToTop from "@/components/scroll-to-top-ar";

const LayoutOne = ({ children, navPositionClass, topbar }) => {
  const [toggleClassName, SetToggleClassName] = useState(false);

  function toggleClassNameInBody() {
    SetToggleClassName((toggleClassName) => !toggleClassName);
  }

  return (
    <Fragment>
      <div
      
        className={`body-wrapper ${toggleClassName ? "ltn__utilize-open" : ""}`}
      >
        <HeaderTwo
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
