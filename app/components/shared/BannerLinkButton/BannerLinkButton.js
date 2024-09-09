"use client";

import { Link } from "react-scroll";

const BannerLinkButton = () => {
  return (
    <Link to="contact" smooth duration={400}>
      <button className=" text-sm md:text-base px-5 py-1.5 bg-gradient-to-br rounded-lg from-emerald-500 to-[#0ABAB5] text-white capitalize">
        join now
      </button>
    </Link>
  );
};

export default BannerLinkButton;
