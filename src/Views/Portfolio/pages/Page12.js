import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function Page12() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            應用機器學習技術預測鑽石價格區間，提升模型準確度與穩定性。
          </h4>
          <p>
            本專題使用 Kaggle 平台上的 Diamonds
            資料集，針對鑽石的價格進行分類預測。我們以四分位距將數值型價格劃分為「高」、「中高」、「中」、「低」四個區間，並針對切工、顏色、淨度等類別特徵進行數值轉換與正規化處理。模型方面，使用
            SVM、決策樹、隨機森林、KNN
            等基礎演算法，並搭配網格搜尋與集成學習（AdaBoost、Bagging、Stacking）以優化模型表現。在準確率、召回率、F1
            分數與 AUC 等指標上皆有顯著提升。
          </p>

          <hr className="section-divider" />
          <h4>技術與架構</h4>
          <p>
            透過多種機器學習模型與集成學習方法，預測鑽石的價格區間，提升模型準確度與穩定性。
          </p>
          <ul>
            <li>
              <strong>資料處理：</strong>
              類別編碼、標準化、資料切分（訓練/測試 7:3）、特徵重要性分析
            </li>
            <li>
              <strong>演算法應用：</strong>
              Logistic Regression、SVM、KNN、Decision Tree、Random Forest
            </li>
            <li>
              <strong>模型優化：</strong>
              Grid Search、Learning Curve、Validation Curve、Ensemble
              Learning（AdaBoost、Bagging、Stacking）
            </li>
            <li>
              <strong>效能評估：</strong>
              Accuracy、Precision、Recall、F1 Score、AUC
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
                  imageSrc = ""; // 或設定成預設圖像 require('../../../images/default.jpg')
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
