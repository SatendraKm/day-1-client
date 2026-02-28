import React from "react";
import { useNavigate } from "react-router-dom";

const ModuleA = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p className="text-4xl font-bold m-2 p-4">
          Module A- Mini Speed Project
        </p>
        <button
          onClick={() => {
            navigate("A1");
          }}
          className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
        >
          A1
        </button>
        <button
          onClick={() => {
            navigate("A2");
          }}
          className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
        >
          A2
        </button>
        <button
          onClick={() => {
            navigate("A3");
          }}
          className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
        >
          A3
        </button>
        <button
          onClick={() => {
            navigate("B1");
          }}
          className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
        >
          B1
        </button>
        <button
          onClick={() => {
            navigate("B2");
          }}
          className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
        >
          B2
        </button>
        <button
          onClick={() => {
            navigate("B3");
          }}
          className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
        >
          B3
        </button>
        <button
          onClick={() => {
            navigate("C1");
          }}
          className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
        >
          C1
        </button>
        <button
          onClick={() => {
            navigate("C2");
          }}
          className="border-2 shadow rounded-2xl text-2xl border-black m-2 p-4"
        >
          C2
        </button>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-black text-white rounded-2xl text-2xl  m-2 p-4"
      >
        Home
      </button>
    </>
  );
};

export default ModuleA;
