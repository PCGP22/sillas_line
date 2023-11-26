import LeftChair from "./LeftChairs";
import RightChair from "./RightChairs";

function EraContainer({ data, direction }) {
  return (
    <section id="">
      <div>
        <img src={data.imagen} alt={data.nombre} height={150} />
        <h3>{data.nombre}</h3>
        <p>{data.años}</p>
      </div>
      <div>
        {data.sillas.map((s, i) => {
          if (direction === "left") {
            return <LeftChair data={s} key={data.nombre} />;
          } else {
            return <RightChair data={s} key={data.nombre} />;
          }
        })}
      </div>
    </section>
  );
}

export default EraContainer;
