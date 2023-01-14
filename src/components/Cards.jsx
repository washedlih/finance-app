import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <img className="mx-auto mt-[-3rem] w-20 bg-white" src={Single} alt="" />
          <h2 className="py-8 text-center text-2xl font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">500 GB Storage</p>
            <p className="mx-8 border-b py-2">1 Granted User</p>
            <p className="mx-8 border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="my-6 mx-auto w-[200px] rounded-md bg-[#00ffa6] py-3 font-medium text-gray-800">
            Start Trial
          </button>
        </div>
        <div className="my-8 md:my-0 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105 bg-gray-100">
          <img className="mx-auto mt-[-3rem] w-20 bg-white" src={Double} alt="" />
          <h2 className="py-8 text-center text-2xl font-bold">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">500 GB Storage</p>
            <p className="mx-8 border-b py-2">1 Granted User</p>
            <p className="mx-8 border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="my-6 mx-auto w-[200px] rounded-md bg-black py-3 font-medium text-[#00ffa6]">
            Start Trial
          </button>
        </div>
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <img className="mx-auto mt-[-3rem] w-20 bg-white" src={Triple} alt="" />
          <h2 className="py-8 text-center text-2xl font-bold">Triple User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">500 GB Storage</p>
            <p className="mx-8 border-b py-2">1 Granted User</p>
            <p className="mx-8 border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="my-6 mx-auto w-[200px] rounded-md bg-[#00ffa6] py-3 font-medium text-gray-800">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
