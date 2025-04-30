import "./Panels.css";
import flower from "../images/flower.png";

const Panels = () => {
  return (
    <div className="bcard-container">
      <div className="bcard u-clearfix">
        <div className="bcard-body">
          <span className="bcard-number bcard-circle subtle">01</span>
          <span className="bcard-author subtle">Li Yichu</span>
          <h2 className="bcard-title">Future Prospects</h2>
          <span className="bcard-description subtle">
            Review the past and look forward to the future.
          </span>
          <div className="bcard-read">Read</div>
          <span></span>
        </div>
        <img src={flower} alt="" className="bcard-media" />
      </div>
      <div className="bcard-shadow"></div>
    </div>
  );
};
export default Panels;
