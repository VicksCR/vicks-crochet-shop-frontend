import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import CustomOrderForm from "../../components/Contact/CustomOrderForm/CustomOrderForm";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";
//import ContactInfo from "../../components/Contact/ContactInfo"

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact__title">Contacto</h1>
      <h2 className="contact__subtitle">¿Tienes una idea en mente?</h2>
      <ContactHero />
      {/*formulario*/}
      <CustomOrderForm />
      <ContactForm />
      {/*formulario
      <ContactInfo />*/}

      <h3 className="contact__subtitle">Tambien puedes contactarme en:</h3>
    </div>
  );
}
