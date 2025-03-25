import React from "react";
import CategoryCard from "./CategoryCard.jsx";

import applePic from "../assets/Apple.png";
import AccessoriesPic from "../assets/Accessories-removebg-preview.png";
import CosmeticPic from "../assets/Cosmetic-removebg-preview.png";
import DecorPic from "../assets/Decor-removebg-preview.png";
import ElectronicsPic from "../assets/Electronics-removebg-preview.png";
import FurniturePic from "../assets/Furniture-removebg-preview.png";

// img data
const categoryImgs = [
  { imgIs: applePic, label: "Mobile" },
  { imgIs: AccessoriesPic, label: "Accessories" },
  { imgIs: CosmeticPic, label: "Cosmetic" },
  { imgIs: DecorPic, label: "Decor" },
  { imgIs: ElectronicsPic, label: "Electronics" },
  { imgIs: FurniturePic, label: "Furniture" },
];

export default function Categories() {
  return (
    <>
      <section className=" py-8 px-5 mt-10 mx-4 shadow-sm rounded-lg">
        <h2 className="text-2xl">
          <span className="border-b p-1 font-mono">Shop From Top Categories</span>
        </h2>
        <div className=" flex justify-evenly  mx-auto  gap-5 w-full overflow-y-auto no-scrollbar mt-8 ">
          {categoryImgs.map((item, index) => {
            return (
                <div key={index} className="flex justify-between items-center flex-col p-2 " >
                  <div className=" w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden bg-gray-200 shadow-md hover:shadow-blue-900 transition-all duration-300">
                    <img className="p-2 object-fit" src={item.imgIs} alt="" />
                  </div>
                  <div className="my-2">
                    <p className="text-center font-mono text-[18px]">
                      {item.label}
                    </p>
                  </div>
                </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
