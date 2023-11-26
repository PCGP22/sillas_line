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
          <EraContainer data={data.etapas[ages[i]]} direction="left" />
        );
        break;
      }
      containers.push(
        <>
          <EraContainer data={data.etapas[ages[i]]} direction="left" />
          <LeftToRight />
        </>
      );
    } else {
      if (i === ages.length - 1) {
        containers.push(
          <EraContainer data={data.etapas[ages[i]]} direction="right" />
        );
        break;
      }
      containers.push(
        <>
          <EraContainer data={data.etapas[ages[i]]} direction="right" />
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
    </>
  );
}

export default App;
