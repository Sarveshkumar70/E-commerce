import React from "react";

function LabelInputComponent({ prop ,value,onChange}) {
  const { data, htmlFor, type, autoValue, placeholderVal } = prop;  

  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor={htmlFor}>{data}</label>
        <input
          type={type}
          name={htmlFor}
          id={htmlFor}
          autoComplete={autoValue}
          placeholder={placeholderVal}
          value={value}
          className="border rounded-[5px] p-1"
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default LabelInputComponent;
