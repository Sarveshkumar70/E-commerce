import React from "react";
import "./App.css";
import Home from "./Pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import CartComponent from "./Pages/CartComponent.jsx";
import Whislist from "./Pages/Whislist.jsx";
import LogIn from "./Pages/LogIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SearchProducts from "./Components/SearchProducts.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Routes that use Navbar,scrollbar and footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<CartComponent />}></Route>
          <Route path="/Whistlist" element={<Whislist />}></Route>
          <Route path="/SearchProducts" element={<SearchProducts />}></Route>
          <Route path="/productDetail" element={<ProductDetail />}></Route>
        </Route>

        {/* Routes w/o Navbar & Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/SignUP" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
