import { useState, useEffect, use } from "react";
import { getProducts } from "../../utils/ThirdPartyApi.js";
import { transformProducts } from "../../utils/transformProducts.js";
import { products as localProducts } from "../../data/products.js";
import {
  ERROR_MESSAGE,
  PRODUCTS_STORAGE_KEY,
  LIKES_STORAGE_KEY,
} from "../../utils/constants";

import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import Main from "../Main/Main.jsx";
import Home from "../../pages/Home/Home.jsx";
import ProductsCatalog from "../../pages/ProductsCatalog/ProductsCatalog.jsx";
import AboutMe from "../../pages/AboutMe/AboutMe.jsx";
import Contact from "../../pages/Contact/Contact.jsx";

function App() {
  const [likedIds, setLikedIds] = useState(() => {
    try {
      const savedLikes = localStorage.getItem(LIKES_STORAGE_KEY);
      if (!savedLikes) return new Set();

      const parsed = JSON.parse(savedLikes);

      return Array.isArray(parsed) ? new Set(parsed) : new Set();
    } catch (error) {
      console.error("Error parsing likedIds from localStorage:", error);
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify([...likedIds]));
  }, [likedIds]);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);

    if (savedProducts) {
      const parsedProducts = JSON.parse(savedProducts);
      setProducts(parsedProducts);
      setIsLoading(false);
      return;
    }

    loadProducts();
  }, []);

  function loadProducts() {
    setIsLoading(true);
    setError("");

    getProducts()
      .then((data) => {
        const formattedProducts = transformProducts(data.products);

        setProducts(formattedProducts);
        localStorage.setItem(
          PRODUCTS_STORAGE_KEY,
          JSON.stringify(formattedProducts),
        );
      })
      .catch((err) => {
        console.error(err);

        const fallbackProducts = transformProducts(localProducts);

        setProducts(fallbackProducts);
        setError(ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={<Home likedIds={likedIds} setLikedIds={setLikedIds} />}
          />
          <Route
            path="/products"
            element={
              <ProductsCatalog
                likedIds={likedIds}
                setLikedIds={setLikedIds}
                products={products}
                isLoading={isLoading}
                error={error}
              />
            }
          />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
