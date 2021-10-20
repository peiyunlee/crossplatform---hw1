import data from "../assets/data.json";
import { Link } from "react-router-dom";
import './Work.css'

function Work({ match }) {
  const target = data.find((work) => work.id == match.params.id);
  let infolist = []
  target.info.forEach((item, index) => {
    if (item.type === "text") {
      infolist.push(<p>{item.content}</p>);
    } else if (item.type === "imgUrl") {
      infolist.push(<img src={item.content} alt="" />);
    } else if (item.type === "title") {
      infolist.push(<div class="main-info__title">- {item.content} -</div>);
    }
  })

  return (
    <section className="section-work">
      <div class="work-content wrapper-content">
        <Link to="/works/All" class="work__back">
          <svg
            class="work__back-img"
            width="16"
            height="30"
            viewBox="0 0 16 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.35 29L2 15.359L15 1"
              stroke="#C6C6C6"
              stroke-width="3"
            />
          </svg>
          Back to all works
        </Link>
        <div class="wrapper-info">
          <div style={{backgroundColor:target.color}} id="wrapper-info-other" class="wrapper-info-other">
            <img id="mainImg" src={target.infoImgUrl} alt="" />
            <div id="tag" class="wrapper-info-tag">
              {target.infoTag.map((tag) => (
                <div class="info__tag">{tag}</div>
              ))}
            </div>
            {target.link === undefined ? null : (
              <a
                id="link"
                href={target.link.url}
                class="work-link-button link-button"
                target="_blank"
              >
                {`View ${target.link.type}`}
              </a>
            )}
          </div>
          <div id="info" class="wrapper-info-text">
            <div class="info__title">{target.title}</div>
            <p class="short-info">
              {target.shortInfo.map((item) => (
                <>
                  {item}
                  <br />
                </>
              ))}
            </p>
            <div id="mainInfo" class="wrapper-main-info">
              {infolist}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
