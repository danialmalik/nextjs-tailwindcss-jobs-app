import React from "react";

import Link from "next/link";

const NavLink = ({ label, link = "#" }) => {
  return (
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <Link href={link}>
        <a className="text-lg  leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black">
          {label}
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
