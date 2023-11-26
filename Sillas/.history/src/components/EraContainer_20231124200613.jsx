import LeftChair from "./LeftChairs";
import RightChair from "./RightChairs";

function EraContainer({ data, direction }) {
  let cards = [];
  data.sillas.map((s) => {
    if (direction === "left") {
      cards.push(<LeftChair data={s} />);
    } else {
      cards.push(<RightChair data={s} />);
    }
  });
  return (
    <section>
      <div>
        <h3>Renacimiento</h3>
        <p>(Siglo XV - Siglo XVI)</p>
      </div>
      <div>{cards.map((d) => d)}</div>
    </section>
  );
}

export default EraContainer;
