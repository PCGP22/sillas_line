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

  function handleVisibilityFocus(type) {
    setVisibility({ ...initialState, [type]: true });
  }
  function handleVisibilityBlur(type) {
    setVisibility({ ...visibility, [type]: false });
  }
  function handleVisibilityClick(type) {
    setVisibility({ ...visibility, [type]: !visibility[type] });
  }
  return (
    <nav>
      <a href="#inicio" onMouseEnter={() => handleVisibilityFocus("")}>
        Inicio
      </a>
      <span>
        <a
          onMouseEnter={() => handleVisibilityFocus("epocas")}
          onClick={() => handleVisibilityClick("epocas")}>
          Épocas
        </a>
        <ul
          className={`${visibility.epocas === false ? "hidden" : ""}`}
          onMouseLeave={() => handleVisibilityBlur("epocas")}>
          {ages.map((a) => (
            <li key={`link to ${a}`}>
              <a href={`#${data.etapas[a].nombre}`}>{data.etapas[a].nombre}</a>
            </li>
          ))}
        </ul>
      </span>
      <span>
        <a
          onClick={() => handleVisibilityClick("sillas")}
          onMouseEnter={() => handleVisibilityFocus("sillas")}>
          Sillas
        </a>
        <ul
          onMouseLeave={() => handleVisibilityBlur("sillas")}
          className={`${visibility.sillas === false ? "hidden" : ""} columns`}>
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
