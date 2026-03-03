import React from "react";
import experienceList from "../data/experience.json";
import profileData from "../data/profile.json";
import { useNavigate } from "react-router-dom";
import "../Sheets/About.css";
import { Avatar } from "antd";
import avatarImg from "../images/Avatar.jpg";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar">
        {/* <div className="layout-wrapper">
          <h1 className="top-name">LI YI-CHU</h1>
        </div> */}
      </div>
      <div className="about">
        {/* 上方橫幅 */}

        {/* 左側欄 */}
        <div className="side-bar">
          <div className="avatar-block">
            <Avatar size={150} src={avatarImg} className="avatar-img" />
            <p className="avatar-name">{profileData.name.zh}</p>
            <h1 className="avatar-english-name">{profileData.name.en}</h1>
          </div>

          <p className="rela-block caps side-header">Education</p>
          {profileData.education.map((edu, index) => (
            <p key={index} className="rela-block list-thing">{edu}</p>
          ))}

          <p className="rela-block caps side-header">Expertise</p>
          {profileData.expertise.map((group, index) => (
            <div key={index} className="expertise-group" style={{ marginBottom: "15px" }}>
              {/* 分類標題：如 Back-end */}
              <p className="expertise-category" style={{ fontWeight: "bold", fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>
                {group.category}
              </p>

              {/* 技能清單：加上點點 */}
              {group.skills.map((skill, sIndex) => (
                <p key={sIndex} className="rela-block list-thing" style={{ paddingLeft: "10px" }}>
                  • {skill}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* 右側主內容 */}
        <div className="rela-block content-container">
          <h1 className="rela-block caps title">Resume</h1>
          {/* <h1 className="rela-block caps title">Master’s Student in MIS</h1> */}
          <div className="rela-block separator"></div>
          <div className="rela-block caps greyed">Profile</div>
          <p className="long-margin">
            {profileData.profileText}
          </p>
          <div className="rela-block caps greyed">Experience</div>
          {experienceList.map((item, index) => (
            <div className="experience-item" key={index}>
              {item.link ? (
                <h3
                  onClick={() => navigate(item.link)}
                  style={{ cursor: "pointer" }}
                >
                  {item.title}
                </h3>
              ) : (
                <h3>{item.title}</h3>
              )}
              <p className="light">{item.subtitle}</p>
              <p className="justified">{item.description}</p>
            </div>
          ))}
          <div className="rela-block caps greyed">Portfolio</div>
          <button
            className="go-portfolio-btn"
            onClick={() => navigate("/portfolioList")}
          >
            查看作品集
          </button>
        </div>
      </div>
    </>
  );
}
