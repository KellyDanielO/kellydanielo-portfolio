import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuIcon = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    // <div className={`myDiv ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
    //   <p>Click me to toggle the 'active' class!</p>
    // </div>
    <>
      <div className="absolute top-6 right-2">
        <button
          id="menu-btn"
          className={`block hamburger lg:hidden focus:outline-none text- ${
            isActive ? "open" : ""
          } `}
          onClick={toggleActiveClass}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <ul
        className={`hidden hm_menu md mx-auto gap-6 flex-col w-10/12 shadow-lg p-5 lg:hidden ${
          isActive ? "active" : ""
        } `}
      >
        <li className="nav-item hover:text-primary transition-all">
          <Link to="/#home">Home</Link>
        </li>
        <li className="nav-item hover:text-primary transition-all">
          <Link to="/#about">About</Link>
        </li>
        <li className="nav-item hover:text-primary transition-all">
          <Link to="/#skills">Skills</Link>
        </li>
        <li className="nav-item hover:text-primary transition-all">
          <Link to="/#services">Portfolio</Link>
        </li>
        <li className="nav-item hover:text-primary transition-all">
          <Link to="/#services">Services</Link>
        </li>
        <li className="nav-item hover:text-primary transition-all">
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MenuIcon;
