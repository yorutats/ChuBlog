import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function HealthManagementApp() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            健康管理 App — 個人化飲食與運動紀錄平台
          </h4>
          <p>
            本系統是一款結合個人健康數據、營養建議與運動紀錄功能的健康管理
            App。使用者可依個人基本資料（如性別、年齡、運動習慣、減重目標等）計算基礎代謝率（BMR）與每日消耗熱量（TDEE），系統將根據結果建議每日六大類食物攝取份數。平台亦提供飲食與運動日記功能，方便使用者每日記錄飲食攝取與運動項目，並透過圖表分析，視覺化呈現熱量收支與行為趨勢，協助使用者建立個人化健康習慣。
          </p>

          <hr className="section-divider" />
          <h4 className="introduction">分析流程</h4>
          <p>
            一款整合個人化營養建議、飲食與運動紀錄、以及圖表分析的健康管理
            App，協助使用者養成科學化的生活習慣。
          </p>
          <li>
            前端：React Native 開發跨平台 App，使用 React Navigation
            管理畫面流程。
          </li>
          <li>
            後端：Node.js／Express，負責帳號系統、BMR/TDEE 計算與資料處理 API。
          </li>
          <li>
            資料庫：MySQL 儲存使用者資料、飲食與運動紀錄，設計完整資料關聯。
          </li>

          <hr className="section-divider" />
          <h4 className="introduction">結果展示</h4>
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
                    <p>{img.content}</p>
                    <img
                      src={imageSrc}
                      alt={img.title}
                      className="gallery-image"
                      data-zoomable="true"
                      style={{ maxWidth: "25em", height: "auto" }}
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
