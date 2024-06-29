import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const BackgroundImage = () => {
  const divStyle = {
    backgroundImage: "url(/Rec.png)",
    height: "950px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle}>
      <h1 className="pt-[73px] pl-[25px] text-white font-normal text-[65px] leading-[81px] w-[657px]">
        Let's make your home beautiful together
      </h1>
      <p className="pl-[25px] mt-[10px] w-[470px] text-22px] text-white mb-[30px]">
        There are many variations of the passages of lorem Ipsum fromavailable,
        majority.
      </p>
      <button className="border-solid border-2 border-yellow-900 py-6 px-10 bg-yellow-900 text-white ml-6 rounded-2xl flex items-center gap-2 hover:bg-blue-400">
        Get Started <FaArrowRight/>
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto p-4 bg-white mt-[154px]">
      <BackgroundImage />

      <div className="flex mt-[95px] justify-between mb-24">
        <div className="w-[358px] text-center">
          <h2 className="mb-[20px] text-gray-950 font-bold">Project Plan</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[130px]">
            Read More <FaArrowRight />
          </button>
        </div>

        <div className="w-[358px] text-center">
          <h2 className="mb-[20px] text-gray-950 font-bold">Interior Work</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[130px]">
            Read More <FaArrowRight />
          </button>
        </div>

        <div className="w-[358px] text-center">
          <h2 className="mb-[20px] text-gray-950 font-bold">Realization</h2>
          <p className="mb-[52px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center gap-3 font-bold ml-[130px]">
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home