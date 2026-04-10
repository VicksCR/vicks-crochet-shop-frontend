import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsSection.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import ProductPopup from "../ProductPopup/ProductPopup.jsx";

export default function Products({
  title,
  productsList,
  sectionId = "products",
  showCatalogLink = false,
  likedIds,
  setLikedIds,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const handleToggleLike = (productId) => {
    setLikedIds((prev) => {
      const next = new Set(prev);

      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  };

  return (
    <section className="products__container" id={sectionId}>
      <h2 className="products__container-title">{title}</h2>
      <section className="products__grid">
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenPopup={handleOpenPopup}
            onToggleLike={handleToggleLike}
            isLiked={likedIds.has(product.id)}
          />
        ))}
      </section>

      <div className="products__catalog-link-container">
        {showCatalogLink && (
          <Link to="/products" className="products__catalog-link">
            Descubre más creaciones de nuestro catálogo &gt;
          </Link>
        )}
      </div>

      <ProductPopup
        product={selectedProduct}
        onClose={handleClosePopup}
        onToggleLike={handleToggleLike}
        isLiked={selectedProduct ? likedIds.has(selectedProduct.id) : false}
      />
    </section>
  );
}
