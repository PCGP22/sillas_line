import Card from "./Card";

function RightChair({ data }) {
  return (
    <section id={data.nombre} className="chair_container">
      <Card data={data} />
      <figure className="chair_container__line">
        <div>
          <div>
            <li />
          </div>
        </div>
      </figure>
      <span>{data.año}</span>
    </section>
  );
}

export default RightChair;
