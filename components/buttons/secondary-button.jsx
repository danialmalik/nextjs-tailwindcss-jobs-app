import React from "react";

const SecondaryButton = ({ label, onClick = () => {} }) => {
  return (
    <div className="max-w-max">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-500 border border-blue-500 px-4 py-2 rounded-lg transition-all"
      >
        {label}
      </button>
    </div>
  );
};

export default SecondaryButton;
