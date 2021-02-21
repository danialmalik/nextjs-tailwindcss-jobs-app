import React from "react";

import CategoryListing from "./category-listing";
import Loader from "../common/loader";

function JobsFilters({
  filters,
  error,
  isLoading,
}) {
  return (
    <div className="my-6 w-full">
      {error && (
        <div className="text text-red-500 p-5 flex text-center bg-white">
          Failed to fetch filters.
        </div>
      )}
      {isLoading && (
        <div className="bg-white flex p-5 items-center justify-items-center">
          <Loader />
        </div>
      )}
      {!isLoading && filters &&
        filters.length > 0 &&
        filters.map((filter, idx) => (
          <div key={idx}>
            <CategoryListing
              title={filter.filter_type}
              categories={filter.entries}
              limitCount={10}
            />
          </div>
        ))}
    </div>
  );
}

export default JobsFilters;
