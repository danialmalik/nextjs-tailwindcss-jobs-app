import React, { useState } from "react";

import JobEntry from "./job-entry";

const JobsGroup = ({ count, hospital }) => {
  const [isListingOpen, setIsListingOpen] = useState(false);

  return (
    <div className="px-4">
      <div
        className="flex flex-row items-center my-3 cursor-pointer"
        onClick={() => setIsListingOpen(!isListingOpen)}
      >
        <div className="rounded-lg bg-gray-400 text-white text-xl tracking-widest py-2 px-1 mr-2">
          LG
        </div>
        <div className="text text-black h-full">
          {count} Job{count > 1 && "s"} for {hospital}
        </div>
      </div>
      {/* Jobs list */}
      {isListingOpen && (
        <>
          <JobEntry />
          <JobEntry />
          <JobEntry />
          <JobEntry />
        </>
      )}
    </div>
  );
};

export default JobsGroup;
