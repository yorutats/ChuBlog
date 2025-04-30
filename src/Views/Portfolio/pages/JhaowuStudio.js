import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function JhaowuStudio() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            結合數據分析與推薦技術之客製化委託設計平台（朝霧工作室）
          </h4>
          <p>
            「朝霧工作室」是一個結合「繪圖委託」與「客製化商品販售」的全方位平台。使用者可以根據個人喜好尋找適合的繪師，進行插畫委託，並將圖像製作成客製化商品。平台導入推薦系統與資料分析技術，實現個人化推薦服務，提升使用者體驗。
          </p>

          <hr className="section-divider" />

          <h4 className="introduction">系統架構</h4>
          <p>
            本專題是一個整合推薦系統、會員管理與圖像商品化的委託平台，具備完整的前後端架構與資料分析流程。我負責系統架構設計、資料流整合與前後端實作。
          </p>
          <ul>
            <li>前端：React 搭配 SCSS，RWD 響應式設計。</li>
            <li>後端：Node.js／Express，串接資料庫與推薦模型。</li>
            <li>資料庫：MySQL 設計完整 ER-Model 與關聯結構。</li>
          </ul>

          <hr className="section-divider" />

          <h4 className="introduction">畫面展示</h4>
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
        </>
      )}
    </PortfolioLayout>
  );
}
