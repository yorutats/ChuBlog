import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function ApexLegendsSteamSentimentAnalysis() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            針對 Steam《Apex Legends》玩家評論之情緒分析
          </h4>
          <p>
            本專案選擇熱門遊戲《Apex Legends》作為分析對象，針對 Steam
            平台玩家評論進行情緒探勘。由於近一年來 EA
            公司在營運策略上的爭議，引發玩家社群強烈反彈，導致遊戲評價與活躍人數雙雙下滑。
            專案目標是運用自然語言處理技術（文字清理、斷詞、詞頻統計、自訂停用詞）及情緒分析（CoreNLP、BERT分類器），系統性了解玩家情緒變化、關注議題與社群氛圍，並藉由可視化圖表呈現討論焦點。
            分析結果指出，2024年4月、7月與11月為負面情緒高峰，並萃取出 battle
            pass
            收費政策、配對系統（matchmaking）、反外掛成效（anticheat）與平台支援問題（Linux移除）等核心議題。
            此外，透過 LDA
            主題模型與關鍵字關聯分析，清楚劃分了「課金與制度爭議」、「遊戲機制問題」、「技術支援問題」與「情緒性評論」四大主題，提供了未來改進遊戲體驗的可量化依據。
            本專案亦探討了自然語言模型分類準確率，並提出資料處理上的挑戰與改進方向，展現出文本分析在實務應用中的潛力與價值。
          </p>

          <hr className="introduction" />
          <h4 className="introduction">分析流程</h4>
          <p>
            歸納社群情緒變化趨勢與主要負面議題並提供量化且具解釋力的社群回饋，以分析過程中的挑戰與未來優化方向，作為遊戲營運策略與玩家關係管理的參考。
          </p>

          <h5 className="introduction">1. 資料前處理</h5>
          <ul>
            <li>匯入 Steam 平台玩家評論資料。</li>
            <li>
              清理文本（移除雜訊、標點與非英文文字），進行文字斷詞與詞幹還原。
            </li>
            <li>自訂停用詞，排除高頻無意義單字，完成初步文字雲視覺化。</li>
          </ul>

          <h5 className="introduction">2. 文本結構分析</h5>
          <ul>
            <li>進行 Bigram 二元詞組統計，萃取常見關鍵詞組。</li>
            <li>
              計算 Pairwise correlation，探討特定詞彙（如
              matchmaking、linux）與其他詞的關聯性。
            </li>
          </ul>

          <h5 className="introduction">3. 情緒分類與議題分類</h5>
          <ul>
            <li>
              設定「遊戲內容」與「遊戲管理」兩大主題分類，使用 BERT
              進行文本分類與標註。
            </li>
            <li>
              建立 Logistic Regression
              分類模型，切分資料集、訓練模型並進行性能評估。
            </li>
            <li>透過模型可解釋性分析，探討影響分類的關鍵詞彙。</li>
          </ul>

          <h5 className="introduction">4. 主題探索分析</h5>
          <ul>
            <li>
              應用 LDA 主題模型進行主題探索，選定最佳主題數，並視覺化主題分布。
            </li>
            <li>
              萃取各主題核心關鍵字，歸納玩家關注的主要議題，如課金政策、配對機制、支援平台等。
            </li>
          </ul>

          <hr className="section-divider" />
          <h4 className="introduction">結果展示</h4>
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
                <div>
                  <a
                    href="https://github.com/yorutats/ChuBlog/blob/main/reports/ApexLegendsSentimentAndKeywords.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-link"
                  >
                    查看 Apex Legends 玩家情緒與關鍵字分析 Notebook
                  </a>
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <a
                    href="https://github.com/yorutats/ChuBlog/blob/main/reports/ApexLegendsTopicModeling.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-link"
                  >
                    查看 Apex Legends 主題模型與議題探索 Notebook
                  </a>
                </div>
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
                    <h5 className="introduction">{img.title}</h5>
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
