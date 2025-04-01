import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function Page5() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            香茗園茶行 ─ 在地老品牌的商業策略與品牌形象再造
          </h4>
          <p>
            本專案為協助台南「香茗園茶行」進行品牌再設計與行銷策略優化。我們深入分析品牌優劣勢，提供改善建議，並實地拍攝形象影片、重新設計
            Logo 與產品包裝，提升消費者辨識度與市場競爭力。同時透過 React.js
            製作品牌介紹網頁，搭配 Figma
            設計操作介面與宣傳規劃，結合數位與行銷實務。
          </p>

          <hr className="section-divider" />
          <h4>系統架構</h4>
          <p>
            協助台南香茗園茶行進行品牌再造與數位推廣，從 UI
            設計到行銷影片全面實踐。
          </p>

          <ul>
            <li>
              前端：以 HTML、JavaScript、CSS
              製作形象官網，實作品牌形象與基本互動功能。
            </li>
            <li>UI 設計：以 Figma 規劃網站版面與視覺風格，呈現品牌理念。</li>
            <li>行銷實作：設計 Logo、產品包裝、宣傳影片及社群推廣素材。</li>
            <li>
              企業溝通：參與與茶行業主的溝通訪談，完成市場分析與經營建議報告。
            </li>
          </ul>

          <hr className="section-divider" />
          <h4>畫面展示</h4>
          <div className="image-gallery">
            <div className="image-gallery">
              {project.images?.map((img, index) => {
                let imageSrc;
                try {
                  imageSrc = require(`../../../images/${img.path}`);
                } catch (e) {
                  console.warn("圖片載入失敗:", img.path);
                  imageSrc = ""; // 或設定成預設圖像 require('../../../images/default.jpg')
                }

                return (
                  <div key={index}>
                    <h5>{img.title}</h5>
                    <img
                      src={imageSrc}
                      alt={img.title}
                      className="gallery-image"
                      data-zoomable="true"
                      style={{ maxWidth: "40%", height: "auto" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </PortfolioLayout>
  );
}
