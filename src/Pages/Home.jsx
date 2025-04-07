import React from "react";
import SliderComponent from "../Components/SliderComponent.jsx";
import Categories from "../Components/Categories.jsx";
import ProductComponent from "../Components/ProductComponent.jsx";
import Footer from "../Components/Footer.jsx";
import ScrollProgress from "../Components/ScrollProgress.jsx";

export default function Home() {
  return (
    <>

      {/* slider */}
      <main className="">
        <SliderComponent />

        {/* categories */}
        <Categories />

        {/* Product data */}
        <ProductComponent />
      </main>
    </>
  );
}
