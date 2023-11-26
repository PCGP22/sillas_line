import { useState } from "react";

function Card({ data }) {
  const [visibility, setVisibility] = useState(false);
  return (
    <figure
      onClick={() => setVisibility(true)}
      onBlur={() => setVisibility(false)}>
      <img src={data.imagen} alt={`silla ${data.nombre}`} height={100} />
      <article className={`${!visibility && "hidden"}`}>
        <div>
          <h4>{data.nombre}</h4>
          <h4>
            <i>{data.autor}</i>
          </h4>
        </div>
        <p>{data.descripcion}</p>
      </article>
    </figure>
  );
}

export default Card;
