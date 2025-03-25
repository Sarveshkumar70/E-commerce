import React from 'react'
import { useCart } from './CartContextComponent'

function OrderSummary() {
  const {cart} = useCart()
  

  // calculating total priceValue in cart
  const totalValue = cart.reduce((accumulator,currentVal)=>(
    accumulator+= currentVal.Qty*Math.floor(currentVal.price)
  ),0)
  
  // calculating total qunatity of products for tax generation
  const taxVal=cart.reduce((acc,currVal)=>(acc+=currVal.Qty),0)

  // order data
  const orderDetailData = [
    {id:1,heading:"SubTotal",Value:Math.floor(totalValue)},
    {id:2,heading:"Shipping",Value:0},
    {id:3,heading:"Tax",Value:(taxVal *2)},
  ]

  // total in ending
  const total = orderDetailData.reduce((acc,curVal)=>(acc+=curVal.Value),0)
    
  return (
    <>
       <div className=" flex flex-col gap-4 w-[400px] shadow-md" >
        <h2 className='bg-gray-300 text-center py-3 text-xl font-bold' >Order Summary</h2> 
        {
          orderDetailData.map((item)=>(
            <div key={item.id} className='flex justify-between w-[85%]  mx-auto' >
            <span className='text-lg text-gray-600'>{item.heading}</span>
            <span className='font-semibold text-lg' >${item.Value}</span>
            </div>
          ))
        }
        <hr className='bg-black w-[92%] mx-auto' />
        {/* Total */}
        <div className='flex justify-between w-[85%]  mx-auto'>
        <span>Total</span>
        <span className='font-semibold text-2xl text-purple-600'>${total}</span>
        </div>
        <div className='text-center' >
        <button className='bg-blue-500 w-[40%]  rounded-[8px] py-2 text-white hover:bg-blue-600 mb-5' >Proceed to checkout</button>
        </div>
      </div>
    </>
  )
}

export default OrderSummary