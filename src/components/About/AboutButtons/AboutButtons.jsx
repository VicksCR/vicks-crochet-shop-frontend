import { Link } from "react-router-dom";
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
        <Link
          to="/products"
          className="aboutButtons__btn aboutButtons__catalog"
        >
          Ver catálogo
        </Link>
        <Link
          to="/contact#custom-order-form"
          className="aboutButtons__btn aboutButtons__order"
        >
          Ordenar pieza
        </Link>
      </div>
    </div>
  );
}
