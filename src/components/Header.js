import "./Header.css";
import { useState } from "react";
import { Link } from 'react-router-dom'

function Header() {
  const [classname, setclassname] = useState("header-content wrapper-content");

  return (
    <header>
      <div id="header-content" className={classname}>
        <h1 className="logo">PEI-YUN</h1>
        <div
          id="hamburger"
          className="wrapper-hamburger"
          onClick={() => {
            if (classname === "header-content wrapper-content")
              setclassname(classname + " header-content_active");
            else setclassname("header-content wrapper-content");
          }}
        >
          <div className="cross-button-top cross-button"></div>
          <div className="cross-button-bottom cross-button"></div>
        </div>
        <nav className="header-nav">
          <Link to="/" className="link-text">HOME</Link>
          <Link to="/" className="link-text">ABOUT</Link>
          <Link to="/works/All" className="link-text">WORKS</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
