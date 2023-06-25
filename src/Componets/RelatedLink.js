import RelatedlinkImg from "../images/related_link.png";
import Entrusted from "../images/entrusted_img.png";
import Purchase from "../images/purchase_img.png";
import ArtistInfo from "../images/artist_info.png";

const Relatedlink = () => {
  return (
    <div>
      <div className="related_link">
        <img src={RelatedlinkImg} alt="Relatedlink" />
      </div>
      <div class="workcontainer">
        <div class="work">
          <img src={ArtistInfo} alt="" />
          <div class="info">
            <a href="https://www.youtube.com/" class="btn-98">
              畫家檔案
            </a>
          </div>
        </div>
        <div class="work">
          <img src={Entrusted} alt="" />
          <div class="info">
            <a href="https://www.youtube.com/" class="btn-98">
              委託案件
            </a>
          </div>
        </div>
        <div class="work">
          <img src={Purchase} alt="" />
          <div class="info">
            <a href="https://www.youtube.com/" class="btn-98">
              商品購買
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatedlink;
