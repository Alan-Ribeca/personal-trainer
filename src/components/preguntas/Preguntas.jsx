import { useState } from "react";
import "./preguntas.scss";

export const Preguntas = () => {
  const [liAbierto, setLiAbierto] = useState(false);

  const handleClick = (id) => {
    setLiAbierto((prevId) => (prevId === id ? false : id));
  };

  return (
    <article className="preguntasContainer">
      <h3 className="titlePreguntas">
        <strong className="titleVerde">Preguntas</strong> Frecuentes
      </h3>
      <ul className="ulPre">
        <li
          id="1"
          className={`preg ${liAbierto === "1" ? "liAbierto" : ""}`}
          onClick={() => handleClick("1")}
        >
          ¿Cómo personalizo mi plan de entrenamiento?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="flechaPreg"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <div className="textPreg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sint excepturi dolorem deserunt facere. Iure impedit eligendi hic
              aut atque omnis voluptates, magni, esse doloribus saepe rem quo
              tenetur fuga!
            </p>
          </div>
        </li>
        <li
          id="2"
          className={`preg ${liAbierto === "2" ? "liAbierto" : ""}`}
          onClick={() => handleClick("2")}
        >
          ¿Cuál es el horario para consultas?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="flechaPreg"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <div className="textPreg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sint excepturi dolorem deserunt facere. Iure impedit eligendi hic
              aut atque omnis voluptates, magni, esse doloribus saepe rem quo
              tenetur fuga!
            </p>
          </div>
        </li>
        <li
          id="3"
          className={`preg ${liAbierto === "3" ? "liAbierto" : ""}`}
          onClick={() => handleClick("3")}
        >
          ¿Cuándo empezaré a ver los resultados de mi entrenamiento?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="flechaPreg"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <div className="textPreg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sint excepturi dolorem deserunt facere. Iure impedit eligendi hic
              aut atque omnis voluptates, magni, esse doloribus saepe rem quo
              tenetur fuga!
            </p>
          </div>
        </li>
        <li
          id="4"
          className={`preg ${liAbierto === "4" ? "liAbierto" : ""}`}
          onClick={() => handleClick("4")}
        >
          ¿Es posible ajustar mi plan después del comienzo?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="flechaPreg"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <div className="textPreg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sint excepturi dolorem deserunt facere. Iure impedit eligendi hic
              aut atque omnis voluptates, magni, esse doloribus saepe rem quo
              tenetur fuga!
            </p>
          </div>
        </li>
        <li
          id="5"
          className={`preg ${liAbierto === "5" ? "liAbierto" : ""}`}
          onClick={() => handleClick("5")}
        >
          ¿Necesito equipo especial para seguir los planes?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="flechaPreg"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <div className="textPreg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sint excepturi dolorem deserunt facere. Iure impedit eligendi hic
              aut atque omnis voluptates, magni, esse doloribus saepe rem quo
              tenetur fuga!
            </p>
          </div>
        </li>
        <li
          id="6"
          className={`preg ${liAbierto === "6" ? "liAbierto" : ""}`}
          onClick={() => handleClick("6")}
        >
          ¿Por qué el plan anual no está disponible?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="flechaPreg"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <div className="textPreg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sint excepturi dolorem deserunt facere. Iure impedit eligendi hic
              aut atque omnis voluptates, magni, esse doloribus saepe rem quo
              tenetur fuga!
            </p>
          </div>
        </li>
        <li
          id="7"
          className={`preg ${liAbierto === "7" ? "liAbierto" : ""}`}
          onClick={() => handleClick("7")}
        >
          ¿Cómo se evalúa y comunica el progreso?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="flechaPreg"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <div className="textPreg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sint excepturi dolorem deserunt facere. Iure impedit eligendi hic
              aut atque omnis voluptates, magni, esse doloribus saepe rem quo
              tenetur fuga!
            </p>
          </div>
        </li>
      </ul>

      <button className="comenzarAhora">Comenzar ahora</button>
    </article>
  );
};
