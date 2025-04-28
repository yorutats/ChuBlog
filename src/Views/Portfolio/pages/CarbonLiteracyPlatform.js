import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function CarbonLiteracyPlatform() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            「碳為觀止」從系統變革觀點與議題情境模擬遊戲建構氣候變遷素
          </h4>
          <p>
            本系統以氣候變遷素養教育為核心目標，結合多種技術模組與資料建構策略，建置一個具互動性、資料驅動與素養導向的教學平台。系統整合內容資源、關鍵詞資料庫、語義分析工具與學習模組，協助學生透過情境模擬與體驗學習，提升氣候變遷相關素養。
          </p>

          <hr className="section-divider" />
          <h4>系統架構</h4>
          <p>
            結合資料分析與素養教育的氣候變遷學習平台，透過語料分析、視覺化圖譜與模組化課程設計，協助使用者理解氣候議題脈絡並強化行動意識。
          </p>
          <ul>
            <li>
              前端：設計互動式教學平台介面，提供關鍵詞查詢與模組化課程展示。
            </li>
            <li>
              後端：結合語料分析、Pathfinder 圖譜與學習評量模組，整合資料流程。
            </li>
            <li>
              資料處理：建置氣候變遷關鍵詞資料庫，應用中文斷詞與關聯分析技術。
            </li>
            <li>系統應用：支援課程模組管理、測驗回饋與學習歷程追蹤。</li>
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
                imageSrc = require("../../../images/default.png");
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
