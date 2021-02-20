import React, { useState } from "react";

import PrimaryButton from "../buttons/primary-button";
import SecondaryButton from "../buttons/secondary-button";

const JobEntry = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="border-solid border-t w-full flex flex-row items-center cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="my-4 flex-col w-full">
          <div className="text text-m font-bold">RN Outpatient Surgery</div>
          <div className="text">
            Full time | $19.5 - $37.6 an hour | Village, CA
          </div>
        </div>
        <div className="w-full text-right text">3 Weeks ago</div>
      </div>
      {/* Job Details */}
      {showDetails && (
        <div>
          <div className="grid grid-cols-4">
            {/* Job description */}
            <div className="flex flex-col col-span-3 gap-5">
              <div className="grid grid-cols-2">
                <div className="text text-m font-bold">Department:</div>
                <p className="text">Department</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="text text-m font-bold">Hours / shift:</div>
                <p className="text">Day</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="text text-m font-bold">Summary</div>
                <p className="text">
                  Department Department Department Department Department
                  Department Department : Department Department Department
                  Department Department Department Department : Department
                  Department Department Department Department Department
                  Department :
                </p>
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
