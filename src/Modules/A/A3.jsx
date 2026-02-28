import React from "react";

const A3 = () => {
  const data = [
    {
      stage: "STAGE 1",
      name: "Onboarding revamp",
      desc: "simplified sign-up, guided tours and contextual help for new users",
    },
    {
      stage: "STAGE 2",
      name: "Onboarding revamp",
      desc: "simplified sign-up, guided tours and contextual help for new users",
    },
    {
      stage: "STAGE 3",
      name: "Onboarding revamp",
      desc: "simplified sign-up, guided tours and contextual help for new users",
    },
  ];
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border-2 px-8 border-gray-300 shadow-xl rounded-2xl w-[90%] md:w-[80%] lg:w-[50%] h-150 lg:h-100 md:h-125">
        <p className="mt-7 text-3xl font-bold ">Project Stage</p>
        <div className="mt-6 border border-gray-400 rounded-2xl">
          {data.map((d, i) => {
            return (
              <div key={i} className=" flex justify-around border bg-white border-gray-300 rounded-2xl cursor-pointer hover:scale-105">
                <div>
                  <p className="flex text-gray-400">{d.stage}</p>
                  <h1 className="font-semibold">{d.name}</h1>
                  <p className="text-gray-500">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default A3;
