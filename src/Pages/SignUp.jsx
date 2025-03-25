import React, { useEffect, useState } from "react";
import LabelInputComponent from "../Components/LabelInput/LabelInputComponent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const signupData = [
  {
    data: "Name",
    htmlFor: "name",
    type: "text",
    autoValue: "name",
    placeholderVal: "Enter Name",
  },
  {
    data: "Email",
    htmlFor: "email",
    type: "email",
    autoValue: "email",
    placeholderVal: "Enter Email",
  },
  {
    data: "Password",
    htmlFor: "password",
    type: "password",
    autoValue: "current-password",
    placeholderVal: "Enter Password",
  },
];

function SignUp() {
  // state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // handling onChange on input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  // handling form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "Inside handleSubmit");

    // first retieving the old data
    let oldData = JSON.parse(localStorage.getItem("storedFormData")) || [];

    // now merge it with new data
    const newData = [...oldData, formData];

    // storing updated data
    localStorage.setItem("storedFormData", JSON.stringify(newData));

    // resetting form data
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col py-20 h-[80vh]">
        <h2 className="text-4xl">Sign up</h2>
        <form
          action=""
          className="shadow-lg flex flex-col gap-4 px-15 py-8 rounded-[5%]"
          onSubmit={handleSubmit}
        >
          {signupData.map((item, index) => {
            return (
              <LabelInputComponent
                key={index}
                prop={item}
                value={formData[item.htmlFor]}
                onChange={handleChange}
              />
            );
          })}
          <div className="flex flex-col gap-2 mt-4">
            {/* signUp btn */}
            <button
              type="submit"
              className="w-[90%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto
            hover:cursor-pointer"
            >
              Sign up
            </button>
            <p className="text-sm">
              Already have an account?
              <Link to={"/LogIn"}>
                <span className="text-blue-600 hover:cursor-pointer">
                  Log in
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
