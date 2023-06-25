import React from "react";
import { Row, Col } from "antd";
import Header from "../images/bg_home.svg";
import Card from "../Componets/Card";
import Panels from "../Componets/Panels";
import TextBlock_intro from "../Componets/TextBlock_intro";
import Footer from "../Componets/Footer";
import Card_img1 from "../images/card_1.jpg";
import Card_img2 from "../images/card_2.jpg";
import Card_img3 from "../images/card_3.jpg";
import "../Sheets/Home.css";

const Home = () => {
  const cardsData = [
    {
      title: "About Me",
      description: "Description for me",
      imageUrl: Card_img1,
    },
    {
      title: "Blog",
      description: "Description for Blog",
      imageUrl: Card_img2,
    },
    {
      title: "Work",
      description: "Description for Work",
      imageUrl: Card_img3,
    },
  ];

  return (
    <div style={{ background: "#f5f1e3" }}>
      <Row>
        <Col span={24}>
          <img src={Header} alt="Main Header" style={{ width: "100%" }} />
        </Col>
      </Row>

      <TextBlock_intro />
      <Row>
        {cardsData.map((card, index) => (
          <Col xs={{ span: 5, offset: 2 }} lg={{ span: 4, offset: 3 }} key={index}>
            <Card title={card.title} description={card.description} imageUrl={card.imageUrl} />
          </Col>
        ))}
      </Row>
      <Panels />
      <Footer />
    </div>
  );
};

export default Home;
