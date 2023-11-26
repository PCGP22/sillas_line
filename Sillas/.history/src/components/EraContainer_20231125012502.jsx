import LeftChair from "./LeftChairs";
import RightChair from "./RightChairs";

function EraContainer({ data, direction }) {
  return (
    <section id={data.nombre} className="age_container">
      <aside>
        <div className="age_container__text sticky">
          <h3>{data.nombre}</h3>
          <p>{data.años}</p>
        </div>
      </aside>
      {/* <img src={data.imagen} alt={data.nombre} height={150} /> */}
      <div className="chair_line">
        {data.sillas.map((s, i) => {
          if (direction === "left") {
            return <LeftChair data={s} key={data.año + i.toString()} />;
          } else {
            return <RightChair data={s} key={data.año + i.toString()} />;
          }
        })}
      </div>
    </section>
  );
}

export default EraContainer;
