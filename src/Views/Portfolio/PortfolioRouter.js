// src/Views/Portfolio/PortfolioRouter.js
import React from "react";
import { useParams, Navigate } from "react-router-dom";

// src/Views/Portfolio/PortfolioRouter.js
const context = require.context("./pages", false, /Page\d+\.js$/);

// 建立 ID 對應 component 的 map
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

  if (!Component) return <Navigate to="/portfolioList" replace />;
  return <Component />;
}
