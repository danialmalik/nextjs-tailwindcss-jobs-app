import React from "react";

import CategoryListing from "../common/category-listing";

const JobsFilters = () => {
  return (
    <>
      <div className="my-6 w-full">
        <CategoryListing
          title="Job openings"
          categories={[
            {
              label: "abcabcabc a",
              count: 10000,
            },
            {
              label: "abc",
              count: 10,
            },
            {
              label: "abc",
              count: 10,
            },
            {
              label: "abc",
              count: 10,
            },
          ]}
          limitCount={2}
        />
      </div>
      <div className="my-2 w-full">
        <CategoryListing
          title="Job openings"
          categories={[
            {
              label: "abc",
              count: 10,
            },
            {
              label: "abc",
              count: 10,
            },
          ]}
        />
      </div>
    </>
  );
};

export default JobsFilters;
