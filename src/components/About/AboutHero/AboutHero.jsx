import profile from "../../../assets/images/perfil.jpg";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <div className="aboutHero__container">
      <img
        className="aboutHero__image"
        src={profile}
        alt="Imagen de Victoria, la artista detrás de Vicks"
      />
      <div className="aboutHero__story">
        <h1 className="aboutHero__title">Sobre mí</h1>
        <h3 className="aboutHero__subtitle">
          Hola, gracias por entrar a mi cuarto creativo!
        </h3>
        <p>
          Mi nombre es Victoria, aunque muchas personas me conocen como Vicks.
          Soy artista plástica y tengo un gran amor por el arte, la creatividad
          y, sobre todo, por crear cosas con mis propias manos.
        </p>

        <p>
          Lo que comenzó como un momento de calidad con mi mamá, cuando me
          enseñó a tejer, terminó convirtiéndose en Vicks' Creative Room.
        </p>

        <p>
          Mi objetivo es crear piezas que no solo sean visualmente atractivas,
          sino que también transmitan emociones y tengan un significado especial
          para quienes las reciben.
        </p>
      </div>
    </div>
  );
}
