import React, { useState } from "react";

const UpArrow = () => <>&uarr;</>;
const DownArrow = () => <>&darr;</>;

const renderSortOption = ({ label, onSelect, sorting }) => (
  <span
    className="text capitalize mx-3 cursor-pointer min-w-max select-none"
    onClick={onSelect}
  >
    {sorting === 1 ? <UpArrow /> : sorting === -1 ? <DownArrow /> : <></>}
    {label}
  </span>
);

const JobsListing = () => {
  // 1 means asc, -1 means desc, and 0 means no sorting
  const [sorting, setSorting] = useState({
    location: 0,
    role: 0,
    department: 0,
    education: 0,
    experience: 0,
  });

  const handleSortChange = (key) => {
    const currentOption = sorting[key];
    let newOption;

    switch (currentOption) {
      case 0:
        newOption = 1;
        break;
      case 1:
        newOption = -1;
        break;
      default:
        newOption = 0;
    }

    setSorting({
      ...sorting,
      [key]: newOption,
    });
  };

  return (
    <div className="bg-white w-full px-3 pt-6 pb-3">
      {/* Header */}
      <div className="grid grid-cols-4 mb-10">
        {/* Jobs Posting count */}
        <div className="text col-span-1">
          <span className="font-bold">7,753</span>
          <span className="ml-3 inline">job postings</span>
        </div>

        {/* Sorting options */}
        <div className="col-span-3 text-right">
          <span className="text capitalize text-gray-500 mx-3">Sort by</span>
          {renderSortOption({
            label: "Location",
            onSelect: () => handleSortChange("location"),
            sorting: sorting.location,
          })}
          {renderSortOption({
            label: "Role",
            onSelect: () => handleSortChange("role"),
            sorting: sorting.role,
          })}
          {renderSortOption({
            label: "Department",
            onSelect: () => handleSortChange("department"),
            sorting: sorting.department,
          })}
          {renderSortOption({
            label: "Education",
            onSelect: () => handleSortChange("education"),
            sorting: sorting.education,
          })}
          {renderSortOption({
            label: "Experience",
            onSelect: () => handleSortChange("experience"),
            sorting: sorting.experience,
          })}
        </div>
      </div>
      {/* Jobs listing */}
      <div>
        {/* Job group entry */}
        <div className="flex flex-row items-center my-3 cursor-pointer">
          <div className="rounded-lg bg-gray-400 text-white text-xl tracking-widest py-2 px-1 mr-2">
            LG
          </div>
          <div className="text text-black h-full">
            8 Jobs for Mammoth Hospital
          </div>

          {/* Jobs list */}
          <div>
            {/* Job Details */}
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
