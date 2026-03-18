import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader/Preloader.jsx";
import Products from "../../components/Product/Products/ProductsSection.jsx";
import { getProducts, transformProducts } from "../../utils/api.js";
//import { products as localProducts } from "../../data/products.js";

export default function ProductsCatalog({ likedIds, setLikedIds }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(localProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const formatted = transformProducts(data.products);
        setProducts(formatted);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <section className="products-catalog__container" id="products-catalog">
      <Products
        title="Catálogo de Productos"
        productsList={products}
        /*sectionId="products-catalog"*/
        likedIds={likedIds}
        setLikedIds={setLikedIds}
      />
    </section>
  );
}
