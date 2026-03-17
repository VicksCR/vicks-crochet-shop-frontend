import Popup from "../../Popup/Popup";
import CartIcon from "../../../assets/icons/cart-icon.svg";
import "./ProductPopup.css";

export default function ProductPopup({
  product,
  onToggleLike,
  isLiked,
  onClose,
}) {
  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (product) {
      onToggleLike(product.id);
    }
  };

  return (
    <Popup isOpen={!!product} onClose={onClose}>
      {product && (
        <>
          <img
            className="productPopup__image"
            src={`/imagesCatalog/${product.image}`}
            alt={product.alt}
          />
          <h3 className="productPopup__name">{product.name}</h3>
          <p className="productPopup__description">{product.description} </p>
          <p className="productPopup__size">Tamaño: {product.size}</p>
          <p className="productPopup__category">
            Categoria: {product.category}
          </p>
          <p className="productPopup__price">Precio: {product.price}</p>
          {/*
            <a
        href={`https://wa.me/123456789?text=Hola quiero ordenar ${product.name}`}
        target="_blank"
      >
        Ordenar por WhatsApp
      </a>
    </Popup>
          */}
          <div className="productPopup__container-btns">
            <button
              className="productPopup__btn"
              aria-label={`Añadir ${product.name} al carrito`}
            >
              Añadir al carrito
              <img
                className="productPopup__cart-icon"
                src={CartIcon}
                alt="Icono de carrito de compras"
              />
              {/*<button onClick={() => addToCart(product)}>
  Añadir al carrito
</button>*/}
            </button>
            {/* Like toggle */}
            <button
              className="productPopup__btn"
              onClick={handleLikeClick}
              aria-pressed={isLiked}
              aria-label={
                isLiked
                  ? `Quitar ${product.name} de favoritos`
                  : `Añadir ${product.name} a favoritos`
              }
            >
              Añadir a favoritos
              <span
                className={`productPopup__like-icon ${
                  isLiked ? "productPopup__like-icon_active" : ""
                }`}
              />
            </button>
          </div>
        </>
      )}
    </Popup>
  );
}
