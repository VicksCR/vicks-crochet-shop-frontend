import "./AboutButtons.css";

export default function AboutButtons() {
  return (
    <div className="aboutButtons">
      <h3 className="aboutButtons__title">
        ¿Te gustaría tener una pieza personalizada?
      </h3>
      <p className="aboutButtons__subtitle">
        Explora el catálogo o contáctame para crear algo único para ti.
      </p>
      <div className="aboutButtons__btn-container">
        <button className="aboutButtons__btn aboutButtons__catalog">
          Ver catálogo
        </button>
        <button className="aboutButtons__btn aboutButtons__order">
          Ordenar pieza
        </button>
      </div>
    </div>
  );
}
