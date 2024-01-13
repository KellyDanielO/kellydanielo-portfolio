import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Conditional rendering based on isScrolledToTop
  return !isScrolledToTop ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 right-5 w-16 h-16 bg-shade backdrop-blur-xl rounded-full cursor-pointer flex justify-center items-center z-10"
    >
      <FaArrowUpLong className="text-xl" />
    </button>
  ) : (
    <></>
  );
};

export default ScrollToTopButton;
