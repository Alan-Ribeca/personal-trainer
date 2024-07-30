import "./recomendaciones.scss";

export const Recomendaciones = () => {
  const recomendaciones = [
    {
      id: 1,
      img: "./img/reco5.jpg",
      name: "John Doe",
      username: "joni_doe",
      text: "Miguel es un entrenador personal increíble. ¡Me ayudó a transformar mi rutina de ejercicios!",
    },
    {
      id: 2,
      img: "./img/reco1.jpg",
      name: "Sarah Lee",
      username: "sari_lee",
      text: "Miguel es el mejor entrenador personal con el que he trabajado. ¡Es muy motivador!",
    },
    {
      id: 3,
      img: "./img/reco6.jpg",
      name: "Mike Smith",
      username: "mike_smith",
      text: "Gracias a Miguel, me siento más fuerte y saludable que nunca. ¡Lo recomiendo mucho!",
    },
    {
      id: 4,
      img: "./img/reco2.jpg",
      name: "Emma Wilson",
      username: "emma_wilson",
      text: "Gracias a Miguel, he alcanzado mis metas de fitness más rápido de lo que pensé posible.",
    },
    {
      id: 5,
      img: "./img/reco7.jpg",
      name: "James Johnson",
      username: "james_johnson",
      text: "Las sesiones de entrenamiento de Miguel son fantásticas. Sabe cómo llevarte al límite.",
    },
    {
      id: 6,
      img: "./img/reco3.jpg",
      name: "Olivia Martin",
      username: "olivia_martin",
      text: "La experiencia de Miguel en entrenamiento físico es incomparable. ¡Lo recomiendo mucho!",
    },
    {
      id: 7,
      img: "./img/reco8.jpg",
      name: "David Brown",
      username: "david_brown",
      text: "He visto grandes resultados desde que empecé con Miguel. ¡Es el mejor!",
    },
    {
      id: 8,
      img: "./img/reco4.jpg",
      name: "Ava Jones",
      username: "ava_jones",
      text: "Entrenar con Miguel ha cambiado las reglas del juego para mí. ¡Es realmente el mejor!",
    },
    {
      id: 9,
      img: "./img/reco5.jpg",
      name: "John Doe",
      username: "joni_doe",
      text: "Miguel es un entrenador personal increíble. ¡Me ayudó a transformar mi rutina de ejercicios!",
    },
    {
      id: 10,
      img: "./img/reco1.jpg",
      name: "Sarah Lee",
      username: "sari_lee",
      text: "Miguel es el mejor entrenador personal con el que he trabajado. ¡Es muy motivador!",
    },
    {
      id: 11,
      img: "./img/reco6.jpg",
      name: "Mike Smith",
      username: "mike_smith",
      text: "Gracias a Miguel, me siento más fuerte y saludable que nunca. ¡Lo recomiendo mucho!",
    },
    {
      id: 12,
      img: "./img/reco2.jpg",
      name: "Emma Wilson",
      username: "emma_wilson",
      text: "Gracias a Miguel, he alcanzado mis metas de fitness más rápido de lo que pensé posible.",
    },
    {
      id: 13,
      img: "./img/reco7.jpg",
      name: "James Johnson",
      username: "james_johnson",
      text: "Las sesiones de entrenamiento de Miguel son fantásticas. Sabe cómo llevarte al límite.",
    },
    {
      id: 14,
      img: "./img/reco3.jpg",
      name: "Olivia Martin",
      username: "olivia_martin",
      text: "La experiencia de Miguel en entrenamiento físico es incomparable. ¡Lo recomiendo mucho!",
    },
    {
      id: 15,
      img: "./img/reco8.jpg",
      name: "David Brown",
      username: "david_brown",
      text: "He visto grandes resultados desde que empecé con Miguel. ¡Es el mejor!",
    },
    {
      id: 16,
      img: "./img/reco4.jpg",
      name: "Ava Jones",
      username: "ava_jones",
      text: "Entrenar con Miguel ha cambiado las reglas del juego para mí. ¡Es realmente el mejor!",
    },
  ];

  return (
    <>
      <article className="slider">
        <div className="slideContainer">
          {recomendaciones.map(({ id, img, name, username, text }) => {
            return (
              <div className="slide" key={id}>
                <div className="containerImg">
                  <img src={img} alt="perfil de una persona" />
                  <div className="info">
                    <h4 className="name">{name}</h4>
                    <p className="usuario">@{username}</p>
                  </div>
                </div>
                <p className="textoReco">{text}</p>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};
