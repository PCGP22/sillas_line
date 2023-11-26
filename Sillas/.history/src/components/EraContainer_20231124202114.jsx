import LeftChair from "./LeftChairs";
import RightChair from "./RightChairs";

function EraContainer({ data, direction }) {
  let cards = [];
  data.sillas.map((s) => {
    if (direction === "left") {
      cards.push(<LeftChair data={s} key={data.año} />);
    } else {
      cards.push(<RightChair data={s} key={data.año} />);
    }
  });
  return (
    <section id="">
      <div>
        <img src={data.imagen} alt={data.nombre} height={150} />
        <h3>{data.nombre}</h3>
        <p>{data.años}</p>
      </div>
      <div>{cards.map((d) => d)}</div>
    </section>
  );
}

export default EraContainer;
