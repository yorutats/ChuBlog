import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function MusicPlayerWebsite() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            音樂播放網站 ─ 個人化排行榜與我的最愛收藏平台
          </h4>
          <p>
            該作品規劃成兩部分，第一部分是音樂排行榜，會推薦目前熱門音
            樂前十名，點擊歌曲播放鍵出現播放列表，同時可以將喜歡的歌曲
            加入我的最愛列表。
            第二部分是我的最愛列表，可以在裡面看到所有收藏的歌曲，同時
            設計一個按鈕將歌曲從我的最愛中移除，點擊歌曲播放也會出現播 放列表。
          </p>

          <hr className="section-divider" />
          <h4>系統架構</h4>
          <p>
            整體介面設計以 Figma 規劃，前端使用 React.js
            實作互動邏輯與播放體驗。
          </p>

          <ul>
            <li>前端：React.js 開發介面與播放互動功能。</li>
            <li>UI 設計：使用 Figma 規劃畫面結構與操作流程。</li>
            <li>
              功能模組：包含排行榜推薦、播放清單控制、我的最愛收藏與管理。
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
