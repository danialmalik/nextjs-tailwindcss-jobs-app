import React, { useState } from "react";

import SearchBar from "../inputs/search-bar";
import JobsFilters from "../jobs-filters";
import JobsListing from "../jobs-listing";

const JobsDashboard = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div className="w-full">
      <SearchBar onSearch={(keyword) => setSearchKeyword(keyword)} />
      <div className="flex flex-row w-full">
        <div className="w-72">
          <JobsFilters />
        </div>
        <div className="w-full mt-6 ml-4">
          <JobsListing searchKeyword={searchKeyword} />
        </div>
      </div>
    </div>
  );
};

export default JobsDashboard;
