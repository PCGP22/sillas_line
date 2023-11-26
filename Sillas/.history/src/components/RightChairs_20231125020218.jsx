import Card from "./Card";

function RightChair({ data }) {
  return (
    <section id={data.nombre} className="chair_container">
      <Card data={data} />
      <figure className="timeline">
        <div>
          <li className="circle_border"></li>
        </div>
      </figure>
      <span>{data.año}</span>
    </section>
  );
}

export default RightChair;
