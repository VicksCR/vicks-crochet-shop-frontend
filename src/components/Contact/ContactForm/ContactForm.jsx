import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Formulario enviado:", formData);

    // aquí luego puedes conectar EmailJS o backend

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="contactForm__container">
      <h2 className="contactForm__title">O Escríbeme un mensaje</h2>

      <form className="contactForm__form" onSubmit={handleSubmit}>
        <label className="contactForm__label">
          Nombre
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contactForm__input"
            required
          />
        </label>

        <label className="contactForm__label">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contactForm__input"
            required
          />
        </label>

        <label className="contactForm__label">
          Mensaje
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contactForm__textarea"
            rows="4"
            required
          />
        </label>

        <button type="submit" className="contactForm__button">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
