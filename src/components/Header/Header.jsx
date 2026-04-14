import logo from "../../assets/images/logoVCR-nobackg.png";
import line from "../../assets/images/linea-logofinal.png";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img
            src={logo}
            alt="Vicks'Creative Room Logo"
            className="header__logo"
          />
        </Link>
        <img src={line} alt="" className="header__line" />
        <div className="header__navigation">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
