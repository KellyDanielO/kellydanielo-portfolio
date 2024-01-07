import avatarImage from "../images/avatar.jpeg";
import TypeIt from "typeit-react";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <section
        className="w-full h-screen flex justify-around items-center"
        id="home"
      >
        <div className="flex flex-col">
          <strong className="text-pretty text-primary/60 mb-3">
            Welcome to my portfolio
          </strong>
          <h1 className="text-7xl font-bold mb-3">
            Hello,
            <br />
            I'm <span className="text-primary/80 font-lemon">Kelly Daniel</span>
          </h1>
          <p className="text-xl">
            <TypeIt
              options={{
                strings: [
                  "I'm a Full stack web developer, and a software engineer.",
                ],
                speed: 100,
                waitUntilVisible: true,
              }}
            />
          </p>
          <div className="flex gap-5 my-2">
            <button className="bg-primary/60 hover:bg-transparent hover:shadow-none border-2  border-primary/60 font-bold py-4 px-10 rounded-full shadow-primary/40 shadow-sm">
              Download CV
            </button>
            <button className="border-primary/60 border-2 font-bold py-4 px-10 rounded-full bg-transparent shadow-sm hover:bg-primary/60 transition-all hover:border-transparent">
              See my work{" "}
              <FaArrowRightLong className="inline text-xl ml-1 mb-1" />
            </button>
          </div>
        </div>
        <div className="w-[25%] h-[70vh] overflow-hidden rounded-full border-primary/60 border-8">
          <img
            src={avatarImage}
            alt="avatar"
            className="object-cover h-full w-full"
          />
        </div>
      </section>
      <section
        id="about"
        className="w-full py-10 flex justify-center items-center flex-col"
      >
        <h1 className="text-5xl font-lemon text-primary">About Me</h1>
        <div className="flex py-20 justify-center items-center w-full gap-20">
          {/* Image Area */}
          <div className="relative">
            <div className="w-[30em] h-[30em] border-primary border-r-2 border-b-2 absolute -bottom-5 -right-5 z-[1]"></div>
            <div className="w-[30em] h-[30em] border-primary border-l-2 border-t-2 absolute -top-5 -left-5 z-[1]"></div>
            <img
              src={avatarImage}
              alt="avatar"
              className="object-cover w-[30em] h-[30em]"
            />
          </div>
          {/* Text Area */}
          <div className="w-[34%] flex flex-col items-start justify-start gap-2">
            <p className="text-xl mb-2">My name is <span className="text-primary/80 font-lemon">Kelly Daniel</span> </p>
            
            <p className="break-keep">A passionate and versatile web developer with a knack for turning ideas into digital reality. Based in Nigeria, I specialize in creating dynamic and user-friendly web applications. My skills span across various technologies, making me adept at crafting seamless and engaging online experiences.</p>
            
            <p className="break-keep">I specialize in crafting responsive and user-friendly web applications. My front-end skills allow me to create intuitive and visually appealing interfaces, while my back-end expertise with Django ensures robust and scalable server-side functionalities. Additionally, I am well-versed in mobile app development using Flutter, enabling me to extend the reach of my projects across multiple platforms.</p>

            <p className="break-keep">In the ever-evolving field of web development, I stay up-to-date with the latest trends and technologies. I believe in the power of continuous learning to deliver cutting-edge solutions.</p>

            <button className="border-primary/60 border-2 font-bold py-4 px-10 rounded-full bg-transparent shadow-sm hover:bg-primary/60 transition-all hover:border-transparent">
              Download CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
