import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-3">
        <div className="lg:col-span-2 lg:my-4">
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            {" "}
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-col items-center justify-between space-x-0 sm:flex-row">
            <input
              className="flex w-full rounded-md p-3 text-black sm:rounded-r-none"
              type="email"
              placeholder="Enter Email"
            />
            <button className="my-6 ml-4 w-[200px] rounded-md bg-[#00ffa6] px-6 py-3 font-medium text-gray-800 sm:rounded-l-none">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00ffa6] underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Newsletter;
