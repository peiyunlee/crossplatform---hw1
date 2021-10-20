import me from "../assets/images/me-big.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="section-about">
      <div className="secondary-content wrapper-content">
        <h2 className="secondary__title section__title">About</h2>
        <div className="wrapper-about">
          <img className="about__img" src={me} alt="" />
          <div className="wrapper-about-text">
            <p>
              我主要的專長是程式開發，曾經嘗試過網頁/APP、遊戲開發。目前我則專注於網頁、APP前端領域，並且持續學習更多有關UI/UX、AI人工智慧的知識。
            </p>
            <div className="about__title">Used Technologies</div>
            <ul className="about__skill-list">
              <li className="about__skill-item">Git/Github</li>
              <li className="about__skill-item">Vue</li>
              <li className="about__skill-item">C/C++/C#</li>
              <li className="about__skill-item">JavaScript</li>
              <li className="about__skill-item">React</li>
            </ul>
            <div className="about__title">Learning now</div>
            <ul className="about__skill-list">
              <li className="about__skill-item">Typescript</li>
              <li className="about__skill-item">Python</li>
            </ul>
            <Link to="/" className="about__link-button link-button">
              More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
