import React, { useState } from "react";
import { GrSubtractCircle } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";
import { useCart } from "../Components/CartContextComponent";
import OrderSummary from "../Components/OrderSummary";
import RecommendationInCart from "../Components/RecommendationInCart";
import CartIsEmpty from "../Components/CartIsEmpty";

function CartComponent() {

  // using context
  const {
    cart,
    removeFromCart,
    handleQuantityIncrement,
    handleQuantityDecrement,
  } = useCart();

  const tableHeadData = [
    "Sr no.",
    "Product Img",
    "Product Name",
    "Quantity",
    "Price",
    "Total",
    "Action",
  ];

  // if item is less than zero in cart remove item from cart
  const handleDecrement = (itemQty, itemId) => {
    handleQuantityDecrement(itemId);
    if (itemQty <= 1) {
      removeFromCart(itemId);
    }
  };

  return (
    <>
      {/* Heading */}
      <div className="bg-gray-200 text-center py-3  ">
        <h2 className="text-5xl  mx-auto  my-2">Your Shopping cart</h2>
        <p className="text-lg py-2">Review your items and proceed to checkout</p>
      </div>

      {/* if cart is not empty show table and order Summary else show Cart is empty */}
      {cart?.length > 0 ? (
        <>
        {/* Table */}
          <div className="w-[95%]  mx-auto shadow-md mt-10">
            <table className=" w-[100%]">
              {/* table head data */}
              <thead>
                <tr>
                  {tableHeadData.map((item, index) => (
                    <th key={index} className=" py-5 px-1 bg-gray-300">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              {/* table body data */}
              <tbody>
                {cart?.map((item, index) => {
                  return (
                    <tr key={item.id} className="hover:bg-gray-100">
                      {/* index */}
                      <td className=" p-2 text-center">{index + 1}</td>
                      {/* img */}
                      <td className=" p-2 text-center">
                        <div className=" w-[50px] h-[50px] mx-auto">
                          <img
                            src={item.image}
                            className="object-contain w-full h-full rounded-4xl"
                            alt="product img"
                          />
                        </div>
                      </td>
                      {/* name */}
                      <td className=" p-2 text-center">{item.title}</td>
                      {/* quantity btn */}
                      <td className=" p-2 text-center">
                        <div className="flex items-center justify-center gap-3 ">
                          <GrSubtractCircle
                            size={22}
                            className="cursor-pointer"
                            onClick={() => handleDecrement(item.Qty, item.id)}
                          />
                          {item.Qty}
                          <RiAddCircleLine
                            size={25}
                            className="cursor-pointer"
                            onClick={() => handleQuantityIncrement(item.id)}
                          />
                        </div>
                      </td>
                      {/* Price */}
                      <td className=" p-2 text-center">
                        $ {Math.floor(item.price)}
                      </td>
                      {/* Total */}
                      <td className=" p-2 text-center">
                        $ {item.Qty * Math.floor(item.price)}
                      </td>
                      {/* remove from cart */}
                      <td className=" p-2 text-center">
                        <RiDeleteBin5Fill
                          className="mx-auto hover:scale-110 cursor-pointer"
                          size={25}
                          color="red"
                          onClick={() => removeFromCart(item.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
                {/* )} */}
              </tbody>
            </table>
          </div>
          {/* Order Summary */}
          <div className="flex justify-end px-6 pt-10">
            <OrderSummary />
          </div>
        </>
      ) : (
        // showing cart is empty on else
       <CartIsEmpty/>
      )}

      <RecommendationInCart />
    </>
  );
}

export default CartComponent;
