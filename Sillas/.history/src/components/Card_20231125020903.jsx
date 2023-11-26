import { useState } from "react";

function Card({ data }) {
  const [visibility, setVisibility] = useState(false);
  return (
    <figure
      onClick={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}>
      <img
        src={data.imagen}
        alt={`silla ${data.nombre}`}
        height={150}
        width={200}
      />
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
