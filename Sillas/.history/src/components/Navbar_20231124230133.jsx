import { useState } from "react";
import data from "../data/data.json";

function Navbar() {
  const initialState = {
    epocas: false,
    sillas: false,
  };
  const [visibility, setVisibility] = useState(initialState);

  const ages = Object.keys(data.etapas);
  const sillas = [];
  //Get all sillas
  for (let age of ages) {
    data.etapas[age].sillas.forEach((d) => console.log(d.nombre));
  }
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
        <a>Sillas</a>
      </span>
    </nav>
  );
}

export default Navbar;
