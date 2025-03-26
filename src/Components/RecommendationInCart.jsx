import React, { useEffect, useState } from 'react'
import { useProduct } from '../Context/ProductContext';
import Card from './Card';

function RecommendationInCart() {
  
  // using context
  // const {urlData}= useProduct()
  // console.log(urlData);

  //   // generating 4 random products from array
    // let randomCollection = []
  //   // shuffles the product in array
  //   const shuffledProducts = urlData?.sort(()=>0.5-Math.random());
  //   console.log("Shuffled:",shuffledProducts);
  //   // selects first 4 objects from array
  //   randomCollection = shuffledProducts?.slice(0,4)
  //   console.log("Selected:",randomCollection);


  // localStorage.getItem('fetchedData')

  const [data,setData]=useState();
  const [randomCollection,setRandomCollection]=useState([])

  // first useEffect fetches data from localStorage
  useEffect(() => { 
    const newVal=JSON.parse(localStorage.getItem('fetchedData'))
    setData(newVal)
  }, [])


    // second useEffect so that i can generate random number 
    useEffect(() => {
      const shuffledProducts = data?.sort(()=>0.5-Math.random());
    console.log("Shuffled:",shuffledProducts);
    // selects first 4 objects from array
    setRandomCollection(shuffledProducts?.slice(0,4))
      // console.log("Selected:",randomCollection);
    }, [data])
    



  return (
    <>
    <div className='shadow-md mt-5  mx-5' >
    <h2 className="text-2xl my-5 ms-5 ">
          <span className="border-b p-1 ">Products that you might like</span>
        </h2>
        <div className='grid sm:grid-cols-2  md:grid-cols-4' >
          {
            randomCollection?.map((item)=>(
              <Card key={item.id}  item={item}  />
            ))
          }
        </div>
    </div>
    </>
  )
}

export default RecommendationInCart