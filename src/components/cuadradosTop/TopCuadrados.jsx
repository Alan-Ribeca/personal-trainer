import "./cuadrados.scss";

export const TopCuadrados = () => {
  return (
    <>
      <section className="cuadradoContainer">
        <div className="cuadrado uno">
          <div className="desenfocado"></div>
          <img
            src="../public/img/pesa.png"
            alt="svg de una mancuerna"
            className="imgSvg"
          />
          <h3 className="titleCuadrado">Pesas</h3>
          <p className="textoCuadrado">
            Entrenamiento personalizado con pesas para fortalecer todo tu cuerpo
            y alcanzar tus objetivos de fitness.
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
            plan de ejercicio a tu medida, diseñado para ayudarte a alcanzar tus
            metas de forma segura y efectiva. Ya sea que busques tonificar,
            ganar músculo o mejorar tu resistencia
          </p>
        </div>
        <div className="cuadrado tres">
          <div className="desenfocado"></div>
          <div className="cuadrado tres">
            <img
              src="../public/img/tricepss.png"
              alt="svg de una mancuerna"
              className="imgSvg"
            />
            <h3 className="titleCuadrado">Fuerza</h3>
            <p className="textoCuadrado">
              Descubre el poder de un entrenamiento efectivo y consigue unos
              brazos definidos y musculosos
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
