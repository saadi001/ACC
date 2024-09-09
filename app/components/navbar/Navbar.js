"use client";
import { menuData } from "@/app/asset/data/menu";
import Link from "next/link";
import { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between py-3 md:py-5">
      <div>
        <Link href={"/"} className="text-2xl font-semibold text-[#0ABAB5]">
          Antu&apos;s
          <span className="text-xs block -mt-2 text-gray-800">
            Chemistry Care
          </span>
        </Link>
      </div>
      <div className="hidden md:inline-block">
        <ul className="flex items-center gap-12 font-medium text-sm text-gray-800">
          {menuData.map((menu, i) => {
            return (
              <LinkScroll
                to={menu}
                smooth
                duration={400}
                key={i}
                className="hover:text-emerald-500 cursor-pointer capitalize"
              >
                {menu}
              </LinkScroll>
            );
          })}
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-5 text-lg">
        <TiSocialFacebook className="hover:text-emerald-500 cursor-pointer" />
        <TiSocialTwitter className="hover:text-emerald-500 cursor-pointer" />
        <AiFillYoutube className="hover:text-emerald-500 cursor-pointer" />
      </div>
      <div className="md:hidden">
        <button
          className="flex-col justify-center items-center flex"
          onClick={handleClick}
        >
          <span
            className={`bg-gray-800  block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-gray-800 block transition-all duration-150 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-gray-800 block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        {/* <DropdownMenu className="">
          <DropdownMenuTrigger asChild>
            <div className="px-2 py-1 rounded bg-gray-100 cursor-pointer">
              <HamburgerMenuIcon className="text-lg font-bold text-gray-700" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
            {menuData.map((menu, i) => {
              return (
                <DropdownMenuItem key={i} className="capitalize">
                  <LinkScroll to={menu} smooth duration={400}>
                    {menu}
                  </LinkScroll>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      {isOpen ? (
        // <div onClick={handleClick} className="w-screen h-screen fixed top-0 left-0 z-40 bg-gray-500/50">
        <div className="min-w-[70vw] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-gray-800 rounded-md border-red-500 p-5 backdrop-blur-md py-32">
          {menuData.map((menu, i) => {
            return (
              <LinkScroll
                onClick={handleClick}
                to={menu}
                smooth
                duration={400}
                key={i}
                className="capitalize text-center text-lg py-1 text-white/70 block cursor-pointer"
              >
                {menu}
              </LinkScroll>
            );
          })}
        </div>
      ) : // </div>
      null}
    </div>
  );
};

export default Navbar;
