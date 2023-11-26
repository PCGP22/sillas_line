import Card from "./Card";

function RightChair({ data }) {
  return (
    <section id={data.nombre}>
      <Card data={data} />
      <figure>
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
