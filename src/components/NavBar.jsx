import React from "react";
import { assets } from "../assets/assets";
import "../../src/index.css";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useClerk();

  return (
    <div className="shadow py-2 ">
      <header className="container 2xl:px-20 mx-auto px-6.5 flex justify-between items-center">
        <img
          src={assets.logo}
          alt="logo"
          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
        />
        {user ? (
          <div className="flex items-center gap-2">
            <Link to={"/applications"}>Applied Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">
              {" "}
              Hi {`${user.firstName} ${user.lastName} !`}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-sm">
            <button className="text-gray-600">Recruiter login</button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              login
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
