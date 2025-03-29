import React, { useState } from "react";

export default function ImageZoomWrapper({ children }) {
  const [zoomImg, setZoomImg] = useState(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target.tagName === "IMG" && target.dataset.zoomable === "true") {
      setZoomImg(target.src);
    }
  };

  return (
    <div onClick={handleClick}>
      {children}

      {zoomImg && (
        <div className="modal-overlay" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="放大圖片" className="modal-image" />
        </div>
      )}
    </div>
  );
}
