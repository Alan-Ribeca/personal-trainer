import { Acceso } from "./components/acceso/Acceso";
// import { Comprar } from "./components/Comprar/Comprar";
import { Recomendaciones } from "./components/recomendaciones/Recomendaciones";
import { Resultados } from "./components/resultados/Resultados";
import { Top } from "./components/top/Top";
import "./css/App.scss";

function App() {
  return (
    <>
      <Top />
      <Acceso />
      <Resultados />
      <Recomendaciones />
      {/* <Comprar /> */}
    </>
  );
}

export default App;
