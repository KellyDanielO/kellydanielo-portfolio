import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuIcon = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="absolute top-6 right-2 z-20">
        <button
          id="menu-btn"
          className={`block hamburger lg:hidden focus:outline-none  ${isActive ? "open" : ""
            } `}
          onClick={toggleActiveClass}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <ul
        className={`hidden hm_menu md mx-auto gap-6 flex-col bg-shade w-10/12 shadow-lg p-5  lg:hidden ${isActive ? "active" : ""
          } `}
      >
        <div className="flex justify-center items-center flex-col h-screen gap-5 text-xl">
          <li
            className="nav-item hover:text-primary transition-all"
            onClick={toggleActiveClass}
          >
            <Link to="/#home">Home</Link>
          </li>
          <li
            className="nav-item hover:text-primary transition-all"
            onClick={toggleActiveClass}
          >
            <Link to="/#about">About</Link>
          </li>
          <li
            className="nav-item hover:text-primary transition-all">
            <Link to="/#featured">Featured</Link>
          </li>
          <li
            className="nav-item hover:text-primary transition-all"
            onClick={toggleActiveClass}
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li
            className="nav-item hover:text-primary transition-all"
            onClick={toggleActiveClass}
          >
            <Link to="/#services">Services</Link>
          </li>
          <li
            className="nav-item hover:text-primary transition-all"
            onClick={toggleActiveClass}
          >
            <Link to="/#contact">Contact</Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default MenuIcon;
