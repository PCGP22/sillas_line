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
    setVisibility({ ...visibility, [type]: true });
  }
  function handleVisibilityBlur(type) {
    setVisibility({ ...visibility, [type]: false });
  }
  function handleVisibilityClick(type) {
    setVisibility({ ...visibility, [type]: !visibility[type] });
  }
  return (
    <nav className="sticky">
      <a href="#inicio">Inicio</a>
      <span onMouseLeave={() => handleVisibilityBlur("epocas")}>
        <a
          onMouseEnter={() => handleVisibilityFocus("epocas")}
          onClick={() => handleVisibilityClick("epocas")}>
          Épocas
        </a>
        <ul
          className={`${visibility.epocas === false ? "hidden" : ""}`}
          onMouseEnter={() => handleVisibilityFocus("epocas")}>
          {ages.map((a) => (
            <li key={`link to ${a}`}>
              <a href={`#${data.etapas[a].nombre}`}>{data.etapas[a].nombre}</a>
            </li>
          ))}
        </ul>
      </span>
      <span onMouseLeave={() => handleVisibilityBlur("sillas")}>
        <a
          onClick={() => handleVisibilityClick("sillas")}
          onMouseEnter={() => handleVisibilityFocus("sillas")}>
          Sillas
        </a>
        <ul
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
