import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-content wrapper-content">
        <div>
          <div class="logo">PEI-YUN</div>
          <div class="footer__license">© 2021 PEIYUN,LEE</div>
        </div>
        <nav>
          <div class="footer-nav-list">
            <div class="footer-nav-list__title">NAVIGATION</div>
            <a href="" class="footer-nav-list__text link-text">
              HOME
            </a>
            <a href="" class="footer-nav-list__text link-text">
              ABOUT
            </a>
            <a href="" class="footer-nav-list__text link-text">
              WORKS
            </a>
          </div>
          <div class="footer-nav-list">
            <div class="footer-nav-list__title">SOCIAL</div>
            <a href="" class="footer-nav-list__text link-text">
              Github
            </a>
            <a href="" class="footer-nav-list__text link-text">
              Codepen
            </a>
            <a href="" class="footer-nav-list__text link-text">
              Medium
            </a>
          </div>
          <div class="footer-nav-list">
            <div class="footer-nav-list__title">CONTACT</div>
            <a href="" class="footer-nav-list__text link-text">
              Facebook
            </a>
            <div class="footer-nav-list__text">may1092200258@gmail.com</div>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
