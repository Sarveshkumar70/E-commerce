import React from 'react'
import LabelInputComponent from '../Components/LabelInput/LabelInputComponent';

// label and input data
const LogInData=[
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
    autoValue: "password",
    placeholderVal: "Enter Password",
  },
  ]

function LogIn() {
  return (
    <>
    <div className="flex justify-center items-center flex-col py-20 h-[80vh]">
        <h2 className="text-4xl">Log in</h2>
        <form
          action=""
          className="shadow-lg flex flex-col gap-4 px-15 py-8 rounded-[5%]"
        >
          {LogInData.map((item, index) => {
            return <LabelInputComponent key={index} prop={item} />;
          })}
          <div className="flex flex-col gap-2 mt-4">
          <button
            type="button"
            class="w-[90%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto
            hover:cursor-pointer"
            >
            Log in
          </button>
            </div>
        </form>
      </div>
    </>
  )
}

export default LogIn