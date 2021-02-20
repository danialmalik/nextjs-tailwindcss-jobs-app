import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <svg className="animate-spin w-full h-full mr-3" viewBox="0 0 100 100">
        <g fill="none">

          <circle
            className="text-blue-500"
            style={{
              stroke: "currentColor",
              strokeWidth: "10",
              strokeDasharray: "50",
            }}
            cx="50"
            cy="50"
            r="45"
          />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
