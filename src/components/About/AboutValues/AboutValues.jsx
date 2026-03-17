import "./AboutValues.css";

export default function AboutValues() {
  return (
    <div className="aboutValues__container">
      <h2 className="aboutValues__title">Mis valores</h2>
      <ul className="aboutValues__list">
        <li className="aboutValues__value">
          <h3>🧶 Hecho a mano</h3>
          <p>
            Cada pieza está elaborada cuidadosamente con tiempo y dedicación.
          </p>
        </li>

        <li className="aboutValues__value">
          <h3>💜 Creatividad</h3>
          <p>Me encanta experimentar con nuevas ideas, colores y materiales.</p>
        </li>

        <li className="aboutValues__value">
          <h3>🎁 Piezas únicas</h3>
          <p>Muchas de mis creaciones pueden personalizarse.</p>
        </li>

        <li className="aboutValues__value">
          <h3>🌸 Hecho con amor</h3>
          <p>Cada proyecto nace con la intención de hacer feliz a alguien.</p>
        </li>
      </ul>
    </div>
  );
}
