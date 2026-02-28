import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <p className="text-4xl font-bold m-2 p-4">
        Please click the button below to navigate to the respective Modules
      </p>
      <button
        onClick={() => {
          navigate("05_module_a");
        }}
        className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
      >
        Module-A
      </button>
    </div>
  );
};

export default Home;
