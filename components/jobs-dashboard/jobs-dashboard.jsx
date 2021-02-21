import React, { useState } from "react";

import SearchBar from "../inputs/search-bar";
import JobsFilters from "../jobs-filters";
import JobsListing from "../jobs-listing";

import useFilters from "./useFilters";
import useJobs from "./useJobs";

const JobsDashboard = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  // 1 means asc, -1 means desc, and 0 means no sorting
  const [sorting, setSorting] = useState({
    location: 0,
    role: 0,
    department: 0,
    education: 0,
    experience: 0,
  });

  const { filters, error: filtersError } = useFilters();
  const { jobs, error: jobsError } = useJobs({ searchKeyword, sorting });

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

  const totalJobsCount =
    filters && filters.length
      ? filters[0].entries.reduce(
          (currentTotal, currentFilter) => currentTotal + currentFilter.count,
          0
        )
      : 0;

  return (
    <div className="w-full">
      <SearchBar onSearch={(keyword) => setSearchKeyword(keyword)} />
      <div className="flex flex-row w-full">
        <div className="w-72 hidden md:block ">
          <JobsFilters
            filters={filters}
            error={filtersError}
            isLoading={!filters && !filtersError}
          />
        </div>
        <div className="w-full md:mt-6 md:ml-4">
          <JobsListing
            totalJobsCount={totalJobsCount}
            jobs={jobs}
            error={jobsError}
            isLoading={!jobs && !jobsError}
            currentSorting={sorting}
            onSortOptionChange={handleSortChange}
          />
        </div>
      </div>
    </div>
  );
};

export default JobsDashboard;
