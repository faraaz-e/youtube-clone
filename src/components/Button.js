import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="bg-zinc-800 text-white px-5 py-1 m-2 hover:bg-zinc-700 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
