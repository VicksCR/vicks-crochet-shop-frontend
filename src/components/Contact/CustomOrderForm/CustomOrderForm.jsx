import { useState, useEffect } from "react";
import { createProduct } from "../../../utils/ThirdPartyApi";
import { transformProducts } from "../../../utils/transformProducts";
import "./CustomOrderForm.css";

export default function CustomOrderForm() {
  const initialFormData = {
    name: "",
    email: "",
    productType: "",
    description: "",
    deadline: "",
    budget: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [referenceImages, setReferenceImages] = useState([]);
  const [imageError, setImageError] = useState("");
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

  function handleImageChange(e) {
    const files = Array.from(e.target.files || []);

    setImageError("");
    setSubmitMessage("");

    if (files.length > 3) {
      setImageError("Puedes adjuntar un máximo de 3 imágenes de referencia.");
      e.target.value = "";
      return;
    }

    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));
    setReferenceImages(imagePreviews);
  }

  function removeImage(indexToRemove) {
    setReferenceImages((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  }

  useEffect(() => {
    return () => {
      referenceImages.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, []);

  function validateForm() {
    if (!formData.name || !formData.email || !formData.description) {
      return "Por favor completa los campos obligatorios.";
    }

    if (!emailRegex.test(formData.email)) {
      return "Por favor introduce un email válido.";
    }

    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setSubmitMessage(validationError);
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitMessage("");

      const orderData = {
        title: `Pedido de ${formData.name}`,
        description: formData.description,
        category: formData.productType || "custom",
        price: Number(formData.budget.replace(/\D/g, "")) || 50,
        email: formData.email,
        deadline: formData.deadline,
        referenceImages: referenceImages.map((img) => img.name),
      };

      const res = await createProduct(orderData);

      const formatted = transformProducts([res])[0];
      console.log("Producto transformado:", formatted);

      setSubmitMessage("Pedido enviado con éxito");
      setFormData(initialFormData);
      setReferenceImages([]);
    } catch (err) {
      console.error(err);
      setSubmitMessage("Lo sentimos, algo ha salido mal. Inténtalo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="customOrder__container" id="custom-order-form">
      <div className="customOrder__header">
        <h2 className="customOrder__title">Hablemos de tu próxima pieza</h2>
        <p className="customOrder__text">
          Comparte los detalles de la pieza o piezas que imaginas. Puedes
          adjuntar hasta 3 imágenes de referencia para ayudarme a entender mejor
          tu pedido.
        </p>
      </div>
      <form className="customOrder__form" onSubmit={handleSubmit} noValidate>
        <div className="customOrder__grid">
          <label className="customOrder__label">
            <span className="customOrder__label-text">Nombre</span>
            <input
              className="customOrder__input"
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="customOrder__label">
            <span className="customOrder__label-text">Email</span>
            <input
              className="customOrder__input"
              type="email"
              name="email"
              placeholder="tucorreo@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="customOrder__label">
            <span className="customOrder__label-text">Tipo de pieza</span>
            <select
              className="customOrder__input customOrder__select"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="amigurumi">Amigurumi</option>
              <option value="pasta">Pasta francesa</option>
              <option value="decoracion">Regalo Personalizado</option>
              <option value="otro">Otro</option>
            </select>
          </label>

          <label className="customOrder__label">
            <span className="customOrder__label-text">
              Fecha ideal de entrega
            </span>
            <input
              className="customOrder__input"
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
          </label>

          <label className="customOrder__label customOrder__label_full">
            <span className="customOrder__label-text">
              Presupuesto aproximado
            </span>
            <input
              className="customOrder__input"
              type="text"
              name="budget"
              placeholder="Ej. $30 - $50"
              value={formData.budget}
              onChange={handleChange}
            />
          </label>

          <label className="customOrder__label customOrder__label_full">
            <span className="customOrder__label-text">Descripción</span>
            <textarea
              className="customOrder__input customOrder__textarea"
              name="description"
              placeholder="Describe tu idea: personaje, colores, tamaño, ocasión especial, detalles importantes..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>

          <label className="customOrder__label customOrder__label_full">
            <span className="customOrder__label-text">
              Imágenes de referencia
            </span>
            <input
              className="customOrder__input customOrder__file-input"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              multiple
              onChange={handleImageChange}
            />
            <span className="customOrder__help">
              Puedes subir hasta 3 imágenes.
            </span>
          </label>
        </div>

        {imageError && <p className="customOrder__error">{imageError}</p>}

        {referenceImages.length > 0 && (
          <div className="customOrder__preview-grid">
            {referenceImages.map((image, index) => (
              <div className="customOrder__preview-card" key={image.name}>
                <img
                  className="customOrder__preview-image"
                  src={image.preview}
                  alt={`Referencia ${index + 1}`}
                />
                <button
                  className="customOrder__remove-btn"
                  type="button"
                  onClick={() => removeImage(index)}
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="customOrder__actions">
          <button
            className="customOrder__submit-btn"
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar solicitud"}
          </button>
        </div>

        {submitMessage && (
          <p
            className={`customOrder__message ${
              submitMessage.includes("éxito") ? "success" : "error"
            }`}
          >
            {submitMessage}
          </p>
        )}
      </form>
    </section>
  );
}
