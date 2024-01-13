import { Outlet, Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTop";
import ScrollToAnchor from "../components/ScrollAnchor";
import MenuIcon from "../components/MenuComponent";

const Layout = () => {
  return (
    <>
      <ScrollToAnchor />
      <div className="font-roboto bg-main text-blackColor overflow-x-hidden">
        <nav className="py-4  lg:px-10 flex justify-between fixed top-0 left-0 right-0 z-50 items-start  bg-shade flex-col lg:flex-row ">
          <h1 className="font-lemon text-2xl  lg:text-3xl text-primary ml-5 lg:ml-0">
            <Link to="/">Kelly Daniel</Link>
          </h1>

          <ul className="hidden gap-5 lg:flex">
            <li className="nav-item hover:text-primary transition-all text-lg font-bold">
              <Link to="/#home">Home</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all text-lg font-bold">
              <Link to="/#about">About</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all text-lg font-bold">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all text-lg font-bold">
              <Link to="/#services">Services</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all text-lg font-bold">
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
        <div className="w-full py-3 bg-primary flex justify-center items-center">
          <strong className="text-white text-xl">&copy;2024</strong>
        </div>
      </div>
    </>
  );
};

export default Layout;
