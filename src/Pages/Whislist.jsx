import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useCart } from "../Components/CartContextComponent";

function CartComponent() {
  const { whislist, removeFromWhisList ,addToCart} = useCart();

  const tableHead = ["Sr no.","Product Img","Product Name","Add To Cart","Price","Action"]

  return (
    <>
      <h2 className="text-3xl text-center  mx-auto my-5">Whislist</h2>
      <div className="w-[98%]  mx-auto">
        <table className=" w-[100%]">
          <thead>
            {/* mapping over table head */}
            <tr>
              {
                tableHead.map((item,index)=>{
                  return <th key={index} className=" py-5 px-2 bg-gray-300">{item}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {/* mapping over table body data */}
            {whislist?.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-2xl py-5">
                  WhisList is Empty
                </td>
              </tr>
            ) : (
              whislist?.map((item, index) => {
                return (
                  <tr key={item.id} className="hover:bg-gray-100" >
                    <td className=" p-2 text-center">{index + 1}</td>
                    <td className=" p-2 text-center">
                      <div className=" w-[50px] h-[50px] mx-auto">
                        <img
                          src={item.image}
                          className="object-contain w-full h-full rounded-4xl"
                          alt="product img"/>
                      </div>
                    </td>
                    <td className=" p-2 text-center">{item.title}</td>
                    {/* add to cart btn */}
                    <td className=" p-2 text-center">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"   onClick={()=>addToCart(item)}>Add to cart</button>
                    </td>
                    <td className=" p-2 text-center">{`$ ${item.price}`}</td>
                    <td className=" p-2 text-center">
                       <RiDeleteBin5Fill
                        className="mx-auto hover:scale-110"
                        size={25}
                        color="red"
                        onClick={() => removeFromWhisList(item.id)}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CartComponent;
