import React from 'react'

export default function CategoryCard({img,index}) {
    
  return (
  <>
  <div key={index+1} className='border w-[150px] h-[150px] rounded-full p-2  overflow-hidden bg-secondary-200 
  hover:scale-102 hover:border-blue-500' >
    <img src={img} alt="hlo" className='w-full h-[135px] bg-transparent' />
  </div>
  </>
  )
}
