// src/Views/Portfolio/PortfolioRouter.js
import React from "react";
import { useParams, Navigate } from "react-router-dom";

// ✅ 改成遞迴掃描當前資料夾（true）
// ✅ 絕對路徑，避免 Webpack 有時解析失效
const context = require.context("./", true, /Page\d+\.js$/);

// 🔍 建立 ID 對應 component 的 map
const componentMap = {};

context.keys().forEach((key) => {
  const match = key.match(/Page(\d+)\.js$/);
  if (match) {
    const id = match[1];
    componentMap[id] = context(key).default;
  }
});

export default function PortfolioRouter() {
  const { id } = useParams();
  const Component = componentMap[id];

  console.log("componentMap:", componentMap); // 🧪 檢查是否正確
  console.log("requested id:", id); // 🧪 檢查網址參數

  if (!Component) return <Navigate to="/portfolioList" replace />;
  return <Component />;
}
