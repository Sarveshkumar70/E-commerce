import React from "react";

export default function FooterListComponent({ numberData }) {
  const { text, listData } = numberData;
  return (
    <>
    <div >
      <h3 className="text-3xl">{text}</h3>
      <div>
        <ul className="mt-5">
          {listData.map((item, index) => {
              return (
                  <li key={index} className="list-disc py-0.5">
                {item}
              </li>
            );
        })}
        </ul>
      </div>
        </div>
    </>
  );
}
