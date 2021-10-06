import "./Primary.css";
import photo from '../assets/images/header-img.png'
import codepen from "../assets/images/codepen.png";
import github from "../assets/images/github.png";
import medium from "../assets/images/medium.png";
import facebook from "../assets/images/facebook.png";

function Primary() {
  return (
    <>
      <section class="section-primary">
        <div class="primary-content wrapper-content">
          <div class="wrapper-primary-text">
            <h2 class="primary__title section__title">
              Hi,there
              <br />
              <span class="section__title">I am</span>
              <br />
              pei yun.
            </h2>
            <p class="primary__text">
              I’m a front-end learner based in Taiwan.
              <br />
              Now I’m studying for my master's degree in Digital Technology
              Design at NTUE.
            </p>
            <a href="" class="primary__link-button link-button">
              View Works
            </a>
            <div class="primary__social">
              <img src={github} alt="" />
              <img src={codepen} alt="" />
              <img src={facebook} alt="" />
              <img src={medium} alt="" />
            </div>
          </div>
          <img
            class="primary__main-img"
            src={photo}
            alt=""
          ></img>
        </div>
      </section>
    </>
  );
}

export default Primary;
