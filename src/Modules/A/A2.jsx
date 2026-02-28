import React from "react";

const A2 = () => {
  const data = [
    {
      q_number: "Q1",
      year: "2025",
      text: "Onboarding revamp",
      desc: "simplified sign-up, guided tours and contextual help for new users",
    },
    {
      q_number: "Q2",
      year: "2025",
      text: "Onboarding revamp",
      desc: "simplified sign-up, guided tours and contextual help for new users",
    },
    {
      q_number: "Q3",
      year: "2025",
      text: "Onboarding revamp",
      desc: "simplified sign-up, guided tours and contextual help for new users",
    },
    {
      q_number: "Q4",
      year: "2025",
      text: "Onboarding revamp",
      desc: "simplified sign-up, guided tours and contextual help for new users",
    },
  ];
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border-2 px-8 border-gray-300 shadow-xl rounded-2xl w-[90%] md:w-[80%] lg:w-[50%] h-175 lg:h-125 md:h-150">
        <p className="mt-7 text-3xl font-bold ">Feature rollout timeline</p>
        <p className="text-gray-500 ">
          Upcoming product updates overr the next four quarters.
        </p>
        <div className="mt-10">
          {data.map((d, i) => {
          return (
            <div key={i} className="flex justify-around mt-2">
              <div className="boarder-2 mt-5 bg-blue-500 border-blue-500 h-2 w-2 rounded-full"></div>
              <div>
                <div className="flex text-gray-400">
                  <p>{d.q_number}</p>
                  <span className="w-2 px-1">.</span>
                  <p>{d.year}</p>
                </div>
                <h1 className="font-semibold">{d.text}</h1>
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

export default A2;
