import React from "react";

const A1 = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border-2 px-8 border-gray-300 shadow-xl rounded-2xl w-[90%] md:w-[80%] lg:w-[50%] h-92">
        <p className="mt-7 text-3xl font-bold ">Status Rings</p>
        <p className="text-gray-500 ">
          Visual indicators for task progress states.
        </p>
        <div className="flex h-36 my-4 mx-12 grid-cols-3 gap-2 items-center justify-between">
          <div tabIndex={1} className="items-center m-2 p-4 justify-center hover:bg-blue-100/50 rounded-2xl focus:ring-1 focus:outline-amber-500 focus:ring-amber-500">
            <div className="border-18 border-gray-300 h-28 w-28 rounded-full"></div>
            <p className="font-semibold text-lg">Pending</p>
          </div>
          <div tabIndex={2} className="items-center m-2 p-4 justify-center hover:bg-blue-100/50 rounded-2xl focus:ring-1 focus:outline-amber-500 focus:ring-amber-500">
            <div className="relative border-18 border-gray-300 h-28 w-28 rounded-full">
            </div>
            <p className="font-semibold text-lg">In Progress</p>
          </div>
          <div tabIndex={3} className="items-center m-2 p-4 justify-center hover:bg-blue-100/50 rounded-2xl focus:ring-1 focus:outline-amber-500 focus:ring-amber-500">
            <div className="border-18 border-blue-500 h-28 w-28 rounded-full"></div>
            <p className="font-semibold text-lg">Done</p>
          </div>
        </div>
        <p className="text-gray-500 ">
          Tip: Use <span className="border rounded-lg px-2 bg-gray-100">Tab</span> to move focus between rings and observe the focus styling.
        </p>
      </div>
    </div>
  );
};

export default A1;
