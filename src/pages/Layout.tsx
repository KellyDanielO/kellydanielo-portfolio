import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="font-roboto bg-main px-10 text-white">
        <nav className="py-5 px-10 flex justify-between items-center fixed top-0 left-0 right-0">
          <h1 className="font-lemon text-2xl text-primary">Kelly Daniel</h1>

          <ul className="flex gap-5">
            <li className="nav-item text-primary transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/services">Portfolio</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-item hover:text-primary transition-all">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
