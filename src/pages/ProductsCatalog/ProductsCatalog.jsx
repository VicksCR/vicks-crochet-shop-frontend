import { useState } from "react";
import "./ProductsCatalog.css";
import Preloader from "../../components/Preloader/Preloader.jsx";
import Products from "../../components/Product/Products/ProductsSection.jsx";

export default function ProductsCatalog({
  likedIds,
  setLikedIds,
  products,
  isLoading,
  error,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + 3);
  }

  const visibleProducts = products.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < products.length;

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <section className="productsCatalog__container" id="products-catalog">
      {error && <p className="productsCatalog__message">{error}</p>}

      {!isLoading && !error && products.length === 0 && (
        <p className="productsCatalog__message">No se ha encontrado nada</p>
      )}

      {products.length > 0 && (
        <>
          <Products
            title="Catálogo de Productos"
            productsList={visibleProducts}
            likedIds={likedIds}
            setLikedIds={setLikedIds}
          />
          {hasMoreProducts && (
            <div className="productsCatalog__btn-wrapper">
              <button
                type="button"
                className="productsCatalog__btn"
                onClick={handleShowMore}
              >
                Mostrar más
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
