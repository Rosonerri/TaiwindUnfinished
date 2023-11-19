import react from "react";
import img from "./assets/Judiciary.jpg";


import { MdExpandLess } from "react-icons/md";
const Card = () => {
  

  return (
    <div className=" mx-2 shadow-md flex min-w-[600px] h-80 bg-white border rounded-md">
      <div className="w-[40%] h-80 object-cover rounded-l-md relative ">
        <div className="w-full h-full absolute flex  text-white top-2 left-[45%] ">
          <div className="w-2 h-2 bg-white rounded-full mx-[2px]"  />
          <div className="w-2 h-2 bg-white rounded-full mx-[2px] " />
          <div className="w-2 h-2 bg-white rounded-full mx-[2px] " />
          <div className="w-2 h-2 bg-white rounded-full mx-[2px] " />
          <div className="w-2 h-2 bg-white rounded-full mx-[2px] "/>
        </div>

        <div className="w-full h-full absolute top-0 opacity-0 hover:opacity-100 transition-all duration-300 hover:cursor-pointer ">
          <div
            className="bg-white h-[20px] flex justify-center items-center w-[20px] rounded-full rotate-90 absolute top-[50%] right-2 hover:scale-110 transition-all duration-300 hover:bg-[rgba(255,255,255,0.9)]  "
           
          >
            <MdExpandLess />
          </div>
          <div
            className="bg-white h-[20px] flex justify-center items-center w-[20px] rounded-full -rotate-90 absolute top-[50%] left-2 hover:scale-110 transition-all duration-300 hover:bg-[rgba(255,255,255,0.9)] "
           
          >
            <MdExpandLess />
          </div>
        </div>
        <img
          src={img}
          className="w-full h-80 object-cover rounded-l-md "
        />
      </div>

      <div className="flex-1 p-4 h-full flex flex-col ">
        <div className="flex justify-between items-center mr-[70px] ">
          <h1 className="font-[700] text-[20px] ">Classic Utility Jacket</h1>
          <div className="font-bold text-gray-400 ml-[50px]">$115</div>
        </div>
        <div className="text-[12px] mb-8 ">In Stock</div>
        <div className="w-full flex mb-6">
          <div className="bg-black rounded-md py-2 px-3 text-white font-bold mr-2 ">
            XS
          </div>
          <div
            className="text-gray-700 rounded-md py-2 px-3 font-bold mr-2 transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer
            "
          >
            M
          </div>
          <div className="text-gray-700 rounded-md py-2 px-3 font-bold mr-2 transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer">
            LG
          </div>
          <div className="text-gray-700 rounded-md py-2 px-3 font-bold mr-2 transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer">
            XL
          </div>
        </div>
        <hr />

        <div className="flex items-center my-6 flex-1 ">
          <button className="px-4 py-2 mr-3 bg-black text-white rounded-sm hover:cursor-pointer hover:scale-[1.02] transition-all duration-300 ">
            Buy Now
          </button>
          <button className="px-4 py-2 mr-3 bg-white text-black rounded-sm border hover:cursor-pointer hover:scale-[1.02] transition-all duration-300">
            Add to bag
          </button>
        </div>

        <div className="text-[12px]">
          Free shipping on all continential US orders
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center items-center ">
        <div className="flex border p-8 w-[95%] overflow-x-scroll ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
