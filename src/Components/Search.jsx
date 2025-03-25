import React, { useState } from "react";
import { useProduct } from "../Context/ProductContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function Search() {
  const navigate = useNavigate();

  const [inputVal, setInputVal] = useState("");

  const { urlData } = useProduct();

  // handling search
  const handleSearch = (e) => {
    e.preventDefault();
    
    const trimmedInput = inputVal.trim()
    if (trimmedInput === "") {
        toast.error("Please Enter some value")
        return;
    }
    // returning array of searched items by mtching with searched input
    let newData = urlData.filter((data) =>
      data.title.toLowerCase().includes(trimmedInput.toLowerCase())
    );
    if (newData.length > 0) {
    //   console.log("filtered data", newData);
      navigate("/SearchProducts", { state: { filterData: newData } });
    } else {
      toast.error("No Such Data!");
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search For Products..."
          className="px-4 py-2 w-72 focus:outline-none text-gray-800"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
