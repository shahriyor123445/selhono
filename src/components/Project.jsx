import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const BackgroundImage = () => {
  const divStyle = {
    backgroundImage: "url(/Rectan.png)",
    height: "356px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle} className="flex items-center justify-center h-screen">
      <h1 className=" text-center text-white font-bold text-7xl ">Our Project</h1>
    </div>
  );
};
const Project = () => {
  return (
    <div className="mt-[66px] container mx-auto p-4 bg-white">
      <div>
        <BackgroundImage />
      </div>
      <div className="flex justify-center text-center gap-7 border-solid border-2 border-yellow-400 py-4 px-8 mt-[37px] mb-[38px]">
        <button className="hover:border-solid hover:border-2 hover: border-yellow-900 hover:py-4 hover:px-8 hover:rounded-3xl hover:bg-yellow-800 hover:text-white">
          Bathroom
        </button>
        <button className="hover:border-solid hover:border-2 hover: border-yellow-900 hover:py-4 hover:px-8 hover:rounded-3xl hover:bg-yellow-800 hover:text-white">
          Bed Room
        </button>
        <button className="hover:border-solid hover:border-2 hover: border-yellow-900 hover:py-4 hover:px-8 hover:rounded-3xl hover:bg-yellow-800 hover:text-white">
          Kitcham
        </button>
        <button className="hover:border-solid hover:border-2 hover: border-yellow-900 hover:py-4 hover:px-8 hover:rounded-3xl hover:bg-yellow-800 hover:text-white">
          Living Area
        </button>
      </div>
      <div className="flex justify-between">
        <div>
          <img src="/Rectangle 27.png" alt="uy" width={700} />
          <div className="flex justify-between items-center mt-[38px]">
            <div>
              <p className="font-bold">Minimal Bedroom</p>
              <p>Decor / Artchitecture</p>
            </div>
            <IoIosArrowForward className=" rounded-3xl bg-slate-500 " />
          </div>
        </div>
        <div>
          <img src="/Rectangle 28.png" alt="uy" width={700} />
          <div className="flex justify-between items-center mt-[38px]">
            <div>
              <p className="font-bold">Minimal Bedroom</p>
              <p>Decor / Artchitecture</p>
            </div>
            <IoIosArrowForward className=" rounded-3xl bg-slate-500 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project