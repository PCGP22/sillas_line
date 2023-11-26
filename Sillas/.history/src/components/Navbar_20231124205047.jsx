import { useState } from "react";

function Navbar() {
  const initialState = {
    epocas: false,
    sillas: false,
  };
  const [visibility, setVisibility] = useState(initialState);
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
          onBlur={() => handleVisibilityBlur("epocas")}></ol>
      </div>
      <a href="#inicio">Sillas</a>
    </nav>
  );
}

export default Navbar;
