import "./SelectedWorks.css";
import work1 from "../assets/images/selected-work-1.png";
import work2 from "../assets/images/selected-work-2.png";
import work3 from "../assets/images/selected-work-3.png";

function SelectedWorks() {
  return (
    <section class="section-selected-works">
    <div class="secondary-content wrapper-content">
        <h2 class="secondary__title section__title">Selected works</h2>
        <div class="wrapper-selected-works">
            <div class="wrapper-work">
                <img src={work1} alt=""/>
                <div class="wrapper-work-text">
                    <h3 class="work__title">臺北市市民服務大平台</h3>
                    <div class="work__position">Front-end Engineer<br/>UI/UX participant</div>
                    <div>行政院公共數位創新空間<br/>公部門網頁改版計畫 - RAY4.0</div>
                    <a href="" class="work__link-button link-button">View Detail</a>
                    <div>or <a href="" class="work__link link-text">View all works</a></div>
                </div>
            </div>
            <div class="wrapper-work">
                <img src={work2} alt=""/>
                <div class="wrapper-work-text">
                    <h3 class="work__title">呷蝦咪</h3>
                    <div class="work__position">Front-end Engineer<br/>UI Designer</div>
                    <div>外賣點餐平台<br/>提供店家外賣以及顧客點餐的服務</div>
                    <a href="" class="work__link-button link-button">View Detail</a>
                    <div>or <a href="" class="work__link link-text">View all works</a></div>
                </div>
            </div>
            <div class="wrapper-work">
                <img src={work3} alt=""/>
                <div class="wrapper-work-text">
                    <h3 class="work__title">Multic</h3>
                    <div class="work__position">Front-end Engineer</div>
                    <div>音樂科普網站<br/>尋找你要的音樂風格</div>
                    <a href="" class="work__link-button link-button">View Detail</a>
                    <div>or <a href="" class="work__link link-text">View all works</a></div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default SelectedWorks;
