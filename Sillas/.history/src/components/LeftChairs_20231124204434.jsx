import Card from "./Card";

function LeftChair({ data }) {
  console.log(data);
  return (
    <section id={""}>
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
