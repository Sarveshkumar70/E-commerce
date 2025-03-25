import React from "react";

export default function FooterNumbers({icon, text, number}) {
    
  return (
    <>
      <div  className="flex justify-between  gap-0.5">
        <div className="" >{icon}</div>
        <div className="" >
          <p>{text}</p>
          <p>{number}</p>
        </div>
      </div>
    </>
  );
}
