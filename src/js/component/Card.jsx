import React from "react";

export function Card() {
    return (
      
<div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-6">
  <img className="w-full" src="https://via.placeholder.com/500x325" alt="Placeholder Image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
  <div className="flex justify-center px-6 pt-4 pb-2">
    <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Find Out More</span>

  </div>
</div>




    );
};