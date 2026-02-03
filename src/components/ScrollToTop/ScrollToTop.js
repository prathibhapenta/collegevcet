import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showArrow && (
      <div className="scroll-top-arrow" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  );
};

export default ScrollToTop;
