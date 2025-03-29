import "./Footer.css";

const TextBlock = () => {
  return (
    <div>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="#">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="./">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="#/about">About</a>
            </li>
            <li class="list-inline-item">
              <a href="#/portfolioList">portfolio</a>
            </li>
          </ul>
          <p class="copyright">Maker CHU © 2023</p>
        </footer>
      </div>
    </div>
  );
};
export default TextBlock;
