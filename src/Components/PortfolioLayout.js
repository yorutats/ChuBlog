// src/Components/PortfolioLayout.jsx
import React from "react";
import { useParams } from "react-router-dom";
import portfolioData from "../data/portfolioData.json";
import ImageZoomWrapper from "./ImageZoomWrapper";
import PaginationBut from "./PaginationBut";
import "../Sheets/page.css"; // 根據實際路徑調整
export default function PortfolioLayout({ children }) {
  const { id } = useParams();
  const project = portfolioData.find((item) => item.id === parseInt(id));

  if (!project) return <div>找不到作品資料</div>;

  let backgroundImage = "";
  try {
    backgroundImage = require(`../images/${project.background}`);
  } catch {
    backgroundImage = "";
  }

  return (
    <ImageZoomWrapper>
      <div className="portfolio">
        <div className="article">
          {/* 背景封面 */}
          <div
            className="page-wrapper"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay"></div>
            <div className="wrapperText">
              <h1>
                <mark style={{ color: project.color }}>{project.title}</mark>
              </h1>
              <div id="author">
                <mark style={{ color: project.color }}>{project.alt}</mark>
              </div>
            </div>
          </div>

          {/* 傳遞 project 給 children */}
          <div className="articleText">
            {typeof children === "function" ? children(project) : children}
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
