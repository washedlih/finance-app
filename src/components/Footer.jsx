import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-8 py-16 px-4 text-gray-300 lg:grid-cols-3">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00ffa6]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa harum fugiat minima aperiam
          maxime libero facere eos amet exercitationem facilis fugit placeat ea explicabo accusamus
          mollitia voluptatibus, optio quidem praesentium?
        </p>
        <div className="my-6 flex justify-between md:w-[75%]">
          <FaFacebookSquare size={30} className="cursor-pointer" />
          <FaInstagram size={30} className="cursor-pointer" />
          <FaTwitterSquare size={30} className="cursor-pointer" />
          <FaGithubSquare size={30} className="cursor-pointer" />
          <FaDribbbleSquare size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="mt-6 flex justify-between lg:col-span-2">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
