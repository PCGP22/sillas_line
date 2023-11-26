import LeftChair from "./LeftChairs";
import RightChair from "./RightChairs";

function EraContainer({ data, direction }) {
  console.log(data);
  let cards = [];
  data.sillas.map((s) => {
    if (direction === "left") {
      cards.push(<LeftChair data={s} />);
    } else {
      cards.push(<RightChair data={s} />);
    }
  });
  return (
    <section id="">
      <div>
        <img src={data.imagen} alt="" />
        <h3>{data.nombre}</h3>
        <p>{data.años}</p>
      </div>
      <div>{cards.map((d) => d)}</div>
    </section>
  );
}

export default EraContainer;
