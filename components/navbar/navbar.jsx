import React, { useState } from "react";

import PrimaryButton from "../buttons/primary-button";
import ProfileButton from "./profile-button";
import NavLogo from "./nav-logo";
import NavLink from "./nav-link";
import MaxWidthContainer from "../containers/max-width-container";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center navbar-expand-lg bg-gray-50 h-auto md:h-24">
        <MaxWidthContainer>
          <div className="flex flex-wrap items-center justify-between w-full px-4">
            <div className="flex flex-row items-center gap-2 justify-between w-full md:w-auto">
              <div
                className="flex md:hidden cursor-pointer"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                |||
              </div>
              <NavLogo />
              <div className="w-full flex justify-end md:hidden">
                <ProfileButton initials="jb" notificationCount={2} />
              </div>
            </div>
            <div
              className={`bg-white w-full md:w-auto z-10 md:z-auto md:flex flex-wrap items-center justify-between gap-10 ${
                navbarOpen ? "block" : "hidden"
              }`}
            >
              <NavLink label="Profile" />
              <NavLink label="Jobs" />
              <NavLink label="Professional Network" />
              <NavLink label="Lounge" />
              <NavLink label="Salary" />
              <div className="md:hidden">
                <NavLink label="Logout" />
              </div>
            </div>
            <div className="bg-white w-full relative justify-between hidden md:w-auto md:static md:block md:justify-start">
              <div className="container-fluid flex flex-wrap items-center justify-between gap-10">
                <PrimaryButton label="CREATE JOB" />
                <ProfileButton initials="jb" notificationCount={2} />
                <NavLink label="Logout" />
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </nav>
    </>
  );
};

export default Navbar;
