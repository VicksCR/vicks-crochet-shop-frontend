import { useEffect } from "react";
import "./Popup.css";

//puede faltar variant = "", revisar popup del proyecto 18 pa ver que falta con respecto a esto
export default function Popup({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) {
      onClose();
    }
  };

  if (!isOpen) return null;
  /* PARA VARIANTES DE POPUP COMO REGISTER O LOGIN, SE PUEDE AGREGAR UNA CLASE CON EL NOMBRE DE LA VARIANTE AL CONTENEDOR DEL POPUP, Y LUEGO USAR CSS PARA DARLE ESTILOS ESPECÍFICOS A CADA VARIANTE. POR EJEMPLO:
  const containerClass = `popup__container 
    ${variant ? `popup__container-${variant}` : ""} 
    ${!title ? "popup__container-image" : ""}
  `.trim();
  */
  return (
    <div
      className={`popup ${isOpen ? "popup__opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__container" role="dialog" aria-modal="true">
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
          aria-label="Cerrar/Close pop-up window"
        >
          X
        </button>
        {title && <h2 className="popup__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
