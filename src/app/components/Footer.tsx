import Link from "next/link"
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const FooterComponent = () => {
    const openLink = (link: string) => {
        window.open(link, "_blank");
    };
    return <>

        <footer className="container-wrapper bg-main  text-white py-5  flex justify-between items-start flex-col lg:flex-row gap-5 pb-10">
            <div className="lg:w-[25%] flex flex-col items-start gap-2">
                <h1 className="text-3xl font-freeman">About</h1>
                <em className="text-lg text-greyColor">I'm a versatile web and software developer from Nigeria, turning ideas into digital realities.</em>
                {/* Icon Area */}
                <div className="flex gap-3 justify-between items-center flex-wrap text-5xl">
                    <FaFacebook
                        className="text-2xl text-greyColor cursor-pointer hover:text-primary/55 transition-all"
                        onClick={() =>
                            openLink("https://www.facebook.com/kelly.daniel.1806253")
                        }
                    />
                    <FaWhatsapp
                        className="text-2xl text-greyColor cursor-pointer hover:text-primary/55 transition-all"
                        onClick={() =>
                            openLink("https://wa.me/22944255279")
                        }
                    />
                    <FaGithub
                        className="text-2xl text-greyColor cursor-pointer hover:text-primary/55 transition-all"
                        onClick={() =>
                            openLink("https://github.com/KellyDanielO")
                        }
                    />
                    <FaLinkedinIn
                        className="text-2xl text-greyColor cursor-pointer hover:text-primary/55 transition-all"
                        onClick={() =>
                            openLink("https://www.linkedin.com/in/kelly-daniel-4b0909212/")
                        }
                    />
                    <FaTwitter
                        className="text-2xl text-greyColor cursor-pointer hover:text-primary/55 transition-all"
                        onClick={() => openLink("https://twitter.com/kelly_daniel_o")}
                    />
                </div>
            </div>
            {/* Links */}
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-3xl font-freeman">Links</h1>
                <ul className="flex flex-col justify-center items-start text-sm gap-2 text-greyColor">
                    <li><Link href={"/#home-section"} className="hover:text-primary transition-all ease-linear"  >→ Home</Link></li>
                    <li><Link href={"/#about-section"} className="hover:text-primary transition-all ease-linear"  >→ About</Link></li>
                    <li><Link href={"/#resume-section"} className="hover:text-primary transition-all ease-linear ">→ Resume</Link></li>
                    <li><Link href={"/#skill-section"} className="hover:text-primary transition-all ease-linear"  >→ Skills</Link></li>
                    <li><Link href={"/#service-section"} className="hover:text-primary transition-all ease-linear ">→ Services</Link></li>
                    <li><Link href={"/#project-section"} className="hover:text-primary transition-all ease-linear ">→ Projects</Link></li>
                    <li><Link href={"/#contact-section"} className="hover:text-primary transition-all ease-linear"  >→ Contact</Link></li>
                </ul>
            </div>
            {/* Servies */}
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-3xl font-freeman">Servies</h1>
                <ul className="flex flex-col justify-center items-start text-sm gap-2 text-greyColor">
                    <li><Link href={"/#service-section"} className="hover:text-primary transition-all ease-linear" >→ Full stack website</Link></li>
                    <li><Link href={"/#service-section"} className="hover:text-primary transition-all ease-linear" >→ Front-end</Link></li>
                    <li><Link href={"/#service-section"} className="hover:text-primary transition-all ease-linear">→ Back-end</Link></li>
                    <li><Link href={"/#service-section"} className="hover:text-primary transition-all ease-linear" >→ Mobile App development</Link></li>
                    <li><Link href={"/#service-section"} className="hover:text-primary transition-all ease-linear" >→ Desktop App development</Link></li>
                </ul>
            </div>
            <div className="lg:w-[25%] flex flex-col items-start gap-2">
                <h1 className="text-3xl font-freeman">Have a question?</h1>
                <div className="flex flex-col justify-center items-start gap-2 text-greyColor">
                    <Link href={"mailto:itzkellydaniel@gmail.com"} className="hover:text-primary transition-all ease-linear" > itzkellydaniel@gmail.com</Link>
                    <Link href={"tel:+2347077962564"} className="hover:text-primary transition-all ease-linear" >+234-70-7796-2564</Link>
                </div>
                {/* Icon Area */}
            </div>
        </footer>
        <h2 className="text-center text-greyColor text-sm pt-2 pb-20 px-5 lg:pb-5">Copyright ©2025 All rights reserved | Made with ❤️ by Kelly Daniel</h2></>
}
export default FooterComponent
