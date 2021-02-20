import React, { useState } from "react";

import JobEntry from "./job-entry";

const JobsGroup = ({ count, hospitalName, jobs = [] }) => {
  const [isListingOpen, setIsListingOpen] = useState(false);

  return (
    <div className="px-4">
      <div
        className="flex flex-row items-center my-3 cursor-pointer"
        onClick={() => setIsListingOpen(!isListingOpen)}
      >
        <div className="rounded-lg w-10 text-center bg-gray-400 text-white text-xl tracking-widest py-2 px-1 mr-2">
          {hospitalName.slice(0, 2).toUpperCase()}
        </div>
        <div className="text text-black h-full">
          {count} Job{count > 1 && "s"} for {hospitalName}
        </div>
      </div>
      {/* Jobs list */}
      {isListingOpen &&
        jobs.map((job, idx) => <JobEntry key={idx} job={job} />)}
    </div>
  );
};

export default JobsGroup;
