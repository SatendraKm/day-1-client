import React, { useState } from "react";

const B1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* <div className="border-2 px-8 border-gray-300 shadow-xl rounded-2xl w-[90%] md:w-[80%] lg:w-[50%] h-150 lg:h-100 md:h-125">
        
      </div> */}
      <button
        onClick={() => {
          if (isModalOpen === true) {
            setIsModalOpen(false);
          } else {
            setIsModalOpen(true);
          }
        }}
        className="border cursor-pointer border-gray-300 bg-white p-4 rounded-xl"
      >
        Open modal
      </button>
      <div className="absolute h-screen w-full bg-gray-200 opacity-50">
        {isModalOpen && (
          <div>
            <div className="bg-white h-75 w-125">
              <p>Example Modal</p>
              <p>This is a demonstration of an accessible modal window.</p>
              <button className="">close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default B1;
