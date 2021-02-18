import React, { useState } from "react";

import Modal from "./modal";

const CategoryListing = ({ title, categories = [], limitCount = null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  categories = [...categories];

  return (
    <div className="w-full p-3 bg-white font-bold uppercase">
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} title={title}>
          <div className="w-full gap-x-4 grid grid-cols-4 max-h-48 max-w-md overflow-auto overflow-x-scroll place-items-auto">
            {categories.map((category, idx) => (
              <div className="text-md font-normal my-1" key={idx}>
                {category.label}
                <span className="text-sm px-1 text-gray-400">
                  {category.count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </Modal>
      )}
      <div className="text-l">{title}</div>
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
  );
};

export default CategoryListing;
