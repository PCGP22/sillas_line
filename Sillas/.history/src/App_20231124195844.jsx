import Navbar from "./components/Navbar";
import data from "./data/data.json";
import LeftChair from "./components/LeftChairs";
import RightChair from "./components/RightChairs";
import RightToLeft from "./components/RightToLeft";
import LeftToRight from "./components/LeftToRight";

function App() {
  const ages = Object.keys(data.etapas);
  console.log(ages);
  let containers = [];
  for (let i = 0; i < ages.length; i++) {
    if (i === 0 || i % 2 === 0) {
      if (i === ages.length - 1) {
        containers.push(<LeftChair data={data.etapas[ages[i]]} />);
        break;
      }
      containers.push(
        <>
          <LeftChair data={data.etapas[ages[i]]} />
          <LeftToRight />
        </>
      );
    } else {
      if (i === ages.length - 1) {
        containers.push(<RightChair data={data.etapas[ages[i]]} />);
        break;
      }
      containers.push(
        <>
          <RightChair data={data.etapas[ages[i]]} />
          <RightToLeft />
        </>
      );
    }
  }
  return (
    <>
      <Navbar />
      <header>
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
