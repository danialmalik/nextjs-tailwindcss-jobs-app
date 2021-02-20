import React, { useState } from "react";
import moment from "moment";

import PrimaryButton from "../buttons/primary-button";
import SecondaryButton from "../buttons/secondary-button";

const JobEntry = ({
  job: {
    title,
    jobType,
    salaryRange,
    address,
    createdAt,
    departments,
    shifts,
    summary,
  },
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="border-solid border-t w-full flex flex-row items-center cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="my-4 flex-col w-full">
          <div className="text text-m font-bold">{title}</div>
          <div className="text">
            {jobType} | ${salaryRange.start} - ${salaryRange.end} an hour |{" "}
            {address.city}
          </div>
        </div>
        <div className="w-full text-right text">
          {moment(createdAt).fromNow()}
        </div>
      </div>
      {/* Job Details */}
      {showDetails && (
        <div>
          <div className="grid grid-cols-4 mb-5">
            {/* Job description */}
            <div className="flex flex-col col-span-3 gap-5">
              <div className="grid grid-cols-2">
                <div className="text text-m font-bold">Department:</div>
                <p className="text">{departments.join(", ")}</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="text text-m font-bold">Hours / shifts:</div>
                <p className="text">
                  {shifts.map((shift, idx) => (
                    <span key={idx}>
                      {shift.hours} hour{shift.hours > 1 && "s"} / {shift.shift}
                    </span>
                  ))}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="text text-m font-bold">Summary</div>
                <p className="text">{summary}</p>
              </div>
            </div>
            {/* Action buttons */}
            <div className="w-full flex flex-col items-end justify-center gap-3">
              <PrimaryButton label="Job Details" />
              <SecondaryButton label="Save Job" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobEntry;
