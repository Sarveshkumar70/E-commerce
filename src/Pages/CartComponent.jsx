import React, { useState } from "react";
import { GrSubtractCircle } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";
import { useCart } from "../Components/CartContextComponent";
import OrderSummary from "../Components/OrderSummary";

function CartComponent() {
  const { cart, removeFromCart,handleQuantityIncrement,handleQuantityDecrement } = useCart();
  
  const tableHeadData=["Sr no.","Product Img","Product Name","Quantity","Price","Total","Action"]

  const handleDecrement =(itemQty,itemId)=>{
    console.log(itemQty);
    handleQuantityDecrement(itemId)
    if (itemQty<=1) {
      removeFromCart(itemId)
    }
  }
  return (
    <>
      <h2 className="text-3xl text-center  mx-auto my-5 ">Shopping cart</h2>
      <div className="w-[95%]  mx-auto shadow-md">
        <table className=" w-[100%]">
          {/* table head data */}
          <thead>
            <tr>
              {
                tableHeadData.map((item,index)=>(<th key={index} className=" py-5 px-1 bg-gray-300">{item}</th>))
              }
            </tr>
          </thead>
          {/* table body data */}
          <tbody>
            {cart?.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center text-2xl py-5">
                  Cart is Empty
                </td>
              </tr>
            ) : (
              cart?.map((item, index) => {
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
                        <GrSubtractCircle size={22} 
                        onClick={()=>handleDecrement(item.Qty,item.id)} />
                        {item.Qty}
                        <RiAddCircleLine size={25} onClick={()=>handleQuantityIncrement(item.id)} />
                      </div>
                    </td>
                    {/* Price */}
                    <td className=" p-2 text-center">
                      $ {Math.floor(item.price)}
                    </td>
                    {/* Total */}
                    <td className=" p-2 text-center">
                      $ {(item.Qty)*Math.floor(item.price)}
                    </td>
                    {/* remove from cart */}
                    <td className=" p-2 text-center">
                      <RiDeleteBin5Fill
                        className="mx-auto hover:scale-110"
                        size={25}
                        color="red"
                        onClick={() => removeFromCart(item.id)}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Order Summary */}
      <div className="flex justify-end px-6 pt-10" >
      <OrderSummary />
      </div>
   

    </>
  );
}

export default CartComponent;
