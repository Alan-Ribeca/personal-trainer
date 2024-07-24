import "./cuadrados.scss";

export const TopCuadrados = () => {
  return (
    <>
      <section className="cuadradoContainer">
        <div className="cuadrado uno">
          <img
            src="../public/img/pesa.png"
            alt="svg de una mancuerna"
            className="imgSvg"
          />
          <h3 className="titleCuadrado">Entrenamiento</h3>
          <p className="textoCuadrado">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            repellat porro eveniet modi, voluptatem nihil consequatur possimus
            quidem error
          </p>
        </div>
        <div className="cuadrado dos">
          <img
            src="../public/img/press.png"
            alt="svg de una mancuerna"
            className="imgSvg"
          />
          <h3 className="titleCuadrado">Entrenamiento</h3>
          <p className="textoCuadrado">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            repellat porro eveniet modi, voluptatem nihil consequatur possimus
            quidem error
          </p>
        </div>
        <div className="cuadrado tres">
          <img
            src="../public/img/tricepss.png"
            alt="svg de una mancuerna"
            className="imgSvg"
          />
          <h3 className="titleCuadrado">Entrenamiento</h3>
          <p className="textoCuadrado">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            repellat porro eveniet modi, voluptatem nihil consequatur possimus
            quidem error
          </p>
        </div>
      </section>
    </>
  );
};
