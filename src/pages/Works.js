import WorkList from "../components/Works";
import "./Works.css";
import { NavLink } from "react-router-dom";

function Works({ match }) {
  const filterType = ["All", "Front-end", "UIUX", "Game"];
  const filter = match.params.filter;

  return (
    <main>
      <section className="section-works">
        <div className="works-content wrapper-content">
          <h2 className="works__title section__title">Works</h2>
          <div className="works-nav">
            {filterType.map((item) => (
              <NavLink
                activeClassName="works-nav__item-active"
                to={`/works/${item}`}
                key={item}
                className="works-nav__item"
              >
                {item}
              </NavLink>
            ))}
          </div>
          <WorkList filter={filter} />
        </div>
      </section>
    </main>
  );
}

export default Works;
