import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import {useProduct} from '../Context/ProductContext.jsx'


export default function ProductComponent() {

  // state to store fetched data
  const {urlData,setUrlData} = useProduct()

  // fetching data on first render
  useEffect(()=>{
    fetchData()    
  },[])

  // fetching data from url
  async function fetchData() {
    const url = "https://fakestoreapi.com/products";
    try {
      
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error(`Error status : ${data.status}`)
      }
      const formatData = await data.json()
      setUrlData(formatData)
    } catch (error) {
      console.error(error.message)
    }
  }
  
  return (
    <>
      <section className="py-8 px-5 mt-10 mx-aut shadow-sm ">      
        <h2 className="text-2xl  ">
          <span className="border-b p-1">Our Top Products</span>
        </h2>
        {/* search on quantity */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {
            urlData?.map((item)=>{
              return <Card  key={item.id}  item={item} />
            })
          }
        </div>
      </section>
    </>
  );
}
