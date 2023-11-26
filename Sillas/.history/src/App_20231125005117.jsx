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
          <a className="blinker" href={`#${data.etapas[ages[0]].nombre}`}>
            <svg
              fill="#ffffff"
              width="64px"
              height="64px"
              viewBox="0 0 24.00 24.00"
              id="triple-down-sign"
              data-name="Flat Line"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.048"></g>
              <g id="SVGRepo_iconCarrier">
                <polyline
                  id="primary"
                  points="5 8.5 12 15.5 19 8.5"
                  style={{
                    fill: "none",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}></polyline>
                <polyline
                  id="primary-2"
                  data-name="primary"
                  points="19 14 12 21 5 14"
                  style={{
                    fill: "none",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}></polyline>
                <polyline
                  id="primary-3"
                  data-name="primary"
                  points="5 3 12 10 19 3"
                  style={{
                    fill: "none",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}></polyline>
              </g>
            </svg>
          </a>
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
