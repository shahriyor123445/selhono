import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const BackgroundImage = () => {
  const divStyle = {
    backgroundImage: "url(/Rectan.png)",
    height: "356px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle} className="flex items-center justify-center h-screen">
      <h1 className=" text-center text-white font-bold text-7xl ">Services</h1>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <div className="mt-[66px]">
        <BackgroundImage />
      </div>
      <div className=" grid grid-cols-3 container mx-auto p-4 bg-white justify-between gap-[88px] mb-10">
        <div className="w-[358px] text-center hover:bg-yellow-700 p-10 hover:rounded-3xl">
          <h2 className="mb-[20px] text-gray-950 font-bold">Interior Work</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[90px]">
            Read More <FaArrowRight />
          </button>
        </div>

        <div className="w-[358px] text-center hover:bg-yellow-700 p-10 hover:rounded-3xl">
          <h2 className="mb-[20px] text-gray-950 font-bold">Interior Work</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[90px]">
            Read More <FaArrowRight />
          </button>
        </div>

        <div className="w-[358px] text-center hover:bg-yellow-700 p-10 hover:rounded-3xl">
          <h2 className="mb-[20px] text-gray-950 font-bold">Interior Work</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[90px]">
            Read More <FaArrowRight />
          </button>
        </div>

        <div className="w-[358px] text-center hover:bg-yellow-700 p-10 hover:rounded-3xl">
          <h2 className="mb-[20px] text-gray-950 font-bold">Interior Work</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[90px]">
            Read More <FaArrowRight />
          </button>
        </div>

        <div className="w-[358px] text-center hover:bg-yellow-700 p-10 hover:rounded-3xl">
          <h2 className="mb-[20px] text-gray-950 font-bold">Interior Work</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[90px]">
            Read More <FaArrowRight />
          </button>
        </div>

        <div className="w-[358px] text-center hover:bg-yellow-700 p-10 hover:rounded-3xl">
          <h2 className="mb-[20px] text-gray-950 font-bold">Interior Work</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[90px]">
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services