import React from "react";

function Card({ children }) {
  return (
    <div className="hover:scale-105 bg-white h-auto drop-shadow-xl rounded-lg p-6 ease-in-out duration-500">
      {children}
    </div>
  );
}

export default Card;
