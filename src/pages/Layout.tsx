import { Outlet, Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTop";
import ScrollToAnchor from "../components/ScrollAnchor";
import MenuIcon from "../components/MenuComponent";
import Bg from '../images/bg.jpeg';

const Layout = () => {
  return (
    <>
      <ScrollToAnchor />
      <div className="font-roboto bg-main text-blackColor">
        <nav className="py-5 lg:px-10 flex justify-between relative items-start  bg-shade flex-col lg:flex-row ">
          <h1 className="font-lemon text-2xl text-primary ml-5 lg:ml-0">
            <Link to="/">Kelly Daniel</Link>
          </h1>

          <ul className="hidden gap-5 lg:flex">
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/#about">About</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/#services">Services</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* <!-- Hamburger Icon --> */}
          <MenuIcon />
          {/* <!-- <ion-icon name="menu-outline" className="lg:hidden text-3xl"></ion-icon> --> */}

          {/* <!-- Mobile desktop --> */}
          
        </nav>
        <ScrollToTopButton />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
