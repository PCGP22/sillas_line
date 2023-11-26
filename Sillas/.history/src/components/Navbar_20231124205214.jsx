import { useState } from "react";
import data from "../data/data.json";

function Navbar() {
  const initialState = {
    epocas: false,
    sillas: false,
  };
  const [visibility, setVisibility] = useState(initialState);

  const ages = Object.keys(data.etapas);

  function handleVisibilityClick(string) {
    setVisibility({ ...visibility, string: true });
  }
  function handleVisibilityBlur(string) {
    setVisibility({ ...visibility, string: false });
  }
  return (
    <nav>
      <a href="#inicio">Inicio</a>
      <div>
        <a href="#inicio" onClick={() => handleVisibilityClick("epocas")}>
          Épocas
        </a>
        <ol
          className={`${!visibility.epocas && "hidden"}`}
          onBlur={() => handleVisibilityBlur("epocas")}>
          {ages.map((a) => (
            <li key={`link to ${a}`}>{a}</li>
          ))}
        </ol>
      </div>
      <a href="#inicio">Sillas</a>
    </nav>
  );
}

export default Navbar;
