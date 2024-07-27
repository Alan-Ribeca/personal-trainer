import { useState } from "react";
import "./comprar.scss";

export const Comprar = () => {
  const [clase, setClase] = useState("elegida");

  const handleClick = (tipo) => {
    setClase(tipo);
  };

  return (
    <>
      <h3 className="titleCompra">Echa un vistazo a los planes</h3>
      <p className="textoCompra">Tendras acceso a...</p>
      <div className="containerCompra">
        <div className="containerCard">
          <div
            className={`card izquierda ${
              clase === "elegidaIzquierda" ? "elegida" : ""
            }`}
            onClick={() => handleClick("elegidaIzquierda")}
          >
            <div className="logos">
              <img src="./img/svgHombre.png" alt="svg del torso de un hombre" />
              <h4 className="titleCard">Plan Mensual</h4>
              <img src="./img/svgMujer.png" alt="svg del torso de una mujer" />
            </div>
            <p className="price">$500</p>
            <strong className="acceso">Contaras con</strong>
            <div className="lista">
              <ul>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">1 mes de acompañamiento</p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">
                    Plan de entrenamiento personalizado durante 1 mes
                  </p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">Acompañamiento vía Whatsapp</p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">Proceso de reevaluación mensual</p>
                </li>
                <li>
                  <strong className="no">❌</strong>
                  <p className="textoLi">Feedback semanal</p>
                </li>
                <li>
                  <strong className="no">❌</strong>
                  <p className="textoLi">Evaluación presencial</p>
                </li>
                <li>
                  <strong className="no">❌</strong>
                  <p className="textoLi">Actualizacion de entrenamiento</p>
                </li>
                <li>
                  <strong className="no">❌</strong>
                  <p className="textoLi">1 consulta con un nutricionista </p>
                </li>
              </ul>
              <button className="btnComprar">QUIERO ESTE PLAN</button>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <div
            className={`card medio ${clase === "elegida" ? "elegida" : ""}`}
            onClick={() => handleClick("elegida")}
          >
            <div className="logos">
              <img src="./img/svgHombre.png" alt="svg del torso de un hombre" />
              <h4 className="titleCard">Plan Trimestral</h4>
              <img src="./img/svgMujer.png" alt="svg del torso de una mujer" />
            </div>
            <p className="price">$899</p>
            <strong className="acceso">Contaras con</strong>
            <div className="lista">
              <ul>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">1 mes de acompañamiento</p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">
                    Plan de entrenamiento personalizado durante 1 mes
                  </p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">Acompañamiento vía Whatsapp</p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">Proceso de reevaluación mensual</p>
                </li>
                <li>
                  <strong className="no">✅</strong>
                  <p className="textoLi">Feedback semanal</p>
                </li>
                <li>
                  <strong className="no">✅</strong>
                  <p className="textoLi">Evaluación presencial</p>
                </li>
                <li>
                  <strong className="no">❌</strong>
                  <p className="textoLi">Actualizacion de entrenamiento</p>
                </li>
                <li>
                  <strong className="no">❌</strong>
                  <p className="textoLi">1 consulta con un nutricionista </p>
                </li>
              </ul>
              <button className="btnComprar">QUIERO ESTE PLAN</button>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <div
            className={`card derecha ${
              clase === "elegidaDerecha" ? "elegida" : ""
            }`}
            onClick={() => handleClick("elegidaDerecha")}
          >
            <div className="logos">
              <img src="./img/svgHombre.png" alt="svg del torso de un hombre" />
              <h4 className="titleCard">Plan Simestral</h4>
              <img src="./img/svgMujer.png" alt="svg del torso de una mujer" />
            </div>
            <p className="price">$1499</p>
            <strong className="acceso">Contaras con</strong>
            <div className="lista">
              <ul>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">1 mes de acompañamiento</p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">
                    Plan de entrenamiento personalizado durante 1 mes
                  </p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">Acompañamiento vía Whatsapp</p>
                </li>
                <li>
                  <strong className="ok">✅</strong>
                  <p className="textoLi">Proceso de reevaluación mensual</p>
                </li>
                <li>
                  <strong className="no">✅</strong>
                  <p className="textoLi">Feedback semanal</p>
                </li>
                <li>
                  <strong className="no">✅</strong>
                  <p className="textoLi">Evaluación presencial</p>
                </li>
                <li>
                  <strong className="no">✅</strong>
                  <p className="textoLi">Actualizacion de entrenamiento</p>
                </li>
                <li>
                  <strong className="no">✅</strong>
                  <p className="textoLi">1 consulta con un nutricionista </p>
                </li>
              </ul>
              <button className="btnComprar">QUIERO ESTE PLAN</button>
            </div>
          </div>
        </div>
        <div className="barra"></div>
      </div>
    </>
  );
};
