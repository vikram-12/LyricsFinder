import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to={`/`}>
      <div className="w-full p-4 bg-black text-center text-lg text-white font-semibold">
        Lyrics Finder
      </div>
    </Link>
  );
};

export default Navbar;
