import React from "react";
import "../../../Sheets/page.css";
import PaginationBut from "../../../Componets/PaginationBut";
import portfolioData from "../../../data/portfolioData.json";
import { useParams } from "react-router-dom";
import ImageZoomWrapper from "../../../Componets/ImageZoomWrapper";

import pic1 from "../../../images/portfolio/jhaowu/全部商品.jpg";
import pic2 from "../../../images/portfolio/jhaowu/初畫面(圖一).jpg";
import pic3 from "../../../images/portfolio/jhaowu/委託商品.jpg";
import pic4 from "../../../images/portfolio/jhaowu/平台介紹.jpg";
import pic5 from "../../../images/portfolio/jhaowu/會員管理.jpg";
import pic6 from "../../../images/portfolio/jhaowu/登入畫面.jpg";
import pic7 from "../../../images/portfolio/jhaowu/系統功能畫面.jpg";
import pic8 from "../../../images/portfolio/jhaowu/繪師個人介紹(圖二).jpg";

export default function Page1() {
  const { id } = useParams();
  const project = portfolioData.find((item) => item.id === parseInt(id));

  if (!project) return <div>找不到作品資料</div>;
  const backgroundImage = require(`../../../images/${project.background}`);

  return (
    <ImageZoomWrapper>
      <div className="portfolio">
        <div className="article">
          <div
            className="page-wrapper"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="wrapperText">
              <h1>
                <mark style={{ color: "#0e3845" }}>{project.title}</mark>
              </h1>
              <div id="author">
                <mark style={{ color: "#0e3845" }}>{project.alt}</mark>
              </div>
            </div>
          </div>
          <div className="articleText">
            <h4 className="introduction">
              畢業專題：結合數據分析與推薦技術之客製化委託設計平台（朝霧工作室）
            </h4>
            <p>
              「朝霧工作室」是一個結合「繪圖委託」與「客製化商品販售」的全方位平台。使用者可以根據個人喜好尋找適合的繪師，進行插畫委託，並將圖像製作成客製化商品。平台導入推薦系統與資料分析技術，實現個人化推薦服務，提升使用者體驗。
            </p>
            <h4>系統架構</h4>
            <p>
              本專題是一個整合推薦系統、會員管理與圖像商品化的委託平台，具備完整的前後端架構與資料分析流程。我負責系統架構設計、資料流整合與前後端實作。
            </p>
            <ul>
              <li>前端：React 搭配 SCSS，RWD 響應式設計。</li>
              <li>後端：Node.js／Express，串接資料庫與推薦模型。</li>
              <li>資料庫：MySQL 設計完整 ER-Model 與關聯結構。</li>
            </ul>
            <h4>畫面展示</h4>
            <div className="image-gallery">
              <h5>登入畫面</h5>
              <img
                src={pic6}
                alt="登入畫面"
                className="gallery-image"
                data-zoomable="true"
              />
              <h5>系統功能畫面</h5>
              <img
                src={pic7}
                alt="系統功能畫面"
                className="gallery-image"
                data-zoomable="true"
              />
              <h5>全部商品</h5>
              <img
                src={pic1}
                alt="全部商品"
                className="gallery-image"
                data-zoomable="true"
              />
              <h5>繪師清單</h5>
              <img
                src={pic2}
                alt="初畫面"
                className="gallery-image"
                data-zoomable="true"
              />
              <h5>委託商品</h5>
              <img
                src={pic3}
                alt="委託商品"
                className="gallery-image"
                data-zoomable="true"
              />
              <h5>平台介紹</h5>
              <img
                src={pic4}
                alt="平台介紹"
                className="gallery-image"
                data-zoomable="true"
              />
              <h5>會員管理</h5>
              <img
                src={pic5}
                alt="會員管理"
                className="gallery-image"
                data-zoomable="true"
              />

              <h5>繪師介紹</h5>
              <img
                src={pic8}
                alt="繪師介紹"
                className="gallery-image"
                data-zoomable="true"
              />
            </div>
          </div>

          <div className="parent-container">
            <PaginationBut />
          </div>
        </div>
        <footer className="group footer">
          <div className="pull">
            <small></small>
          </div>
          <div className="push">
            <small></small>
          </div>
        </footer>
      </div>
    </ImageZoomWrapper>
  );
}
