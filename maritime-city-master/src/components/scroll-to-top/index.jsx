import { useEffect, useState } from "react";

const ScrollToContact = () => { // Removed prop reliance entirely
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollClick = () => {
    // 1. Try finding your form section container directly via ID
    let target = document.getElementById("contact-section-target");
    
    // 2. Fallback: Try looking for the container class name if ID isn't ready
    if (!target) {
      target = document.querySelector(".responsive-container");
    }

    // 3. Fire the native smooth window roll down
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // 4. Absolute ultimate escape hatch: Just roll to the bottom of the page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <button
        id="scrollUp"
        className="register-btn"
        onClick={handleScrollClick}
      >
        Register
      </button>

      <style jsx>{`
        #scrollUp {
          position: fixed;
          height: 45px;
          right: 50px;
          bottom: 27px;
          background-color: #b59410; 
          color: #000000; 
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          border-radius: 6px;
          padding: 0 24px;
          border: none;
          cursor: pointer;
          z-index: 99999; 
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        #scrollUp:hover {
          background-color: #d4b22f; 
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
};

export default ScrollToContact;