import React, { useState } from "react";

import Loader from "../common/loader";

import JobsGroup from "./jobs-group";

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

const JobsListing = ({
  totalJobsCount,
  jobs,
  error,
  isLoading,
  onSortOptionChange,
  currentSorting,
}) => {
  return (
    <div className="bg-white w-full px-3 pt-6 pb-3">
      {error && (
        <div className="text text-red-500 flex text-center">
          Failed to fetch jobs.
        </div>
      )}
      {isLoading && (
        <div className="w-full flex justify-center">
          <Loader />
        </div>
      )}
      {jobs &&
        (jobs.length > 0 ? (
          <div>
            {/* Header */}
            <div className="grid grid-cols-4 mb-10">
              {/* Jobs Posting count */}
              <div className="text col-span-4 md:col-span-1">
                <span className="font-bold">
                  {totalJobsCount.toLocaleString()}
                </span>
                <span className="ml-3 inline">job postings</span>
              </div>

              {/* Sorting options */}
              <div className="md:col-span-3 text-right hidden md:block">
                <span className="text capitalize text-gray-500 mx-3">
                  Sort by
                </span>
                {renderSortOption({
                  label: "Location",
                  onSelect: () => onSortOptionChange("location"),
                  sorting: currentSorting.location,
                })}
                {renderSortOption({
                  label: "Role",
                  onSelect: () => onSortOptionChange("role"),
                  sorting: currentSorting.role,
                })}
                {renderSortOption({
                  label: "Department",
                  onSelect: () => onSortOptionChange("department"),
                  sorting: currentSorting.department,
                })}
                {renderSortOption({
                  label: "Education",
                  onSelect: () => onSortOptionChange("education"),
                  sorting: currentSorting.education,
                })}
                {renderSortOption({
                  label: "Experience",
                  onSelect: () => onSortOptionChange("experience"),
                  sorting: currentSorting.experience,
                })}
              </div>
            </div>
            {/* Jobs listing */}
            <div>
              {/* Job group entry */}
              {jobs.map((job, idx) => (
                <JobsGroup
                  key={job.hospitalName}
                  hospitalName={job.hospitalName}
                  count={job.totalJobsCount}
                  jobs={job.jobs}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-lg font-bold">No Jobs Found!</div>
        ))}
    </div>
  );
};

export default JobsListing;
