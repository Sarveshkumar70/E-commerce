import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from './Card'

function SearchProducts() {
    let location = useLocation()
     let filterData=location.state?.filterData || []

    console.log(filterData);
    
  return (
    <>
    <section>
        <h2 className='text-4xl text-center my-5 font-mono' >Your Search Products</h2>
    <div className='grid grid-cols-4' >
    {
        filterData?.map((item)=><Card key={item.id} item={item} />)
    }
    </div>
    </section>
    </>
  )
}

export default SearchProducts