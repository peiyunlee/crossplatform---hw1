import "./Header.css";
import { useState } from "react";

function Header() {
  const [classname, setclassname] = useState("header-content wrapper-content");

  return (
    <header>
      <div id="header-content" class={classname}>
        <h1 class="logo">PEI-YUN</h1>
        <div
          id="hamburger"
          class="wrapper-hamburger"
          onClick={() => {
            if (classname === "header-content wrapper-content")
              setclassname(classname + " header-content_active");
            else setclassname("header-content wrapper-content");
          }}
        >
          <div class="cross-button-top cross-button"></div>
          <div class="cross-button-bottom cross-button"></div>
        </div>
        <nav class="header-nav">
          <a href="" class="link-text">
            HOME
          </a>
          <a href="" class="link-text">
            ABOUT
          </a>
          <a href="" class="link-text">
            WORKS
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
