function Card({ data }) {
  console.log(data);
  return (
    <figure>
      <img src={data.imagen} alt={`silla ${data.nombre}`} />
      <div>
        <h4>{data.nombre}</h4>
        <h4>
          <i>{data.autor}</i>
        </h4>
      </div>
      <p>{data.descripcion}</p>
    </figure>
  );
}

export default Card;
