import "./AboutProducts.css";
const crochet = "/imagesCatalog/ramo-personalizado-crochet.png";
const pasta = "/imagesCatalog/pasta.jpg";
const custom = "/imagesCatalog/custom-pasta.png";
const decor = "/imagesCatalog/decoraciones.jpg";
export default function AboutProducts() {
  return (
    <section className="aboutProducts">
      <h2 className="aboutProducts__title">
        Qué puedes encontrar en Vicks' Creative Room
      </h2>

      <div className="aboutProducts__grid">
        <article className="aboutProducts__card">
          <img
            className="aboutProducts__image"
            src={crochet}
            alt="Amigurumis hechos a mano"
          />
          <div className="aboutProducts__overlay">
            <span className="aboutProducts__tag">CROCHET</span>
            <h3 className="aboutProducts__name">Amigurumis hechos a mano</h3>
          </div>
        </article>

        <article className="aboutProducts__card">
          <img
            className="aboutProducts__image"
            src={pasta}
            alt="Figuras de pasta francesa"
          />
          <div className="aboutProducts__overlay">
            <span className="aboutProducts__tag">ARTE</span>
            <h3 className="aboutProducts__name">Figuras de pasta francesa</h3>
          </div>
        </article>

        <article className="aboutProducts__card">
          <img
            className="aboutProducts__image"
            src={custom}
            alt="Regalos personalizados"
          />
          <div className="aboutProducts__overlay">
            <span className="aboutProducts__tag">PERSONALIZADO</span>
            <h3 className="aboutProducts__name">Regalos personalizados</h3>
          </div>
        </article>

        <article className="aboutProducts__card">
          <img
            className="aboutProducts__image"
            src={decor}
            alt="Decoraciones únicas"
          />
          <div className="aboutProducts__overlay">
            <span className="aboutProducts__tag">DECORACION</span>
            <h3 className="aboutProducts__name">Decoraciones únicas</h3>
          </div>
        </article>
      </div>
    </section>
  );
}
