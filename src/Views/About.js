import React from "react";
import experienceList from "../data/experience.json";
import { Link } from "react-router-dom";
import "../Sheets/About.css";
import Footer from "../Componets/Footer";
import { Avatar, Space } from "antd";
import avatarImg from "../images/Avatar.jpg";

export default function About() {
  return (
    <div className="about">
      <Link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"
        rel="stylesheet"
        type="text/css"
      />
      <Link
        href="https://fonts.googleapis.com/css?family=Raleway:100"
        rel="stylesheet"
        type="text/css"
      />
      <Link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
        type="text/css"
      />
      <div className="rela-block top-bar">
        <div className="caps name">
          <div className="abs-center">Li Yi-Chu</div>
        </div>
      </div>
      <div className="side-bar">
        <div className="mugshot">
          <div className="logo">
            <Space direction="vertical" size={16} className="rela-block avatar">
              <Space wrap size={24}>
                <Avatar size={164} src={avatarImg} />
              </Space>
            </Space>
            <p className="logo-text">李翊曲</p>
          </div>
        </div>
        <p className="rela-block caps side-header">Education</p>
        <p className="rela-block list-thing">中山大學 資訊管理碩士 就讀中</p>
        <p className="rela-block list-thing">
          國立高雄科技大學 智慧商務系(前高應 資訊管理)
        </p>
        <p className="rela-block list-thing">國立臺南大學附中</p>
        <p className="rela-block caps side-header">Expertise</p>
        <p className="rela-block list-thing">Python</p>
        <p className="rela-block list-thing">Java</p>
        <p className="rela-block list-thing">Git</p>
        <p className="rela-block list-thing">JavaScript</p>
        <p className="rela-block list-thing">Node.js</p>
        <p className="rela-block list-thing">MySQL</p>
        <p className="rela-block list-thing">PostgreSQ</p>
      </div>
      <div className="rela-block content-container">
        <h2 className="rela-block caps title"> Master’s Student in MIS</h2>
        <div className="rela-block separator"></div>
        <div className="rela-block caps greyed">Profile</div>
        <p className="long-margin">
          我是李翊曲，目前就讀於中山大學資訊管理研究所，具備前後端與資料庫系統的實作經驗。在學期間參與多個團隊專案，負責
          UI 設計與系統建置，也曾以 React 搭配 Flask 開發寵物商店系統。
          透過自主學習與實作，我逐步培養了解決問題與獨立開發的能力，並持續提升前後端整合與資料處理的能力。
        </p>

        <div className="rela-block caps greyed">Experience</div>
        {experienceList.map((item, index) => (
          <div className="experience-item" key={index}>
            <h3>{item.title}</h3>
            <p className="light">{item.subtitle}</p>
            <p className="justified">{item.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
