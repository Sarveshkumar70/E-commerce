import React, { useContext, useState } from 'react'
import { createContext } from 'react'

let ProductContextIs = createContext(null)

function ProductContext({children}) {
    const [urlData,setUrlData]=useState()

  return (
    <>
    <ProductContextIs.Provider value={{urlData,setUrlData}}>
        {children}
    </ProductContextIs.Provider>
    </>
  )
}
export default ProductContext
export const useProduct = ()=> useContext(ProductContextIs)