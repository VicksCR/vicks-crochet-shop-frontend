import FooterColumn from "./FooterColumn/FooterColumn.jsx";
import logo from "../../assets/images/logoVCR-nobackg.png";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import facebookIcon from "../../assets/icons/facebook-logo.svg";
import instagramIcon from "../../assets/icons/insta-color-logo.svg";
import tiktokIcon from "../../assets/icons/tiktok-logo.svg";
import "./Footer.css";

export default function Footer() {
  const contactInfo = {
    phone: "+1 234 567 890",
    email: "info@victoriacastro.com",
  };
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logo} alt="Logo VCR" className="footer__logo" />

        <FooterColumn title="Atención al cliente" id="customer-service">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Preguntas frecuentes
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Política de devoluciones
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Envíos y entregas
              </a>
            </li>
          </ul>
        </FooterColumn>

        <FooterColumn title="Contáctanos" id="contact">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="tel:+1234567890" className="footer__link">
                <img
                  src={phoneIcon}
                  alt="Icono de teléfono"
                  className="footer__contact-icon"
                />
                Teléfono: +1 234 567 890
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__link"
              href={`mailto:${contactInfo.email}`}>
                <img
                  src={emailIcon}
                  alt="Icono de correo electrónico"
                  className="footer__contact-icon"
                />
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </FooterColumn>

        <FooterColumn title="Redes Sociales" id="social-media">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://facebook.com/..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Logotipo de Facebook"
                  className="footer__social-icon"
                />
                Facebook
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://instagram.com/..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Logotipo de Instagram"
                  className="footer__social-icon"
                />
                Instagram
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://tiktok.com/..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tiktokIcon}
                  alt="Logotipo de TikTok"
                  className="footer__social-icon"
                />
                TikTok
              </a>
            </li>
          </ul>
        </FooterColumn>
      </div>

      <p className="footer__copyright">© 2025 Victoria Castro Reyes.</p>
    </footer>
  );
}
