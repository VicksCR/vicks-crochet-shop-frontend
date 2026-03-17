import { useState } from "react";
import "./CustomOrderForm.css";

export default function CustomOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productType: "",
    description: "",
    deadline: "",
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

    console.log("Solicitud personalizada:", formData);

    setFormData({
      name: "",
      email: "",
      productType: "",
      description: "",
      deadline: "",
    });
  }

  return (
    <section className="customOrder__container">
      <form className="customOrder__form" onSubmit={handleSubmit}>
        <label className="customOrder__label">
          Nombre
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="customOrder__label">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="customOrder__label">
          Tipo de pieza
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
          >
            <option value="">Selecciona aquí</option>
            <option value="amigurumi">Amigurumi</option>
            <option value="pasta">Pasta francesa</option>
            <option value="decoracion">Decoración</option>
            <option value="otro">Otro</option>
          </select>
        </label>

        <label className="customOrder__label">
          Descripción
          <textarea
            name="description"
            placeholder="Describe tu idea"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label className="customOrder__label">
          Fecha de entrega
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enviar solicitud</button>
      </form>
    </section>
  );
}
