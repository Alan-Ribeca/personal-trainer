import { Acceso } from "./components/acceso/Acceso";
import { Comprar } from "./components/Comprar/Comprar";
import { Entrenador } from "./components/entrenador/Entrenador";
import { Preguntas } from "./components/preguntas/Preguntas";
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
      <Comprar />
      <Entrenador />
      <Preguntas />
    </>
  );
}

export default App;
