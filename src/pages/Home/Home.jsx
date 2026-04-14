import Intro from "../../components/Intro/Intro.jsx";
import Products from "../../components/Product/Products/ProductsSection.jsx";
import { products } from "../../data/products.js";

export default function Home({ likedIds, setLikedIds }) {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

  return (
    <>
      <Intro />
      <Products
        title="Productos Destacados"
        productsList={featuredProducts}
        likedIds={likedIds}
        setLikedIds={setLikedIds}
        sectionId="products"
        showCatalogLink={true}
      />
    </>
  );
}
