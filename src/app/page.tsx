"use client"
import Image from "next/image";
import Link from "next/link";
import MeImage from "../assets/images/me.png";
import TypeIt from "typeit-react";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./components/SectionObserver";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home-section');
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const skilltRef = useRef<HTMLAnchorElement>(null);

  useIntersectionObserver(setActiveSection);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    switch (activeSection) {
      case 'home-section':
        homeRef.current?.classList.add('active');
        skilltRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        break;
      case 'about-section':
        homeRef.current?.classList.remove('active');
        skilltRef.current?.classList.remove('active');
        aboutRef.current?.classList.add('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        break;
      case 'resume-section':
        homeRef.current?.classList.remove('active');
        skilltRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.add('active');
        contactRef.current?.classList.remove('active');
        break;
      case 'skill-section':
        homeRef.current?.classList.remove('active');
        skilltRef.current?.classList.add('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        break;
      default:
        homeRef.current?.classList.add('active');
        skilltRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        break;
    }
  }, [activeSection]);

  return (
    <main className="min-h-screen bg-main w-full overflow-auto">
      {/* Navigation Bar */}
      <nav className={`${isScrolled ? "w-[80%] bg-main z-10 fixed top-0 left-1/2 transform -translate-x-1/2  py-5  flex justify-between " : "container-wrapper py-5 flex justify-between h-5"} `}>
        {/* Title Section */}
        <Link href={"#"} className="font-bold uppercase text-2xl font-freeman transition-all ease-in hover:text-primary" >KELLY DANIEL</Link>
        <ul className="flex gap-5">
          <li><Link href={"#home-section"} className="nav-links" ref={homeRef}>Home</Link></li>
          <li><Link href={"#about-section"} className="nav-links" ref={aboutRef}>About</Link></li>
          <li><Link href={"#resume-section"} className="nav-links" ref={resumeRef}>Resume</Link></li>
          <li><Link href={"#skill-section"} className="nav-links" ref={skilltRef}>Skills</Link></li>
          <li><Link href={""} className="nav-links">Projects</Link></li>
          <li><Link href={""} className="nav-links" ref={contactRef}>Contact</Link></li>
        </ul>
      </nav>
      {/* Navigation Bar ending */}

      {/* Hero section beginning */}
      <section id="home-section" className="container-wrapper flex justify-between items-center py-20">
        <div className='max-w-[40%] transition-all ease-in'>
          <small className="text-primary text-lg">Hello!</small>
          <h1 className='text-6xl font-freeman'>I'm <span className='text-primary'>Kelly Daniel</span><br />
            <TypeIt
              options={{
                strings: [
                  "A Full stack & Flutter Developer."
                ],
                speed: 100,
                waitUntilVisible: true,
              }}
            />
          </h1>
          <br />
          <div className="flex gap-5 items-center">
            <Link href={""} className="uppercase py-3 px-5 bg-primary/60 font-freeman rounded-full" >Hire me</Link>
            <Link href={""} className="uppercase py-3 px-5 bg-transparent border-2 font-freeman rounded-full" >My works</Link>
          </div>

        </div>
        <Image
          src={MeImage}
          alt="Kelly Daniel"
          layout="responsive"
          className="max-w-[45%] max-h-[70vh] object-contain"
        />
      </section>
      {/* Hero section ending */}

      {/* About Section */}
      <section id="about-section" className="container-wrapper flex justify-between items-center py-20">
        <Image
          src={MeImage}
          alt="Kelly Daniel"
          layout="responsive"
          className="max-w-[50%] max-h-[70vh] object-contain"
        />
        <div className='w-[45%] transition-all ease-in flex flex-col items-start gap-5'>
          <h1 className="font-freeman text-6xl">About Me</h1>
          <p className="text-greyColor font-roboto font-medium text-lg">I'm a versatile web developer from Nigeria, turning ideas into digital realities. I specialize in dynamic, user-friendly web applications, with front-end expertise and back-end proficiency in Django.</p>
          <div className="flex gap-2 flex-wrap">
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">HTML</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">CSS</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">JavaScript</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">PHP</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">React</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">NextJS</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Flutter</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Python</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Django</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">MySQL</div>
            <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Postgress</div>
          </div>
          <Link href={""} className="uppercase py-3 px-5 bg-shade hover:bg-primary/70 transition-all ease-in font-freeman rounded-full" >Download CV</Link>
        </div>
      </section>
      {/* End of about section */}
      <section id="resume-section" className="container-wrapper flex justify-between items-center py-20 flex-col gap-2">

        <h1 className="font-freeman text-6xl">Resume</h1>
        <p className="text-greyColor text-lg">Embrace the journey, cherish the moments, and create your own path.</p>
        <div className="flex w-full flex-wrap justify-center gap-2">
          <div className="w-[45%] bg-shade p-10">
            <span className="text-primary text-3xl font-freeman font-bold">2021-Date</span>
            <h2 className="text-3xl font-roboto">Software Developer</h2>
            <span className="position">OMEGA POWER MINISTRIES</span>
            <p className="mt-4">Collaborated with the church team to develop impactful mobile applications and enhance their digital presence through website optimization</p>
          </div>
          <div className="w-[45%] bg-shade p-10">
            <span className="text-primary text-3xl font-freeman font-bold">2023-Date</span>
            <h2 className="text-3xl font-roboto">Flutter Developer <span className="text-sm">(Part-time)</span> </h2>
            <span className="position">Beninfy</span>
            <p className="mt-4">Collaborated with a dedicated team to innovate and develop a cutting-edge ride-hailing application, driving forward user experience and technological advancement in the transportation industry.</p>
          </div>
          <div className="w-[45%] bg-shade p-10">
            <span className="text-primary text-3xl font-freeman font-bold">2024-Date</span>
            <h2 className="text-3xl font-roboto">IT Manager <span className="text-sm"></span> </h2>
            <span className="position">Climate Resillency</span>
            <p className="mt-4">Leading a talented team in pioneering innovative IT solutions, driving digital transformation and enhancing operational efficiency for optimal organizational success.</p>
          </div>
        </div>
        <Link href={""} className="uppercase py-3 px-5 bg-shade hover:bg-primary/70 transition-all ease-in font-freeman rounded-full" >Download CV</Link>
      </section>


      <section id="skill-section" className="container-wrapper flex justify-between items-center py-20 flex-col gap-3">
        <h1 className="font-freeman text-6xl">My SKills</h1>
        <p className="text-greyColor text-lg">Embrace the journey, treasure each milestone, and forge your unique path forward with determination and resilience.</p>
        <div className="w-full flex flex-wrap gap-10">
          <div className="w-[45%] flex justify-between items-center flex-col gap-5">
            <div className="flex justify-between items-center w-full">
              <h3>HTML/CSS</h3>
              <p>80%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-shade">
              <div className="h-2 w-[80%] bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="w-[45%] flex justify-between items-center flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h3>PHP</h3>
              <p>80%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-shade">
              <div className="h-2 w-[80%] bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="w-[45%] flex justify-between items-center flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h3>JavaScript</h3>
              <p>75%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-shade">
              <div className="h-2 w-[75%] bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="w-[45%] flex justify-between items-center flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h3>Flutter</h3>
              <p>75%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-shade">
              <div className="h-2 w-[75%] bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="w-[45%] flex justify-between items-center flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h3>React</h3>
              <p>70%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-shade">
              <div className="h-2 w-[70%] bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="w-[45%] flex justify-between items-center flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h3>NextJS</h3>
              <p>65%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-shade">
              <div className="h-2 w-[65%] bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="w-[45%] flex justify-between items-center flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h3>python (Django)</h3>
              <p>75%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-shade">
              <div className="h-2 w-[75%] bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="w-[45%] flex justify-between items-center flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <h3>MySQL & Postgres</h3>
              <p>70%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-shade">
              <div className="h-2 w-[70%] bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
