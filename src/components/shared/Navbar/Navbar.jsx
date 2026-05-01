import React from "react";
import Navlinks from "./Navlinks";
import Link from "next/link";
import Image from "next/image";
import ActionButtons from "./ActionButtons";
import Greetings from "./Greetings";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <Navlinks />
            <div className="flex justify-center items-center mt-4">
              <ActionButtons />
            </div>
          </ul>
        </div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="mr-2 w-auto h-auto"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Navlinks />
        </ul>
      </div>
      <div className="navbar-end">
        <Greetings />
        <div className="hidden lg:block">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
