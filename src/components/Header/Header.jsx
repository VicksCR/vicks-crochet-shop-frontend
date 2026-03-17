import logo from "../../assets/images/logoVCR-nobackg.png";
import line from "../../assets/images/linea-logofinal.png";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export default function Header({
  isLoggedIn,
  userEmail,
  onLogout,
  showRegisterLink,
  showLoginLink,
}) {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src={logo}
          alt="Vicks'Creative Room Logo"
          className="header__logo"
        />
        {/*<div className="header__user-info">
          {isLoggedIn && (
            <>
              <p className="header__email">{userEmail}</p>
              <button className="header__logout-button" onClick={onLogout}>
                Cerrar sesión
              </button>
            </>
          )}
          {showRegisterLink && (
            <Link to="/signup" className="header__logout-button">
              Regístrate{" "}
            </Link>
          )}
          {showLoginLink && (
            <Link to="/signin" className="header__logout-button">
              Iniciar sesión{" "}
            </Link>
          )}
        </div>*/}
        <img src={line} alt="Line" className="header__line" />
        <section className="navigation">
          <Navigation />
        </section>
      </div>
    </header>
  );
}

//REVISAR AUN NO ESTA TERMINADO
//Falta lo del carrito de compras pero eso al final para ver si se puede hacer o no
