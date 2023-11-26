import Navbar from "./components/Navbar";
import data from "./data/data.json";
import EraContainer from "./components/EraContainer";
import RightToLeft from "./components/RightToLeft";
import LeftToRight from "./components/LeftToRight";

function App() {
  const ages = Object.keys(data.etapas);

  return (
    <>
      <Navbar />
      <header id="inicio">
        <h1>Historia de la silla</h1>
        <img src="https://uncrate.com/p/2020/05/vitra-chair-times.jpg" alt="" />
        <p>
          ¿Sabías que un objeto tan común como la silla ha tenido tantas
          variedades y cambios en la historia?
        </p>
        <div>
          <p>Baja para conocer algunas de las más famosas</p>
          <?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.05 48.21">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        stroke: #1d1d1b;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }
    </style>
  </defs>
  <g id="Capa_1-2" data-name="Capa 1">
    <polyline class="cls-1" points="1.22 23.71 29.88 45.75 62.94 23.71"/>
    <polyline class="cls-1" points="1.22 12.69 29.88 34.73 62.94 12.69"/>
    <polyline class="cls-1" points="1.22 1.66 29.88 23.71 62.94 1.66"/>
  </g>
</svg>
        </div>
      </header>
      {ages.map((d, i) => {
        if (i === 0 || i % 2 === 0) {
          if (i === ages.length - 1) {
            return (
              <EraContainer data={data.etapas[d]} direction="left" key={d} />
            );
          }
          return (
            <figure key={d}>
              <EraContainer data={data.etapas[d]} direction="left" />
              <LeftToRight />
            </figure>
          );
        } else {
          if (i === ages.length - 1) {
            return (
              <EraContainer data={data.etapas[d]} direction="right" key={d} />
            );
          }
          return (
            <figure key={d}>
              <EraContainer data={data.etapas[d]} direction="right" />
              <RightToLeft />
            </figure>
          );
        }
      })}

      <footer>
        <h3>Fuentes:</h3>
        <p>
          Anderson, I. F. (Julio de 2018). Reconsiderando la historia del diseño
          de sillas y otros muebles. Actas de diseño, 25, 75-86. Buenos Aires,
          Argentina: Universidad de Palermo. Recuperado el 11 de Noviembre de
          2023
        </p>
      </footer>
    </>
  );
}

export default App;
