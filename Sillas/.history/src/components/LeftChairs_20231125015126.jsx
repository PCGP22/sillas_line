import Card from "./Card";

function LeftChair({ data }) {
  return (
    <section id={data.nombre} className="chair_container">
      <span>{data.año}</span>
      <figure>
        <div>
          <div className="circle_border">
            <li />
          </div>
        </div>
      </figure>
      <Card data={data} />
    </section>
  );
}

export default LeftChair;
