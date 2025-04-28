import React from "react";
import { useParams } from "react-router-dom";
import portfolioData from "../../data/portfolioData.json";

// 把所有作品的 component 都手動 import 進來
import MyFirstProject from "./pages/MyFirstProject";
import AmazingDesign from "./pages/AmazingDesign";
import CoolArtwork from "./pages/CoolArtwork";

// 做一個對照表
const components = {
  MyFirstProject,
  AmazingDesign,
  CoolArtwork,
};

export default function PortfolioDetail() {
  const { slug } = useParams();

  const item = portfolioData.find((entry) => entry.slug === slug);

  if (!item) {
    return <div>找不到作品</div>;
  }

  const SpecificComponent = components[item.component];

  return SpecificComponent ? <SpecificComponent /> : <div>尚無內容</div>;
}
