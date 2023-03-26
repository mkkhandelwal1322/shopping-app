import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom"
import HomeImage from "./components/home/HomeImage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductDisplay from "./components/products/ProductDisplay";
import { productList } from "./redux/product/productAction";
import PageNotFound from "./components/not found/PageNotFound";
import Shop from "./components/products/Shop";
import Cart from "./components/cart/Cart";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch<any>(productList());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
   <>
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomeImage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/shop/:id"
          element={
            <>
              <Navbar />
              <ProductDisplay />
              <Footer />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Navbar />
              <Shop />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
   </>
  );
}

export default App;
