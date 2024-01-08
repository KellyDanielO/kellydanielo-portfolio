import avatarImage from "../images/avatar.jpeg";
import TypeIt from "typeit-react";
import { FaArrowRightLong } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section
      className="w-full h-screen flex justify-center lg:justify-around items-center flex-col-reverse lg:flex-row"
      id="home"
    >
      <div className="flex flex-col ">
        <strong className="text-pretty text-primary/60 mb-3">
          Welcome to my portfolio
        </strong>
        <h1 className="text-4xl lg:text-7xl font-bold mb-3">
          Hello,
          <br />
          I'm <span className="text-primary/80 font-lemon">Kelly Daniel</span>
        </h1>
        <p className="text-sm lg:text-xl">
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
        <div className="flex gap-5 my-2 flex-col lg:flex-row">
          <button className="bg-primary/60 hover:bg-transparent hover:shadow-none border-2  border-primary/60 text-sm font-bold py-4 px-10 rounded-full shadow-primary/40 shadow-sm">
            Download CV
          </button>
          <button className="border-primary/60 border-2 font-bold py-4 px-10 rounded-full bg-transparent shadow-sm hover:bg-primary/60 transition-all hover:border-transparent">
            See my work{" "}
            <FaArrowRightLong className="inline text-xl ml-1 mb-1" />
          </button>
        </div>
      </div>
      <div className="lg:w-[25%] lg:h-[70vh] w-[80%] h-[45vh] mb-10 lg:mb-0 overflow-hidden rounded-full border-primary/60 border-8">
        <img
          src={avatarImage}
          alt="avatar"
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
