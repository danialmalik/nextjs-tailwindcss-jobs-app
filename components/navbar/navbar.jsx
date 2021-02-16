import React from "react";

import PrimaryButton from "../buttons/primary-button";
import ProfileButton from "./profile-button";
import NavLogo from "./nav-logo";
import NavLink from "./nav-link";
import MaxWidthContainer from "../containers/max-width-container";

const Navbar = () => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between navbar-expand-lg bg-gray-50 mb-3 h-24">
        <MaxWidthContainer>
          <div className="flex flex-wrap items-center justify-between">
            <NavLogo />
            <div className="container-fluid flex flex-wrap items-center justify-between gap-10">
              <NavLink label="Profile" />
              <NavLink label="Jobs" />
              <NavLink label="Professional Network" />
              <NavLink label="Lounge" />
              <NavLink label="Salary" />
            </div>
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className="container-fluid flex flex-wrap items-center justify-between gap-10">
                <PrimaryButton label="CREATE JOB" />
                <ProfileButton className="hidden lg:block" initials="jb" notificationCount={2} />
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
