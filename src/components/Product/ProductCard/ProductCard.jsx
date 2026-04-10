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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      open();
    }
  };

  const imageSrc = product.image.startsWith("http")
    ? product.image
    : `/imagesCatalog/${product.image}`;

  return (
    <div className="productCard">
      <img
        className="productCard__image"
        src={imageSrc}
        alt={product.alt}
        onClick={open}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      />

      <div className="productCard__group">
        <h3
          className="productCard__name"
          onClick={open}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          {product.name}
        </h3>

        <p
          className="productCard__price"
          onClick={open}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          {product.price}
        </p>

        <div className="productCard__btn-container">
          <button
            className="productCard__btn-more-info"
            type="button"
            onClick={handleMoreClick}
          >
            Ver más
          </button>

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
