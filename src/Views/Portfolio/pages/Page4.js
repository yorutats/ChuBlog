import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function Page4() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">國立高雄科技大學研討會系統</h4>
          <p>
            本系統為一套專為學術研討會設計的投稿與資訊管理平台，提供論文投稿、審查、編輯及日程公告等多項功能，協助校內研討會主辦單位有效整合投稿流程與會議資訊。使用者可於平台上完成投稿作業，並即時掌握最新消息、審查進度與活動日程，提升整體研討會的辦理效率與專業形象。
          </p>

          <hr className="section-divider" />
          <h4>系統架構</h4>
          <p>
            本研討會系統供論文投稿、編輯，讓本校可以更有效率的整理主辦之研討會投稿論文，以及發布最新消息和會議日程。在本專案中負責
            UI 設計、前端與功能討論。
          </p>

          <ul>
            <li>前端：React 搭配 SCSS，RWD 響應式設計。</li>
            <li>後端：Node.js／Express，串接資料庫與推薦模型。</li>
            <li>資料庫：MySQL 設計完整 ER-Model 與關聯結構。</li>
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
