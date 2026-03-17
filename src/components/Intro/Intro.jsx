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
          {/*} En Chacharitas VCR, nos apasiona el arte del tejido y la creación de
            hermosas piezas hechas a mano. Aquí encontrarás todo lo que
            necesitas para dar vida a tus ideas creativas. Echale un vistazo a
            nuestro catálogo de productos o ordena ya tu pieza totalmente
            personalizada.*/}
          Piezas únicas hechas con amor y dedicación para ti.
        </p>

        <div className="intro__btn-container">
          <button type="button" className="intro__btn intro__btn-catalog">
            Ver catálogo
          </button>
          <button type="button" className="intro__btn intro__btn-order">
            Ordena tu pieza personalizada
          </button>
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
