import React from "react";
import "../../Sheets/portfolio.scss";
import { Link } from "react-router-dom";
import Footer from "../../Componets/Footer";
import portfolioData from "../../data/portfolioData.json";

// 動態載入圖片函式
const getImage = (filename) => {
  try {
    return require(`../../images/${filename}`);
  } catch (error) {
    console.error("找不到圖片：", filename);
    return null;
  }
};

export default function PortfolioList() {
  return (
    <div>
      <div className="card_portfolio">
        <div className="card_portfolio-container">
          {portfolioData.map((item, index) => (
            <div className="card_portfolio-card" key={index}>
              <figure className="card_portfolio-card__thumb">
                <img
                  src={getImage(item.image)}
                  alt={item.alt}
                  className="card_portfolio-card__image"
                />
                <figcaption className="card_portfolio-card__caption">
                  <h2 className="card_portfolio-card__title">{item.title}</h2>
                  <p className="card_portfolio-card__snippet">{item.snippet}</p>
                  <nav>
                    <Link
                      to={`/portfolio/${item.id}`}
                      className="card_portfolio-card__button"
                    >
                      View Project
                    </Link>
                  </nav>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
