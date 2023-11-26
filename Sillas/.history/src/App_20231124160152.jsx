import Navbar from "./components/Navbar";
import data from "./data/data.json";

function App() {
  const ages = Object.keys(data.etapas);
  console.log(ages);
  return (
    <>
      <Navbar />
      <header>
        <h1>Historia de la silla</h1>
        <img src="" alt="" />
        <p>
          ¿Sabías que un objeto tan común como la silla ha tenido tantas
          variedades y cambios en la historia?
        </p>
        <div>
          <p>Baja para conocer algunas de las más famosas</p>
          <figure>V</figure>
        </div>
      </header>
      {
        // data.etapas.map()
      }
    </>
  );
}

export default App;
