import Products from "../../components/Product/Products/Products.jsx";
import { products } from "../../data/productsApi.js";

export default function ProductsCatalog() {
  return (
    <section className="products-catalog__container" id="products-catalog">
      <Products
        title="Catálogo de Productos"
        productsList={products}
        sectionId="products-catalog"
      />
    </section>
  );
}
