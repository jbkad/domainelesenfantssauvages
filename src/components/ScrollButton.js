import React, { useState, useEffect } from 'react';
import { scroll_icon } from '../styles/utils/Constants';
import '../styles/ScrollButton.css';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const buttonScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll-btn ${isVisible ? "visible" : ""}`}
      onClick={buttonScrollToTop}
      data-testid="footer__scroll-btn"
    >
      {scroll_icon}
    </div>
  );
};

export default ScrollButton;
