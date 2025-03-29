import React from "react";
import { Row, Col } from "antd";
import Header from "../images/banner.jpg";
import Card from "../Componets/Card";
import Panels from "../Componets/Panels";
import TextBlock_intro from "../Componets/TextBlock_intro";
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
      title: "Portfolio",
      description: "Description for Portfolio",
      imageUrl: Card_img2,
    },
    {
      title: "Work",
      description: "Description for Work",
      imageUrl: Card_img3,
    },
  ];

  return (
    <div style={{ background: "#e6e9e6" }}>
      <Row>
        <Col span={24}>
          <img src={Header} alt="Main Header" style={{ width: "100%" }} />
        </Col>
      </Row>

      <TextBlock_intro />
      <Row>
        {cardsData.map((card, index) => (
          <Col
            xs={{ span: 5, offset: 2 }}
            lg={{ span: 4, offset: 3 }}
            key={index}
          >
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </Col>
        ))}
      </Row>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uyAN9fH0ijQ?si=8x7WGS6PvbD_IZqU&amp;start=3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}

      <Panels />
    </div>
  );
};

export default Home;
