import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

let ProductContextIs = createContext(null);

function ProductContext({ children }) {
  const [urlData, setUrlData] = useState();

  useEffect(() => {
    const storedData = localStorage.getItem("fetchedData");
    // checking id storedData exists
    if (storedData) {
      setUrlData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <ProductContextIs.Provider value={{ urlData, setUrlData }}>
        {children}
      </ProductContextIs.Provider>
    </>
  );
}
export default ProductContext;
export const useProduct = () => useContext(ProductContextIs);
