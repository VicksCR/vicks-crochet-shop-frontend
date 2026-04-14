import { Link } from "react-router-dom";
import "./Intro.css";
import IntroImage from "../../assets/images/conejito-intro.png";

export default function Intro() {
  return (
    <section className="intro__catalog-order" id="intro-catalog">
      <div className="intro__info-btn-container">
        <h1 className="intro__title">
          ¡Hecho a mano <span>con amor!</span>
        </h1>

        <p className="intro__paragraph">
          Piezas únicas hechas con amor y dedicación para ti.
        </p>

        <div className="intro__btn-container">
          <Link to="/products" className="intro__btn intro__btn-catalog">
            Ver catálogo
          </Link>
          <Link
            to="/contact#custom-order-form"
            className="intro__btn intro__btn-order"
          >
            Ordena tu pieza personalizada
          </Link>
        </div>
      </div>

      <img
        src={IntroImage}
        alt="Imagen principal de conejo a crochet"
        className="intro__background-image"
      />
    </section>
  );
}
