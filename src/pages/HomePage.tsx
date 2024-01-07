import avatarImage from "../images/avatar.jpeg";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <section className="w-full h-screen flex justify-around items-center">
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
              strings: ["I'm a Full stack web developer, and a software engineer."],
              speed: 100,
              waitUntilVisible: true,
            }}
          />
        </p>
      </div>
      {/* <div className="w-[50%]"> */}
      <div className="w-[25%] h-[70vh] overflow-hidden rounded-full border-primary/60 border-8">
        <img
          src={avatarImage}
          alt="avatar"
          className="object-cover h-full w-full"
        />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Home;
