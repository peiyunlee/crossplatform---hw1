import WorkCard from "../components/WorkCard";
import data from "../assets/data.json";

function Works({ filter }) {

  return (
    <div className="wrapper-works">
      {filter === "All" || filter === undefined
        ? data.map((data) => <WorkCard key={data.id} data={data} />)
        : data.map((data) =>
            data.typeTag.includes(filter) ? (
              <WorkCard key={data.id} data={data} />
            ) : (
              ""
            )
          )}
    </div>
  );
}

export default Works;
