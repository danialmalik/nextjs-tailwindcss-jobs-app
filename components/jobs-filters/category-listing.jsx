import React, { useState } from "react";

import Modal from "../common/modal";

const CategoryListing = ({ title, categories = [], limitCount = null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} title={title}>
          <div className="w-full grid grid-cols-4 overflow-y-auto">
            {categories.map((category, idx) => (
              <div className="text-md font-normal my-1 min" key={idx}>
                {category.label}
                <span className="text-sm px-1 text-gray-400">
                  {category.count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </Modal>
      )}
      <div className="bg-white p-5 my-5">
        <div className="text-l font-bold uppercase">{title}</div>
        <div className="flex flex-col my-2">
          {categories
            .slice(0, limitCount ? limitCount : undefined)
            .map((category, idx) => (
              <div className="text-md font-normal my-1" key={idx}>
                {category.label}
                <span className="text-sm px-1 text-gray-400">
                  {category.count.toLocaleString()}
                </span>
              </div>
            ))}
          {limitCount && categories.length > limitCount && (
            <div
              className="text text-md text-blue-500 cursor-pointer normal-case font-normal"
              onClick={() => setIsModalOpen(true)}
            >
              Show more
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryListing;
