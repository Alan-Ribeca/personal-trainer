import "./acceso.scss";
import { Card } from "./Card";

export const Acceso = () => {
  return (
    <>
      <section className="acceso">
        <h3 className="titleAcceso">Acceso exclusivo</h3>
        <p className="pAcceso">Tendras acceso a...</p>

        <div className="cuadrados">
          <Card texto={"Plan de entrenamiento personalizado"} />
          <Card texto={"Atención individualizada"} />
          <Card texto={"Técnica y forma correctas"} />
          <Card texto={"Motivación constante"} />
          <Card texto={"Monitoreo de progreso"} />
          <Card texto={"Educación en fitness"} />
          <Card texto={"Flexibilidad de horarios"} />
          <Card texto={"Resultados más rápidos"} />
        </div>
      </section>

      <section className="pasos">
        <h3 className="titlePasos">Con solo 6 pasos</h3>
        <p className="texPasos">Conseguiras el cuerpo que deseas</p>

        <div className="container">
          <div className="cuadradoPasos">
            <p className="texto">
              Evaluación inicial y establecimiento de objetivos.
            </p>
          </div>
          <div className="cuadradoPasos">
            <p className="texto">Plan de dieta y entrenamiento personalizado</p>
          </div>
          <div className="cuadradoPasos">
            <p className="texto">Ejecución del plan bajo supervisión</p>
          </div>
          <div className="cuadradoPasos">
            <p className="texto">Ajuste de rutina cada determinado tiempo</p>
          </div>
          <div className="cuadradoPasos">
            <p className="texto">Entrenamiento motivacional constante</p>
          </div>
          <div className="cuadradoPasos">
            <p className="texto">Celebrando logros y nuevas metas</p>
          </div>
        </div>
        <hr className="barra" />
      </section>
    </>
  );
};
