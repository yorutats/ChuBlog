import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function OrderAnalysis() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            大數據分析與決策 ─ 顧客行為洞察與商品推薦分析實作
          </h4>
          <p>
            利用 Python 針對訂單資料建立 RFM 模型，分群後針對每一群進行
            分析與產品推薦，利用使用者導向協同過濾來消費者過去購買記
            錄，計算使用者之間的餘弦相似度。使用 scikit_learn 套件 metrics.
            Pairwise 模組的 <code>cosine_similarity</code>{" "}
            函數，以計算使用者相似度，並將 結果輸出為 array
            資料類型，方便後續的資料處理與分析。
          </p>

          <hr className="section-divider" />
          <h4>分析流程</h4>
          <p>
            透過 Python 進行訂單數據分群與推薦，深入理解顧客行為與產品關聯。
          </p>
          <ul>
            {" "}
            <li>資料處理：pandas 進行資料清理與重組。</li>{" "}
            <li>分析方法：RFM 模型、K-means 分群演算法。</li>{" "}
            <li>
              模型應用：scikit-learn 的 <code>cosine_similarity</code>{" "}
              用於計算顧客相似度。
            </li>{" "}
            <li>推薦系統：基於使用者導向協同過濾推薦商品。</li>{" "}
            <li>關聯分析：使用 Apriori 找出頻繁項目集與關聯規則。</li>{" "}
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
                    />{" "}
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
