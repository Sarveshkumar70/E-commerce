import React from "react";
import FooterNumbers from "./FooterNumbers.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import FooterListComponent from "./FooterListComponent.jsx";

const numberData = [
  {
    icon: <FaWhatsapp size={22} />,
    text: "Whats App",
    number: "+1 202-918-2132",
  },
  {
    icon: <BsTelephone size={22} />,
    text: "Call Us",
    number: "+1 202-918-2132",
  },
];

const footerData = [
  {
    text: "Most Popular Categories",
    listData: [
      "Staples",
      "Beverages",
      "Personal Care",
      "Home Care",
      "Baby ",
      "Vegatable & fruits",
    ],
  },
  {
    text: "Customer  Services",
    listData: [
      "About us",
      "Terms & Conditions",
      "FAQ",
      "Privacy Policy",
      "E-waste Policy ",
      "Cancellation & Return Policy",
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-200 w-full" >
        <div className="grid grid-cols-1 lg:grid-cols-3  mt-10  pt-15 gap-10" >
        {/* left box */}
        <div className="flex  flex-col justify-start gap-5 mx-auto order-2 lg:order-1 ">
          <h2 className="text-3xl">MyEcommerce</h2>
          <p className="text-2xl mt-4">Contact Us</p>
          <div className="flex justify-center items-center flex-col gap-3 mx-auto">
            {numberData.map((item, index) => {
              return (
                <FooterNumbers
                  key={index+1}
                  icon={item.icon}
                  text={item.text}
                  number={item.number}
                />
              );
            })}
          </div>
        </div>
        {/* right box */}
        <div className="flex col-span-2 justify-center items-center order-1 lg:order-2 mx-auto  ">
          <div className="flex justify-center items-center gap-14 flex-col sm:flex-row px-6  ">
            {footerData.map((item, index) => {
              return <FooterListComponent key={index + 1} numberData={item} />;
            })}
          </div>
        </div>
        </div>
        {/* bottom footer */}
        <div className="text-center pb-3 pt-3 mt-5 border-t " >
        &copy; 2025 All rights reserved.
        </div>
      </footer>
    </>
  );
}
