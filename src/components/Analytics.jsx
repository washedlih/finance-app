import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        <img className="mx-auto my-4 w-[500px]" src={Laptop} alt="" />
        <div className="flex flex-col items-center justify-center md:items-start">
          <p className="font-bold text-[#00ffa6]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl text-center md:text-start">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-center md:text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iusto sapiente explicabo
            fuga reiciendis provident sint voluptate maiores nihil consequatur, ratione accusantium
            quam minima laboriosam hic architecto, ducimus ut incidunt.
          </p>
          <button className="my-6 mx-auto w-[200px] rounded-md bg-black py-3 font-medium text-[#00ffa6] md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
