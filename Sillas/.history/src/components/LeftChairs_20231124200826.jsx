import Card from "./Card";

function LeftChair({ data }) {
  return (
    <div>
      <span>{data?.año}</span>
      <figure>
        <div>
          <div>
            <li />
          </div>
        </div>
      </figure>
      <Card data={data} />
    </div>
  );
}

export default LeftChair;
