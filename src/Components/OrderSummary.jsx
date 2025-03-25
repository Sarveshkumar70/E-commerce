import React from 'react'

function OrderSummary() {

  const data = JSON.parse(localStorage.getItem('cartData'))
  console.log(data);

  const totalValue = data.reduce((accumulator,currentVal)=>(
    accumulator+= currentVal.Qty*currentVal.price
  ),0)
  console.log(totalValue);
  
  // 
    
  return (
    <>
       <div className=" flex flex-col gap-4 w-[400px] shadow-md" >
        <h2 className='bg-gray-300 text-center py-3 text-lg font-bold' >Order Summary</h2>
        <div className='flex justify-between w-[85%]  mx-auto' >
          <span>SubTotal</span>
          <span>$149.99</span>
        </div >
        <div className='flex justify-between w-[85%]  mx-auto' >
          <span>Shipping</span>
          <span>$0</span>
        </div>
        <div className='flex justify-between w-[85%]  mx-auto'  >
          <span>Tax</span>
          <span>$149.99</span>
        </div>
        <hr className='bg-black w-[92%] mx-auto' />
        <div className='flex justify-between w-[85%]  mx-auto' >
            <span>Total</span>
            <span>${' '}{totalValue}</span>
        </div>
        <div className='text-center' >
        <button className='bg-blue-500 w-[40%]  rounded-[8px] py-2 text-white hover:bg-blue-600 mb-5' >Proceed to checkout</button>
        </div>
      </div>
    </>
  )
}

export default OrderSummary