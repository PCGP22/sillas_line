import Card from "./Card";

function RightChair({ data }) {
  return (
    <section id={data.nombre} className="chair_container right">
      <Card data={data} />
      <figure className="timeline">
        <div>
          <div className="circle_border">
            <li />
          </div>
        </div>
      </figure>
      <span>{data.año}</span>
    </section>
  );
}

export default RightChair;