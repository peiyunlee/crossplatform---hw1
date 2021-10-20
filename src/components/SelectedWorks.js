import work1 from "../assets/images/selected-work-1.png";
import work2 from "../assets/images/selected-work-2.png";
import work3 from "../assets/images/selected-work-3.png";
import { Link } from "react-router-dom";

function SelectedWorks() {
  return (
    <section className="section-selected-works">
      <div className="secondary-content wrapper-content">
        <h2 className="secondary__title section__title">Selected works</h2>
        <div className="wrapper-selected-works">
          <div className="wrapper-work">
            <img src={work1} alt="" />
            <div className="wrapper-work-text">
              <h3 className="work__title">臺北市市民服務大平台</h3>
              <div className="work__position">
                Front-end Engineer
                <br />
                UI/UX participant
              </div>
              <div>
                行政院公共數位創新空間
                <br />
                公部門網頁改版計畫 - RAY4.0
              </div>
              <Link to="/work-detail/0" className="work__link-button link-button">
                View Detail
              </Link>
              <div>
                or{" "}
                <Link to="/works/All" className="work__link link-text">
                  View all works
                </Link>
              </div>
            </div>
          </div>
          <div className="wrapper-work">
            <img src={work2} alt="" />
            <div className="wrapper-work-text">
              <h3 className="work__title">呷蝦咪</h3>
              <div className="work__position">
                Front-end Engineer
                <br />
                UI Designer
              </div>
              <div>
                外賣點餐平台
                <br />
                提供店家外賣以及顧客點餐的服務
              </div>
              <Link to="/work-detail/1" className="work__link-button link-button">
                View Detail
              </Link>
              <div>
                or{" "}
                <Link to="/works/All" className="work__link link-text">
                  View all works
                </Link>
              </div>
            </div>
          </div>
          <div className="wrapper-work">
            <img src={work3} alt="" />
            <div className="wrapper-work-text">
              <h3 className="work__title">Multic</h3>
              <div className="work__position">Front-end Engineer</div>
              <div>
                音樂科普網站
                <br />
                尋找你要的音樂風格
              </div>
              <Link to="/work-detail/2" className="work__link-button link-button">
                View Detail
              </Link>
              <div>
                or{" "}
                <Link to="/works/All" className="work__link link-text">
                  View all works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorks;
