import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function Page5() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            大數據分析與決策 ─ 顧客行為洞察與商品推薦分析實作
          </h4>
          <p>
            本專案透過探索性資料分析（EDA）、關聯規則探勘、顧客分群與預測模型，全面剖析歷史銷售資料與顧客行為。分析地區差異、商品熱銷程度、預測顧客回購行為與消費金額，並結合
            RFM 與 K-means 技術，提供個人化推薦與顧客經營策略。
          </p>

          <hr className="section-divider" />
          <h4>分析流程</h4>
          <p>
            運用多種資料探勘與機器學習方法，深入分析顧客與商品特徵，建構預測模型與推薦系統，輔助企業決策。
          </p>
          <ul>
            <li>資料處理：進行資料清洗與格式整理，建立乾淨的分析資料集。</li>
            <li>探索性分析：使用視覺化工具觀察資料整體分布與異常值。</li>
            <li>
              商品分析：找出中部地區獲利最高、銷售量/金額最高的子分類商品。
            </li>
            <li>
              顧客預測模型：
              <ul>
                <li>預測顧客第四年是否會再次購買（分類模型）。</li>
                <li>預測顧客回購的消費金額（回歸模型）。</li>
              </ul>
            </li>
            <li>顧客地區分析：觀察不同地區顧客的消費習慣與偏好差異。</li>
            <li>關聯規則分析：使用 Apriori 探勘顧客常一起購買的商品組合。</li>
            <li>
              顧客分群：以 RFM 模型與 K-means 方法建立 2–3 個代表性顧客群體。
            </li>
            <li>
              推薦系統：依顧客類型製作商品推薦清單，作為未來行銷策略依據。
            </li>
          </ul>

          <hr className="section-divider" />
          <h4>結果展示</h4>
          <div className="image-gallery">
            <div className="image-gallery">
              <div style={{ marginBottom: "2rem" }}>
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-link"
                >
                  點此查看完整簡報
                </a>
              </div>
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
                    <p>{img.content}</p>
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
