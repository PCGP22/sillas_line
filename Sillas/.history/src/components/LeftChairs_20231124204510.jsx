import Card from "./Card";

function LeftChair({ data }) {
  return (
    <section id={data.nombre}>
      <span>{data.año}</span>
      <figure>
        <div>
          <div>
            <li />
          </div>
        </div>
      </figure>
      <Card data={data} />
    </section>
  );
}

export default LeftChair;
