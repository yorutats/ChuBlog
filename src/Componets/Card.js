import "./Card.scss";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div>
      <main className="card-main">
        <div className="card">
          <img src={imageUrl} alt="" />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="#" className="button" style={{ color: "white", background: "transparent" }}>
              Find out more
              <span className="material-symbols-outlined" style={{ color: "white", background: "transparent" }}>
                arrow_right_alt
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Card;
