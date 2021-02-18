import React from "react";

import Link from "next/link";

const Sitemap = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="text text-2xl font-bold my-2">Sitemap</div>
      {["Nurses", "Employers", "Social networking", "Jobs"].map(
        (label, idx) => (
          <Link key={idx} href="#">
            <a className="my-1">{label}</a>
          </Link>
        )
      )}
    </div>
  );
};

export default Sitemap;
