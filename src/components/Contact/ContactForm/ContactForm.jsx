import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      setSubmitMessage("Por favor introduce un email válido.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitMessage("");

      console.log("Formulario enviado:", formData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSubmitMessage("Mensaje enviado con éxito");
    } catch (error) {
      console.error(error);
      setSubmitMessage("Error al enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contactForm__container">
      <h2 className="contactForm__title">O Escríbeme un mensaje</h2>

      <form className="contactForm__form" onSubmit={handleSubmit}>
        <div className="contactForm__grid">
          <label className="contactForm__label">
            <span className="contactForm__label-text">Nombre</span>
            <input
              className="contactForm__input"
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contactForm__label">
            <span className="contactForm__label-text">Email</span>
            <input
              className="contactForm__input"
              type="email"
              name="email"
              placeholder="tucorreo@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contactForm__label contactForm__label_full">
            <span className="contactForm__label-text">Mensaje</span>
            <textarea
              className="contactForm__input contactForm__textarea"
              name="message"
              placeholder="Ecribe aquí tu comentario, duda o reseña"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="contactForm__submit-btn"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Enviando.." : "Enviar mensaje"}
        </button>

        {submitMessage && (
          <p className="contactForm__message">{submitMessage}</p>
        )}
      </form>
    </section>
  );
}
