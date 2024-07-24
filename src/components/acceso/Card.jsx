/* eslint-disable react/prop-types */
import "./card.scss";

export const Card = ({texto}) => {
  return (
    <div className="cardContainer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="svg"
      >
        <path
          fill="#43A047"
          d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
        ></path>
      </svg>

      <p className="tex">{texto}</p>
    </div>
  );
};
