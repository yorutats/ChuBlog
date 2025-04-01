import "./Card.scss";

const Card = ({ title, description, imageUrl, onClick }) => {
  return (
    <div>
      <main className="card-main">
        {/* 整張卡片都可點擊 */}
        <div className="card" onClick={onClick}>
          <img src={imageUrl} alt={title} />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a
              href="#"
              className="button"
              onClick={(e) => e.preventDefault()} // 防止 <a> 跳轉行為
              style={{ color: "white", background: "transparent" }}
            >
              Find out more
              <span
                className="material-symbols-outlined"
                style={{ color: "white", background: "transparent" }}
              >
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
