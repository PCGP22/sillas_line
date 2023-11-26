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
        <img
          src="https://uncrate.com/p/2020/05/vitra-chair-times.jpg"
          alt=""
          height={400}
        />
        <p>
          ¿Sabías que un objeto tan común como la silla ha tenido tantas
          variedades y cambios en la historia?
        </p>
        <div>
          <p>Baja para conocer algunas de las más famosas</p>
          <figure>V</figure>
        </div>
      </header>
      {ages.map((d, i) => {
        if (i === 0 || i % 2 === 0) {
          if (i === ages.length - 1) {
            return (
              <EraContainer
                data={data.etapas[d]}
                direction="left"
                key={data.nombre}
              />
            );
          }
          return (
            <figure key={data.nombre}>
              <EraContainer data={data.etapas[d]} direction="left" />
              <LeftToRight />
            </figure>
          );
        } else {
          if (i === ages.length - 1) {
            return (
              <EraContainer
                data={data.etapas[d]}
                direction="right"
                key={data.nombre}
              />
            );
          }
          return (
            <figure key={data.nombre}>
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
