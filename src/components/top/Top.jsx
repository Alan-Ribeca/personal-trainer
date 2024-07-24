import { TopCuadrados } from "../cuadradosTop/TopCuadrados";
import "./top.scss";

export const Top = () => {
  return (
    <>
      <header className="header">
        <img src="../public/img/img2.jpg" alt="persona en el gym" className="imgFondo" />
        <div className="contenedor">
          <h1 className="name">
            Miguel <strong className="apellido">Arzamendia</strong>
          </h1>
          <h2 className="title">
            Alcanza tu mejor version con coaching personalizado
          </h2>
          <p className="texto">
            Ofrezco entrenamiento personalizado adaptado a tus objetivos.
            Juntos, crearemos un plan unico para que alcances tus metas de forma
            efectiva. ¡Transforma tu vida conmigo!
          </p>
          <button className="comenzarAhora">Comenzar ahora</button>
        </div>
        <TopCuadrados />
      </header>
    </>
  );
};
