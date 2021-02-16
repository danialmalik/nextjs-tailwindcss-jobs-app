import React from "react";

const NavLink = ({ label, link = "#" }) => {
  return (
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <a
        className="text-lg  leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
        href={link}
      >
        {label}
      </a>
    </div>
  );
};

export default NavLink;
