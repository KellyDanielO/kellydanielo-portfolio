import { Outlet, Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTop";
import ScrollToAnchor from "../components/ScrollAnchor";
import MenuIcon from "../components/MenuComponent";

const Layout = () => {
  return (
    <>
      <ScrollToAnchor />
      <div className="font-roboto bg-main px-10 text-white">
        <nav className="py-5 px-2 lg:px-10 flex justify-between relative items-start  bg-main/60 flex-col lg:flex-row ">
          <h1 className="font-lemon text-2xl text-primary">
            <Link to="/">Kelly Daniel</Link>
          </h1>

          <ul className="hidden gap-5 lg:flex">
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
