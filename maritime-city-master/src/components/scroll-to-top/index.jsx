import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {  // After scrolling 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <button
      style={{color:"black"}}
        id="scrollUp"
        className={`scroll-top register-btn ${isVisible ? "active" : ""}`}
        onClick={scrollToContactForm}
      >
        Register
      </button>

      <style jsx>{`
        #scrollUp {
          visibility: hidden;
          position: fixed;
          height: 45px;
          right: 50px;
          max-width:fit-content;
          left:auto;
          bottom: 27px;
          color: #fff;
          font-size: 16px;
          text-align: center;
          border-radius: 6px;
          line-height: 45px;
        
          border: none;
          cursor: pointer;
          z-index: 1000;
          transition: visibility 0.3s ease, background-color 0.3s ease, opacity 0.5s ease;
        }

        #scrollUp.active {
          visibility: visible;
        }

        .register-btn {
          padding: 12px 24px;
          font-size: 16px;
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

export default ScrollToContact;
