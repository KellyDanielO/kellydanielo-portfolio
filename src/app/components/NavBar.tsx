import Link from "next/link";
import { RefObject, useState } from "react";
interface NavBarProps {
    homeRef: RefObject<HTMLAnchorElement>,
    aboutRef: RefObject<HTMLAnchorElement>,
    resumeRef: RefObject<HTMLAnchorElement>,
    skillRef: RefObject<HTMLAnchorElement>,
    contactRef: RefObject<HTMLAnchorElement>
    serviceRef: RefObject<HTMLAnchorElement>
    oberver: any
}

const NavBar = ({ homeRef, aboutRef, resumeRef, skillRef, contactRef, serviceRef }: NavBarProps) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    return <nav className="w-full lg:w-[80%] bg-main z-10 fixed top-0 left-1/2 transform -translate-x-1/2  py-5  flex justify-between lg:px-o px-5">
        {/* Title Section */}
        <Link href={"#"} className="font-bold uppercase text-2xl font-freeman transition-all ease-in hover:text-primary" >KELLY DANIEL</Link>
        <ul className="hidden lg:flex gap-5">
            <li><Link href={"#home-section"} className="nav-links" ref={homeRef}>Home</Link></li>
            <li><Link href={"#about-section"} className="nav-links" ref={aboutRef}>About</Link></li>
            <li><Link href={"#resume-section"} className="nav-links" ref={resumeRef}>Resume</Link></li>
            <li><Link href={"#service-section"} className="nav-links" ref={serviceRef}>Services</Link></li>
            <li><Link href={"#skill-section"} className="nav-links" ref={skillRef}>Skills</Link></li>
            <li><Link href={"#project-section"} className="nav-links">Projects</Link></li>
            <li><Link href={"#contact-section"} className="nav-links" ref={contactRef}>Contact</Link></li>
            {/* <li><Link href={""} className="nav-links">{oberver}</Link></li> */}
        </ul>

        {/* Mobile Menu toggle */}
        <button
            id="menu-btn"
            className={`block hamburger lg:hidden focus:outline-none z-50  ${isActive ? "open" : ""
                } `}
            onClick={toggleActiveClass}
        >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </button>
    </nav>
}
export default NavBar;

function setIsActive(arg0: boolean) {
    throw new Error("Function not implemented.");
}
