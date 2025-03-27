import "./Panels.css"
import flower from "../images/hand-drawn-flat-design-simple-flower-outline_23-2149356439.webp";

const Panels = () => {
  return (
       
<div class="bcard-container">
  <div class="bcard u-clearfix">
    <div class="bcard-body">
      <span class="bcard-number bcard-circle subtle">01</span>
      <span class="bcard-author subtle">Li Yichu</span>
      <h2 class="bcard-title">Future Prospects</h2>
      <span class="bcard-description subtle">Review the past and look forward to the future.</span>
      <div class="bcard-read">Read</div>
      <span></span>
    </div>
    <img src={flower} alt="" class="bcard-media" />
  </div>
  <div class="bcard-shadow"></div>
</div>
  );
};
export default Panels;
