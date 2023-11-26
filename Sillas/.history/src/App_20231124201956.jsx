import Navbar from "./components/Navbar";
import data from "./data/data.json";
import EraContainer from "./components/EraContainer";
import RightToLeft from "./components/RightToLeft";
import LeftToRight from "./components/LeftToRight";

function App() {
  const ages = Object.keys(data.etapas);
  let containers = [];
  for (let i = 0; i < ages.length; i++) {
    if (i === 0 || i % 2 === 0) {
      if (i === ages.length - 1) {
        containers.push(
          <EraContainer
            data={data.etapas[ages[i]]}
            direction="left"
            key={data.nombre}
          />
        );
        break;
      }
      containers.push(
        <>
          <EraContainer
            data={data.etapas[ages[i]]}
            direction="left"
            key={data.nombre}
          />
          <LeftToRight />
        </>
      );
    } else {
      if (i === ages.length - 1) {
        containers.push(
          <EraContainer
            data={data.etapas[ages[i]]}
            direction="right"
            key={data.nombre}
          />
        );
        break;
      }
      containers.push(
        <>
          <EraContainer
            data={data.etapas[ages[i]]}
            direction="right"
            key={data.nombre}
          />
          <RightToLeft />
        </>
      );
    }
  }
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
      {containers.map((d) => d)}
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
