import { useState } from "react";
import data from "../data/data.json";

function Navbar() {
  const initialState = {
    epocas: false,
    sillas: false,
  };
  const [visibility, setVisibility] = useState(initialState);

  const ages = Object.keys(data.etapas);
  let sillas = [];
  //Get all sillas
  for (let age of ages) {
    data.etapas[age].sillas.forEach((d) => {
      if (!sillas.includes(d.nombre)) {
        sillas.push(d.nombre);
      }
    });
  }

  function handleVisibilityClick(type) {
    setVisibility({ ...visibility, [type]: true });
  }
  function handleVisibilityBlur(type) {
    setVisibility({ ...visibility, [type]: false });
  }
  return (
    <nav>
      <a href="#inicio">Inicio</a>
      <span onMouseLeave={() => handleVisibilityBlur("epocas")}>
        <a onMouseEnter={() => handleVisibilityClick("epocas")}>Épocas</a>
        <ul className={`${visibility.epocas === false ? "hidden" : ""}`}>
          {ages.map((a) => (
            <li key={`link to ${a}`}>
              <a href={`#${data.etapas[a].nombre}`}>{data.etapas[a].nombre}</a>
            </li>
          ))}
        </ul>
      </span>
      <span onMouseLeave={() => handleVisibilityBlur("sillas")}>
        <a onMouseEnter={() => handleVisibilityClick("sillas")}>Sillas</a>
        <ul className={`${visibility.sillas === false ? "hidden" : ""}`}>
          {sillas.length &&
            sillas.map((s) => (
              <li key={`link to ${s}`}>
                <a href={`#${s}`}>{s}</a>
              </li>
            ))}
        </ul>
      </span>
    </nav>
  );
}

export default Navbar;