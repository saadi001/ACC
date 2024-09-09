"use client";

import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-scroll";

const PreviosStudentsButton = () => {
  return (
    <Link to="gallery" smooth duration={400}>
      <button className="text-sm md:text-base flex items-center gap-2">
        Previous Works <MdOutlineArrowOutward />
      </button>
    </Link>
  );
};

export default PreviosStudentsButton;
