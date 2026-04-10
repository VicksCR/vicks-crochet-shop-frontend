import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import CustomOrderForm from "../../components/Contact/CustomOrderForm/CustomOrderForm";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";
//import ContactInfo from "../../components/Contact/ContactInfo"
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact__container">
      <h1 className="contact__title">Contacto</h1>
      <ContactHero />
      <CustomOrderForm />
      <ContactForm />
      {/*formulario
      <ContactInfo />*/}

      <h3 className="contact__subtitle">Tambien puedes contactarme en:</h3>
    </div>
  );
}
