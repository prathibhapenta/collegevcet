import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // detect route changes
  const [showArrow, setShowArrow] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  // Show/hide arrow on scroll
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
