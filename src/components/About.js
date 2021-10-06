import './About.css';
import me from '../assets/images/me-big.png'

function About() {
  return (
    <section class="section-about">
    <div class="secondary-content wrapper-content">
        <h2 class="secondary__title section__title">About</h2>
        <div class="wrapper-about">
            <img class="about__img" src={me} alt=""/>
            <div class="wrapper-about-text">
                <p>
                    我主要的專長是程式開發，曾經嘗試過網頁/APP、遊戲開發。目前我則專注於網頁、APP前端領域，並且持續學習更多有關UI/UX、AI人工智慧的知識。</p>
                <div class="about__title">Used Technologies</div>
                <ul class="about__skill-list">
                    <li class="about__skill-item">Git/Github</li>
                    <li class="about__skill-item">Vue</li>
                    <li class="about__skill-item">C/C++/C#</li>
                    <li class="about__skill-item">JavaScript</li>
                    <li class="about__skill-item">React</li>
                </ul>
                <div class="about__title">Learning now</div>
                <ul class="about__skill-list">
                    <li class="about__skill-item">Typescript</li>
                    <li class="about__skill-item">Python</li>
                </ul>
                <a href="" class="about__link-button link-button">More About Me</a>
            </div>
        </div>
    </div>
</section>
  );
}

export default About;
