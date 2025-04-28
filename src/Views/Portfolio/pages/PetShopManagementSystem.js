import React from "react";
import PortfolioLayout from "../../../Components/PortfolioLayout";

export default function PetShopManagementSystem() {
  return (
    <PortfolioLayout>
      {(project) => (
        <>
          <h4 className="introduction">
            寵物店商家管理系統 — 結合商品與顧客管理的全方位平台
          </h4>
          <p>
            本系統提供商家統一管理寵物品項、供應商資訊、顧客資料與照護手冊，並可執行新增、刪除、查詢與修改操作（CRUD），支援訂單與購買記錄管理。管理者與使用者介面分離，提升操作便利性與資料完整性，適合應用於中小型寵物門市或寵物電商平台。
          </p>

          <hr className="section-divider" />
          <h4>系統架構</h4>
          <p>
            一套整合商品、顧客與訂單管理的寵物店後台系統，支援完整 CRUD
            與多模組操作。
          </p>
          <ul>
            <li>
              前端模板：使用 Flask + Jinja2 模板引擎，整合 HTML 顯示與資料渲染。
            </li>
            <li>
              後端邏輯：Flask
              作為主要框架，劃分模組（如api、bookstore、backstage）。
            </li>
            <li>
              資料庫設計：透過多個
              SQL檔案分別管理不同模組，具備良好的資料表結構。
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
