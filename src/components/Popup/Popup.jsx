import { useEffect } from "react";
import "./Popup.css";

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
