// src/Components/BackToTop.jsx
import React, { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons"; // 或自訂 icon
import "./BackToTop.scss"; // 自定樣式

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {visible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          <ArrowUpOutlined />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
