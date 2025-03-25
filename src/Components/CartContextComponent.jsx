import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CardContext = createContext();

export default function CartContextComponent({ children }) {
  // state for cart data - if there is data in localStorage then get it otherwise set it empty []
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  // setting data in local storage
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);


  // fn for add to cart functionality
  function addToCart(product) {
    toast.success("Product added to Cart");
    // if product already exits in cart increment its quantity
    if (cart.some((item) => item.id === product.id)) {
      handleQuantityIncrement(product.id);
      return;
    }
    // else add it to cart
    setCart((prev) => [...prev, product]);
  }

  // fn for removing from cart by id
  function removeFromCart(id) {
    toast.error("Product Removed");
    setCart((prev) => prev.filter((data) => data.id !== id));
  }

  // handling increment and decrement for quantity in cart
  function handleQuantityIncrement(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, Qty: item.Qty + 1 } : item
      )
    );
  }
  function handleQuantityDecrement(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, Qty: item.Qty - 1 } : item
      )
    );
  }


  // same functionality for whislist
  const [whislist, setWhislist] = useState(
    JSON.parse(localStorage.getItem("whistlistData")) || []
  );

  // setting data in local storage
  useEffect(() => {
    localStorage.setItem("whistlistData", JSON.stringify(whislist));
  }, [whislist]);

  // fn for add to cart functionality
  function addToWhislist(product) {
    toast.success("Product added to WhisList");
    setWhislist((prev) => [...prev, product]);
  }

  // fn for removing from cart by id
  function removeFromWhisList(id) {
    toast.error("Product Removed from Whislist");
    setWhislist((prev) => prev.filter((data) => data.id !== id));
  }

  return (
    <>
      <CardContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          whislist,
          addToWhislist,
          removeFromWhisList,
          handleQuantityIncrement,
          handleQuantityDecrement,
        }}
      >
        {children}
      </CardContext.Provider>
    </>
  );
}

export const useCart = () => useContext(CardContext);
