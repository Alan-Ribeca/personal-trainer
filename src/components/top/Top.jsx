import { TopCuadrados } from "../cuadradosTop/TopCuadrados";
import "./top.scss";

export const Top = () => {
  return (
    <>
      <header className="header">
        <img
          src="../public/img/img2.jpg"
          alt="persona en el gym"
          className="imgFondo"
        />
        <div className="contenedor">
          <h1 className="title">
            Alcanza tu mejor version con coaching personalizado
          </h1>
          <p className="texto">
            Soy Miguel, tu futuro personal trainer. ¿Estás listo para
            transformar tu vida con entrenamientos personalizados hechos a tu
            medida?{" "}
            <strong className="textoComenzar">¡Vamos a comenzar!</strong>
          </p>
          <button className="comenzarAhora">Comenzar ahora</button>
        </div>
        <TopCuadrados />
        <div className="barra"></div>
      </header>
    </>
  );
};
