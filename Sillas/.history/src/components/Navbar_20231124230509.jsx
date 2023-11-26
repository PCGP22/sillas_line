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
    data.etapas[age].sillas.forEach((d) => sillas.push(d.nombre));
  }
  sillas = new Set(sillas);

  function handleVisibilityClick(type) {
    setVisibility({ ...visibility, type: true });
  }
  function handleVisibilityBlur(type) {
    setVisibility({ ...visibility, type: false });
  }
  return (
    <nav>
      <a href="#inicio">Inicio</a>
      <span>
        <a onClick={() => handleVisibilityClick("epocas")}>Épocas</a>
        <ul
          className={`${!visibility.epocas && "hidden"}`}
          onBlur={() => handleVisibilityBlur("epocas")}>
          {ages.map((a) => (
            <li key={`link to ${a}`}>{a}</li>
          ))}
        </ul>
      </span>
      <span>
        <a onClick={() => handleVisibilityClick("sillas")}>Sillas</a>
        <ul
          className={`${!visibility.epocas && "hidden"}`}
          onBlur={() => handleVisibilityBlur("sillas")}>
          {sillas?.map((s) => (
            <li key={`link to ${s}`}>
              <a href={s}>{s}</a>
            </li>
          ))}
        </ul>
      </span>
    </nav>
  );
}

export default Navbar;
