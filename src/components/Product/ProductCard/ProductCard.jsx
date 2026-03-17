import "./ProductCard.css";

export default function ProductCard({
  product,
  onOpenPopup,
  onToggleLike,
  isLiked,
}) {
  const open = () => onOpenPopup(product);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onToggleLike(product.id);
  };

  const handleMoreClick = (e) => {
    e.stopPropagation();
    open();
  };

  return (
    <div className="productCard">
      {/* 1) Click en imagen abre popup */}
      <img
        className="productCard__image"
        src={`/imagesCatalog/${product.image}`}
        alt={product.alt}
        onClick={open}
        role="button"
        tabIndex={0}
      />

      {/* 2) Click en el contenedor de texto abre popup */}
      <div className="productCard__group">
        <h3
          className="productCard__name"
          onClick={open}
          role="button"
          tabIndex={0}
        >
          {product.name}
        </h3>
        <p
          className="productCard__price"
          onClick={open}
          role="button"
          tabIndex={0}
        >
          {product.price}
          {/*{new Intl.NumberFormat("en-USD", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}*/}
        </p>

        <div className="productCard__btn-container">
          {/* 3) Click en “Ver más” abre popup */}
          <button
            className="productCard__btn-more-info"
            type="button"
            onClick={handleMoreClick}
          >
            Ver más
          </button>

          {/* Like toggle */}
          <button
            type="button"
            className={`productCard__btn-like ${isLiked ? "productCard__btn-like_active" : ""}`}
            onClick={handleLikeClick}
            aria-pressed={isLiked}
            aria-label={isLiked ? "Quitar de favoritos" : "Agregar a favoritos"}
          />
        </div>
      </div>
    </div>
  );
}
