import Intro from "../../components/Intro/Intro.jsx";
import Products from "../../components/Product/Products/Products.jsx";
import { products } from "../../data/productsApi.js";

export default function Home() {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3); // Limitar a 3 productos destacados

  return (
    <>
      <Intro />
      <Products
        title="Productos Destacados"
        productsList={featuredProducts}
        sectionId="products"
        showCatalogLink={true}
      />
    </>
  );
}

//EJEMPLO BASE NO OFICIAL A FUTURO
/*import Products from "../../components/Products/Products";

export default function Home({ onProductClick }) {
  return (
    <main className="content">
      <section className="intro">
        <h1>Hecho a mano con amor</h1>
      </section>

      <Products onProductClick={onProductClick} />
    </main>
  );
}*/
