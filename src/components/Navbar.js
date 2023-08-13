import React from "react";
import logo from "../assests/logo.png";

const Navbar = () => {
  return (
    <div className="flex">
      <img src={logo} className="w-42 h-16" alt="logo" />
    </div>
  );
};

export default Navbar;
