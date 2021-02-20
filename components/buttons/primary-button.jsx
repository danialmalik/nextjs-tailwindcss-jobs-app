import React from "react";

const PrimaryButton = ({ label, onClick = () => {} }) => {
  return (
    <div className="max-w-max">
      <button
        onClick={onClick}
        className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white border border-blue-500 px-4 py-2 rounded-lg transition-all"
      >
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
