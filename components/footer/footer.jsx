import React from "react";

import MaxWidthContainer from "../containers/max-width-container";
import AboutUs from "./about-us";
import Sitemap from "./sitemap";
import Privacy from "./privacy";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <MaxWidthContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 mg-auto w-full py-3">
          <div className="pr-4">
            <AboutUs />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <Sitemap />
            <Privacy />
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
