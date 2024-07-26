import "./entrenador.scss";
export const Entrenador = () => {
  return (
    <section className="entrenador">
      <div className="presentacion">
        <h3 className="titleProfe">¿Quien va a ser tu entrenador?</h3>
        <p className="textoProfe">
          {" "}
          Hola soy Miguel Arzamendia, un entrenador personal certificado con mas de 8
          años de experiencia, y estoy aquí para ayudarte a lograr los
          resultados que siempre has deseado.
        </p>
        <p className="textoProfe">
          Mi enfoque se centra en ti. Te proporcionaré la motivación y el apoyo
          que necesitas para superar tus límites y alcanzar nuevas metas.
        </p>
        <p className="textoProfe">
          Ofrezco sesiones tanto presenciales como online, adaptándome a tu
          horario y preferencias. No importa dónde te encuentres, podemos
          trabajar juntos para alcanzar tus objetivos.
        </p>
        <p className="textoProfe">
          Mi compromiso es ayudarte a ver resultados tangibles. Ya sea que
          quieras perder peso, ganar masa muscular, mejorar tu resistencia o
          simplemente sentirte mejor contigo mismo, estoy aquí para guiarte en
          cada paso del camino.
        </p>
      </div>
      <img
        src="./img/entrenadorSInn.png"
        alt="img del entrenador"
        className="imgEntrenador"
      />
      <div className="barra"></div>
    </section>
  );
};
