import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function Page6() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            出冊文化 ─ 品牌形象網站設計與前端開發
          </h4>
          <p>
            出冊文化是一家主打「客製出版與在地連結」的新型態出版社，期望透過書籍記錄個人生活與地方文化。我們專案團隊與企業合作，協助其設計並開發品牌形象網站，呈現企業理念與活動資訊，提升社群能見度與品牌價值。
          </p>

          <hr className="section-divider" />
          <h4>系統架構</h4>
          <p>
            一個傳遞品牌理念與活動資訊的形象網站，協助出冊文化推廣客製出版與在地文化體驗。
          </p>

          <ul>
            <li>
              前端：React.js 結合 Ant Design UI 元件庫，實作響應式形象網站。
            </li>
            <li>
              設計：使用 Figma 規劃 UI 原型，與企業端反覆討論設計需求與流程。
            </li>
            <li>
              專案協作：擔任組長統籌團隊溝通與開發進度，協助整合設計與企業行銷內容。
            </li>
          </ul>

          <hr className="section-divider" />
          <h4>畫面展示</h4>
          <div className="image-gallery">
            {project.images?.map((img, index) => {
              let imageSrc;
              try {
                imageSrc = require(`../../../images/${img.path}`);
              } catch (e) {
                console.warn("圖片載入失敗:", img.path);
                imageSrc = require("../../../images/default.png"); // 或設定成預設圖像
              }

              return (
                <div key={index}>
                  <h5>{img.title}</h5>
                  <img
                    src={imageSrc}
                    alt={img.title}
                    className="gallery-image"
                    data-zoomable="true"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </PortfolioLayout>
  );
}
