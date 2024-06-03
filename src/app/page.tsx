"use client"
import Image from "next/image";
import Link from "next/link";
import MeImage from "../assets/images/me.png";
import { LegacyRef, RefObject, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./components/SectionObserver";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/Footer";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaLocationArrow } from "react-icons/fa";
import AppSvg from '../assets/svgs/app.svg'
import FrontendSvg from '../assets/svgs/frontend.svg'
import BackendSvg from '../assets/svgs/backend.svg'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home-section');
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const skillRef = useRef<HTMLAnchorElement>(null);
  const serviceRef = useRef<HTMLAnchorElement>(null);
  const projectRef = useRef<HTMLAnchorElement>(null);

  useIntersectionObserver(setActiveSection);

  useEffect(() => {
    switch (activeSection) {
      case 'home-section':
        homeRef.current?.classList.add('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'about-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.add('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'resume-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.add('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'skill-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.add('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'service-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.add('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'project-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.add('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.add('active');
        break;
      case 'contact-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.add('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      default:
        homeRef.current?.classList.add('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
    }
  }, [activeSection]);
  const publicKey = "user_j9YNgCviV2OlwriYmRWPk";
  const templateId = "template_jcxprnp";
  const serviceId = "service_ek5fby6";
  //   const publicKey = process.env.EMAIL_JS_PUBLIC_KEY;
  //   const templateId = process.env.EMAIL_JS_TEMPLATE_ID;
  //   const serviceId = process.env.EMAIL_JS_SERVICE_ID;

  useEffect(() => emailjs.init(`${publicKey}`), []);
  const emailRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const nameRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const subjectRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const messageRef: RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(`${serviceId}`, `${templateId}`, {
        to_name: nameRef.current !== null ? nameRef.current.value : "",
        recipient: emailRef.current !== null ? emailRef.current.value : "",
        message: messageRef.current !== null ? messageRef.current.value : "",
      });
      alert("Email successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className=" fixed p-5 bg-shade/25 backdrop-blur-md lg:bg-shade w-full lg:w-auto lg:top-1/2 bottom-0 lg:bottom-auto left-0 lg:left-11 transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-50 lg:rounded-xl">
        <div className="flex flex-row lg:flex-col justify-around lg:justify-center items-center gap-5">

          <FaFacebook
            className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
            onClick={() =>
              openLink("https://www.facebook.com/kelly.daniel.1806253")
            }
          />
          <FaWhatsapp
            className="text-2xl text-white cursor-pointer hover:text-primary transition-all"

            onClick={() =>
              openLink("https://wa.me/22944255279")
            }
          />
          <FaGithub
            className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
            onClick={() =>
              openLink("https://github.com/KellyDanielO")
            }
          />
          <FaLinkedinIn
            className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
            onClick={() =>
              openLink("https://www.linkedin.com/in/kelly-daniel-4b0909212/")
            }
          />
          <FaTwitter
            className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
            onClick={() => openLink("https://twitter.com/kelly_daniel_o")}
          />
          <FaYoutube
            className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
            onClick={() =>
              openLink("https://www.youtube.com/@kelly_daniel_official")
            }
          />
          <FaInstagram
            className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
            onClick={() =>
              openLink("https://www.instagram.com/kelly_daniel_official/")
            }
          />
        </div>
      </div>
      <main className="min-h-screen bg-main w-full overflow-auto font-roboto">
        {/* Navigation Bar */}
        <NavBar homeRef={homeRef} aboutRef={aboutRef} resumeRef={resumeRef} skillRef={skillRef} contactRef={contactRef} oberver={activeSection} serviceRef={serviceRef} />
        {/* Navigation Bar ending */}

        {/* Hero section beginning */}
        <section id="home-section" className="container-wrapper flex justify-center items-center flex-col py-20 lg:py-40 gap-2 lg:gap-5">
          <small className="text-primary font-freeman text-sm lg:text-2xl">Welcome!</small>
          <h1 className="text-2xl lg:text-8xl font-roboto font-bold text-center">Let's Transform Ideas Into <br />Digital Success</h1>
          <h2 className="text-lg lg:text-2xl text-greyColor text-center">I Build, Manage, and Elevate Your Digital Presence</h2>
          <div className="flex gap-5 items-center">
            <Link href={""} className="uppercase py-3 px-5 text-sm lg:text-lg bg-primary/60 font-freeman rounded-full" >Hire me</Link>
            <Link href={""} className="uppercase py-3 px-5 text-sm lg:text-lg bg-transparent border-2 font-freeman rounded-full" >My works</Link>
          </div>

        </section>
        {/* Hero section ending */}

        {/* About Section */}
        <section id="about-section" className="container-wrapper flex justify-between items-center py-20 flex-col lg:flex-row">
          <div className="w-full lg:w-[45%] flex justify-center items-center lg:items-start h-[70vh]">
            <Image
              src={MeImage}
              alt="Kelly Daniel"
              // layout="responsive"
              className="w-full h-full object-contain"
            />
          </div>
          <div className='w-full lg:w-[45%] transition-all ease-in flex flex-col items-center lg:items-start gap-5 text-center lg:text-justify'>
            <h1 className="font-freeman text-6xl">About Me</h1>
            <p className="text-greyColor font-roboto font-medium text-lg">
              I am a versatile web and software developer from Nigeria, focused on turning ideas into digital realities. With expertise in front-end technologies and back-end proficiency with Django, I create dynamic and user-friendly web applications. My experience spans various programming languages and frameworks, enabling me to deliver effective digital solutions.</p>
            <p className="text-greyColor font-roboto font-medium text-lg">I have hands-on experience with a wide range of technologies, including HTML, CSS, JavaScript, and modern web frameworks like React and Next.js. This diverse skill set allows me to build intuitive and responsive user interfaces.</p>
            <p className="text-greyColor font-roboto font-medium text-lg">In addition to my front-end skills, I am proficient in server-side languages like PHP and database management systems such as MySQL and PostgreSQL. My integrated approach ensures seamless functionality for web applications, and I am committed to delivering robust and scalable solutions that drive success for my clients.</p>
            <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
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
          <p className="text-greyColor text-lg text-center lg:text-justify">Embrace the journey, cherish the moments, and create your own path.</p>
          <div className="flex w-full flex-wrap justify-center gap-2 flex-col lg:flex-row">
            <div className="lg:w-[45%] bg-shade p-10">
              <span className="text-primary text-3xl font-freeman font-bold">2021-Date</span>
              <h2 className="text-3xl font-roboto">Software Developer</h2>
              <span className="position">OMEGA POWER MINISTRIES</span>
              <p className="mt-4">Collaborated with the church team to develop impactful mobile applications and enhance their digital presence through website optimization</p>
            </div>
            <div className="lg:w-[45%] bg-shade p-10">
              <span className="text-primary text-3xl font-freeman font-bold">2023-Date</span>
              <h2 className="text-3xl font-roboto">Flutter Developer <span className="text-sm">(Part-time)</span> </h2>
              <span className="position">Beninfy</span>
              <p className="mt-4">Collaborated with a dedicated team to innovate and develop a cutting-edge ride-hailing application, driving forward user experience and technological advancement in the transportation industry.</p>
            </div>
            <div className="lg:w-[45%] bg-shade p-10">
              <span className="text-primary text-3xl font-freeman font-bold">2024-Date</span>
              <h2 className="text-3xl font-roboto">IT Manager <span className="text-sm"></span> </h2>
              <span className="position">Climate Resillency</span>
              <p className="mt-4">Leading a talented team in pioneering innovative IT solutions, driving digital transformation and enhancing operational efficiency for optimal organizational success.</p>
            </div>
          </div>
          <Link href={""} className="uppercase py-3 px-5 bg-shade hover:bg-primary/70 transition-all ease-in font-freeman rounded-full" >Download CV</Link>
        </section>
        <section id="service-section" className="container-wrapper flex justify-between items-center py-28 flex-col gap-3 ">
          <h1 className="font-freeman text-6xl">My Services</h1>
          <p className="text-greyColor text-lg pt-5">Embrace the transformation, celebrate every achievement, and carve your distinct trajectory with unwavering dedication and adaptability</p>
          <div className="w-full flex justify-between py-20 flex-col lg:flex-row gap-y-3">
            {/* App Development */}
            <div className="lg:w-[30%] py-10 bg-shade flex justify-center items-center gap-5 flex-col">
              <Image
                src={AppSvg}
                alt="App Development"
                // layout="responsive"
                className="w-36 object-contain"
              />
              <h1 className="text-3xl font-freeman">App Development</h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            {/* Front End Development */}
            <div className="lg:w-[30%] py-10 bg-shade flex justify-center items-center gap-5 flex-col">
              <Image
                src={FrontendSvg}
                alt="Fronend Development"
                // layout="responsive"
                className="w-36 object-contain"
              />
              <h1 className="text-3xl font-freeman">Front-end Development</h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            {/* Back End Development */}
            <div className="lg:w-[30%] py-10 bg-shade flex justify-center items-center gap-5 flex-col">
              <Image
                src={BackendSvg}
                alt="Fronend Development"
                // layout="responsive"
                className="w-36 object-contain"
              />
              <h1 className="text-3xl font-freeman">Back-end Development</h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Skill Section */}
        <section id="skill-section" className="container-wrapper flex justify-between items-center py-20 flex-col gap-5 ">
          <h1 className="font-freeman text-6xl">My SKills</h1>
          <p className="text-greyColor text-lg text-center lg:text-justify">Embrace the journey, treasure each milestone, and forge your unique path forward with determination and resilience.</p>
          <div className="w-full flex flex-wrap gap-10">
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-5">
              <div className="flex justify-between items-center w-full">
                <h3>HTML/CSS</h3>
                <p>80%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-shade">
                <div className="h-2 w-[80%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <h3>PHP</h3>
                <p>80%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-shade">
                <div className="h-2 w-[80%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <h3>JavaScript</h3>
                <p>75%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-shade">
                <div className="h-2 w-[75%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <h3>Flutter</h3>
                <p>75%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-shade">
                <div className="h-2 w-[75%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <h3>React</h3>
                <p>70%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-shade">
                <div className="h-2 w-[70%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <h3>NextJS</h3>
                <p>65%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-shade">
                <div className="h-2 w-[65%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <h3>python (Django)</h3>
                <p>75%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-shade">
                <div className="h-2 w-[75%] bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
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
        {/* Contact Section */}

        <section id="contact-section" className="container-wrapper flex justify-between items-center py-20 flex-col gap-3 ">
          <h1 className="font-freeman text-6xl">Contact Me</h1>
          <p className="text-greyColor text-lg text-center lg:text-justify">Let's connect and explore how we can create impactful digital experiences together.</p>
          <div className="flex items-center justify-center gap-x-16 py-5 flex-col lg:flex-row gap-y-5">
            {/* Email */}
            <div className="flex justify-center items-center gap-3 flex-col">
              <div className="text-3xl p-7 bg-shade text-primary/70 rounded-full">
                <MdEmail />
              </div>
              <p className="text-lg font-semibold">E-mail</p>
              <a href="mailto:itzkellydaniel@gmail.com" className="text-xl hover:text-primary transition-all ease-in">itzkellydaniel@gmail.com</a>
            </div>
            {/* Email */}
            <div className="flex justify-center items-center gap-3 flex-col">
              <div className="text-3xl p-7 bg-shade text-primary/70 rounded-full">
                <FaPhone />
              </div>
              <p className="text-lg font-semibold">Phone Number</p>
              <a href="tel:+2348067081323" className="text-xl hover:text-primary transition-all ease-in">+234 806 708 1323</a>
            </div>
            {/* Location */}
            <div className="flex justify-center items-center gap-3 flex-col">
              <div className="text-3xl p-7 bg-shade text-primary/70 rounded-full">
                <FaLocationArrow />
              </div>
              <p className="text-lg font-semibold">Location</p>
              <p>Nigeria, Rivers State, Port Harcourt</p>
            </div>
          </div>
          <div className="w-full  flex justify-center items-center flex-col lg:flex-row ">
            <div className="w-full lg:w-[30%] flex justify-center items-center lg:items-start h-[60vh] bg-shade p-5">
              <Image
                src={MeImage}
                alt="Kelly Daniel"
                // layout="responsive"
                className="w-full h-full object-contain"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full lg:w-[40%] justify-around items-center pt-10 md:w-[60%] h-[60vh] bg-white/65 gap-3"
            >
              {/* Full name */}
              <div className=" px-5 w-full  ">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="full_name"
                  ref={nameRef}
                  required
                  className=" outline-none bg-transparent focus:border-black border-greyColor rounded-lg text-black placeholder:text-black border-2 p-3 transition-all w-full text-sm lg:text-xl"
                />
              </div>
              {/* Email*/}
              <div className=" px-5 w-full  ">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  ref={subjectRef}
                  id="subject"
                  className=" outline-none bg-transparent focus:border-black border-greyColor rounded-lg text-black placeholder:text-black border-2 p-3 transition-all w-full text-sm lg:text-xl"
                />
              </div>
              {/* Email*/}
              <div className=" px-5 w-full  ">
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  ref={emailRef}
                  id="email"
                  className=" outline-none bg-transparent focus:border-black border-greyColor rounded-lg text-black placeholder:text-black border-2 p-3 transition-all w-full text-sm lg:text-xl"
                />
              </div>
              {/* Message*/}
              <div className=" px-5 w-full  ">
                <textarea
                  placeholder="Message"
                  required
                  id="message"
                  ref={messageRef}
                  className=" outline-none bg-transparent focus:border-black border-greyColor rounded-lg text-black placeholder:text-black border-2 p-3 transition-all w-full text-sm lg:text-xl resize-y"
                ></textarea>
              </div>
              <button
                className="bg-shade w-[80%] hover:bg-primary/60 border-none font-bold py-3 px-10 rounded-xl  shadow-sm text-white text-sm lg:text-xl transition-all hover:border-transparent"
                type="submit"
                disabled={loading}
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        {/* Footer Section Begin */}
        <FooterComponent />
        {/* Footer Section End */}
      </main>
    </>
  );
}
