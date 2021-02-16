import React from "react";

const ProfileButton = ({
  initials = "",
  color = "bg-blue-500",
  notificationCount = 0,
}) => {
  const notificationCountText =
    notificationCount > 99 ? "99+" : notificationCount.toString();

  const notificationBadgeWidth = notificationCount
    ? `${4   + notificationCountText.length}`
    : ``;
  return (
    <div className="relative h-10 w-10">
      <div className="flex flex-wrap justify-center items-center rounded-full border border-gray-100 shadow-sm bg-blue-500 h-10 w-10">
        <div className="text-white font-bold text-lg uppercase">{initials}</div>
        {notificationCount > 0 && (
          <div
            className={`absolute top-0 right-0 h-5 w-${notificationBadgeWidth} bg-red-500 border-2 border-white rounded-full`}
          >
            <div className="h-full w-full flex flex-wrap justify-center items-center">
              <div className="text-xs text-white font-bold">
                {notificationCountText}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileButton;
