import { useState } from "react";
//import reactLogo from "./assets/react.svg"; //Eliminar, usar de ejemplo
import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  BrowserRouter,
} from "react-router-dom";

/*import * as auth from "../utils/auth.js";
import api from "../utils/api.js";
*/
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import Main from "../Main/Main.jsx";
import Home from "../../pages/Home/Home.jsx";
import ProductsCatalog from "../../pages/Products-Catalog/Products-Catalog.jsx";
import AboutMe from "../../pages/AboutMe/AboutMe.jsx";
import Contact from "../../pages/Contact/Contact.jsx";

/*



import Products from "./Products/Products.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";

import Login from "../components/Main/components/Login/Login.jsx"; //SI DA TIMEPO
import Register from "../components/Main/components/Register/Register.jsx"; //SI DA TIEMPO
import InfoToolTip from "../components/Main/components/InfoToolTip/InfoToolTip.jsx";
import Preloader from "../components/Preloader/Preloader.jsx"; //TALVEZ NO VA AQUI
import ProtectedRoute from "../components/Main/components/ProtectedRoute/ProtectedRoute.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
//REVISAR QUE RUTAS SI VAN AQUI Y CUALES NO
//REVISAR SI browserRouter VA AQUI O EN main.jsx
*/
function App() {
  /*const [cart, setCart] = useState([]);
  
function addToCart(product) {
  setCart((prev) => [...prev, product]);
}
  */

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Home />
            </Main>
          }
        />
        <Route
          path="/products"
          element={
            <Main>
              <ProductsCatalog />
            </Main>
          }
        />
        <Route
          path="/about-me"
          element={
            <Main>
              <AboutMe />
            </Main>
          }
        />
        <Route
          path="/contact"
          element={
            <Main>
              <Contact />
            </Main>
          }
        />
        {/*
          /* Rutas para login y registro, si se implementan 
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} /> 
          */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

//EJEMPLO A FUTURO
/*import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";

import ProductPopup from "./components/ProductPopup/ProductPopup";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  function closeAllPopups() {
    setSelectedProduct(null);
  }

  return (
    <div className="app">
      <Header />

      <Home onProductClick={handleProductClick} />

      <ProductPopup
        product={selectedProduct}
        onClose={closeAllPopups}
      />

      <Footer />
    </div>
  );
}

export default App;*/
