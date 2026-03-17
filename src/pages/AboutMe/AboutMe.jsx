import AboutHero from "../../components/About/AboutHero/AboutHero";
import AbourtValues from "../../components/About/AboutValues/AboutValues";
import AboutProducts from "../../components/About/AboutProducts/AboutProducts";
import AboutButtons from "../../components/About/AboutButtons/AboutButtons";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="aboutMe__container">
      <AboutHero />

      <section className="aboutMe__values-products-container">
        <AbourtValues />
        <AboutProducts />
      </section>

      <AboutButtons />
    </section>
  );
}
