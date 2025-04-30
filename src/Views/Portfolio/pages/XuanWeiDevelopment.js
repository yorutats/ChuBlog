import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function XuanWeiDevelopment() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            絃崴開發企業有限公司 ─ B2B 跨境電商平台優化與行銷實作
          </h4>
          <p>
            絃崴開發企業有限公司自 95
            年於高雄成立，專注於各類吉他弦線產品的研發與出口。
            本次專案參與經濟部經貿網舉辦的「行銷成長營」，協助廠商建立跨境電商平台形象，並從外銷市場需求出發，優化產品文案與形象素材，提升其在平台上的能見度與轉換成效。
          </p>

          <hr className="section-divider" />
          <h4 className="introduction">系統架構</h4>
          <p>
            本專案並未開發自有網站，主要使用經貿網平台進行內容優化與行銷設計，聚焦於
            SEO、圖片優化與數據分析回饋調整。
          </p>

          <ul>
            {" "}
            <li>平台操作：於經濟部經貿網進行產品上架與商業頁面佈置。</li>{" "}
            <li>
              企業行銷：設計宣傳文案、商品包裝與圖片後製，製作商品圖與 Banner。
            </li>{" "}
            <li>
              數據分析：定期追蹤 GA 數據，根據 SEO 關鍵字回饋持續優化內容。
            </li>{" "}
            <li>
              行銷策略：使用 Google Trend、Ubersuggest 等工具調整網站曝光策略。
            </li>{" "}
          </ul>

          <hr className="section-divider" />
          <h4 className="introduction">畫面展示</h4>
          <div className="image-gallery">
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
                    <h5 className="introduction">{img.title}</h5>
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
          </div>
        </>
      )}
    </PortfolioLayout>
  );
}
