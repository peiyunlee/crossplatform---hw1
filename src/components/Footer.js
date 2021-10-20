import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-content wrapper-content">
        <div>
          <div className="logo">PEI-YUN</div>
          <div className="footer__license">© 2021 PEIYUN,LEE</div>
        </div>
        <nav>
          <div className="footer-nav-list">
            <div className="footer-nav-list__title">NAVIGATION</div>
            <Link to="/" className="footer-nav-list__text link-text">
              HOME
            </Link>
            <Link to="/" className="footer-nav-list__text link-text">
              ABOUT
            </Link>
            <Link to="/works/All" className="footer-nav-list__text link-text">
              WORKS
            </Link>
          </div>
          <div className="footer-nav-list">
            <div className="footer-nav-list__title">SOCIAL</div>
            <a
              href="https://github.com/PEIYUNLEE"
              className="footer-nav-list__text link-text"
            >
              Github
            </a>
            <a
              href="https://codepen.io/may3256"
              className="footer-nav-list__text link-text"
            >
              Codepen
            </a>
            <a
              href="https://medium.com/@may1092200258"
              className="footer-nav-list__text link-text"
            >
              Medium
            </a>
          </div>
          <div className="footer-nav-list">
            <div className="footer-nav-list__title">CONTACT</div>
            <a href="https://www.facebook.com/may3256" className="footer-nav-list__text link-text">
              Facebook
            </a>
            <div className="footer-nav-list__text">may1092200258@gmail.com</div>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
