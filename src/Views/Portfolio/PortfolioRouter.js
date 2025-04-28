import React from "react";
import { useParams, Navigate } from "react-router-dom";
import portfolioData from "../../data/portfolioData.json";

const context = require.context("./pages", false, /\.js$/);

// 建立 slug ➔ Component 的對應
const componentMap = {};

context.keys().forEach((key) => {
  const fileName = key.replace("./", "").replace(".js", "");
  componentMap[fileName] = context(key).default;
});

export default function PortfolioRouter() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) return <Navigate to="/portfolioList" replace />;
  return <Component />;
}
