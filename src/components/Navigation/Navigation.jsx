import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const customClassName = ({ isActive }) => {
    return "navigation__link" + (isActive ? " navigation__link_active" : "");
  };
  return (
    <nav className="navigation">
      <NavLink to="/" className={customClassName}>
        Inicio
      </NavLink>
      <NavLink to="/products" className={customClassName}>
        Productos
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        Sobre mí
      </NavLink>
      <NavLink to="/contact" className={customClassName}>
        Contacto
      </NavLink>
    </nav>
  );
}
