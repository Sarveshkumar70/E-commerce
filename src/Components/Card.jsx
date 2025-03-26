import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useCart } from "./CartContextComponent";
import WordSplit from "./WordSplit";

export default function Card(props) {
  const { id, title, price, image } = props.item;

  // using context
  const { addToCart, addToWhislist,whislist,removeFromWhisList } = useCart();

  // finding if whislist item already exists in whistCart 
  const whislistIcon = whislist.some((item)=>(item.id === id))

  // adding and removing from whislist
  const handleWhislist = () => {
    if (whislistIcon) {
      removeFromWhisList(id)
      return
    }
    else{
      addToWhislist({ id, title, price, image, Qty: 1 });
    }
  };

  return (
    <>
      <div
        className="w-[80%]  sm:w-[75%]  lg:w-[85%] h-[85%] mt-5 py-8 flex justify-center items-center flex-col gap-2 rounded-2xl  
        hover:shadow-md bg-gray-200 hover:shadow-blue-900 mx-auto transition-all duration-300
        relative"
      >
        {/* img div */}
        <div className="w-[150px] h-[150px]  xl:w-[200px] xl:h-[200px]  overflow-hidden p-5 bg-white rounded-full  ">
          <img
            src={image}
            className="object-contain w-full h-full rounded-full"
            alt=""/>
        </div>

        {/* whislist icon */}
        <span
          className="absolute top-7 right-6 hover:scale-115 bg-white p-1 rounded-full hover:cursor-pointer"
          onClick={()=>handleWhislist()}>
          <FaHeart color={whislistIcon?"red":"black"} />
        </span>

        {/* text div */}
        <div className="w-[95%] flex justify-center items-center flex-col gap-2">
          <h4 className="text-sm sm:text-lg font-mono text-center ">
            <WordSplit title={title} />
          </h4>
          <div className="flex justify-between">
            <div className="text-lg font-bold">
              {`$ ${price.toFixed(0)}`}{" "}
              <span className="line-through text-sm font-semibold text-gray-600">
                {`$ ${(price + 10).toFixed(0)}`}
              </span>
            </div>
          </div>

          {/* Add to cart btn */}
          <button
            type="button"
            className="w-[55%] text-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mx-2 mb-2 hover:cursor-pointer"
            onClick={() => addToCart({ id, title, price, image, Qty: 1 })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
