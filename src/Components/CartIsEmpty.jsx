import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CartIsEmpty() {
  const navigate = useNavigate();

  // start shopping
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className=" my-15 flex justify-center items-center flex-col gap-2 bg-gray-200
            py-10">
        <div className="flex items-center pt-5 gap-5">
          <FaCartShopping className="text-8xl" />
          <p className="text-lg" >Your cart is Empty</p>
        </div>
        <p className="text-lg" >Looks like you haven't added any products to you cart yet</p>
        <button
          onClick={handleClick}
          className="mt-8 py-2 px-3 rounded-[12px] bg-blue-600 text-white
              hover:bg-blue-700 cursor-pointer">
          Start Shopping
        </button>
      </div>
    </>
  );
}

export default CartIsEmpty;
