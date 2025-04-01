import "./Footer.css";

const TextBlock = () => {
  return (
    <div>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="https://github.com/yorutats">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/%E7%BF%8A%E6%9B%B2-%E6%9D%8E-7a008a257/">
              <i class="icon ion-social-linkedin "></i>
            </a>
            <a href="https://pda.104.com.tw/profile/preview?vno=76evd9eqt">
              <i class="fa-solid fa-briefcase"></i>
            </a>
            <a href="mailto:s20009099@gmail.com">
              <i class="fa-solid fa-envelope"></i>
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
              <a href="#/portfolioList">Portfolio</a>
            </li>
          </ul>
          <p class="copyright">Maker CHU © 2023</p>
        </footer>
      </div>
    </div>
  );
};
export default TextBlock;
