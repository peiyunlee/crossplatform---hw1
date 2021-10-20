import { Link } from "react-router-dom";

function WorkCard({ data }) {
  return (
    <Link
      to={`/work-detail/${data.id}`}
      style={{ backgroundColor: data.color }}
      id={`#work${data.id}`}
      className="wrapper-work"
    >
      <div className="work__tag">{data.typeTag.join(" & ")}</div>
      <h3 className="work__title">{data.title}</h3>
      <p className="work__info">
        {data.shortInfo.map((item) => (
          <>
            {item}
            <br />
          </>
        ))}
      </p>
      {/* {data.shortInfo.join("<br/>")} */}
      <img src={data.mainImgUrl} alt="" />
    </Link>
  );
}

export default WorkCard;
