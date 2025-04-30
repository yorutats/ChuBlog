import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import Header from "../images/banner.jpg";
import Card from "../Components/Card";
import Panels from "../Components/Panels";
import TextBlock_intro from "../Components/TextBlock_intro";
import Card_img1 from "../images/card_1.jpg";
import Card_img2 from "../images/card_2.jpg";
import Card_img3 from "../images/card_3.jpg";
import "../Sheets/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      title: "About Me",
      description: "了解我的背景、學經歷與個人技能。",
      imageUrl: Card_img1,
      path: "/about",
    },
    {
      title: "Portfolio",
      description:
        "瀏覽我參與的專題、企業合作與個人專案，涵蓋前端開發、資料分析與系統設計等作品。",
      imageUrl: Card_img2,
      path: "/portfolioList",
    },
    {
      title: "Work",
      description: "此區塊尚未開放，謝謝您",
      imageUrl: Card_img3,
      path: "/#",
    },
  ];

  return (
    <div style={{ background: "#e6e9e6" }}>
      <Row>
        <Col span={24}>
          <img
            src={Header}
            alt="Main Header"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>

      <TextBlock_intro />
      <Row gutter={[16, 24]} justify="center">
        {cardsData.map((card, index) => (
          <Col xs={20} sm={12} md={8} lg={6} key={index}>
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              onClick={() => navigate(card.path)}
            />
          </Col>
        ))}
      </Row>
      <Panels />
    </div>
  );
};

export default Home;
