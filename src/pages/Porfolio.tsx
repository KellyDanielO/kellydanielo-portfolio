import WebImage1 from "../images/1-web -app.png";
import WebImage2 from "../images/2-web -app.png";
import WebImage3 from "../images/4-web -app.png";
import Desktop from "../images/3-web .jpg";

import FlutterApp1 from "../images/1-flutter -app.jpg";
import FlutterApp2 from "../images/2-flutter -app.jpg";
import FlutterApp3 from "../images/3-flutter -app.jpg";
import FlutterApp4 from "../images/4-flutter -app.jpg";
import FlutterApp5 from "../images/5-flutter -app.jpg";
import FlutterApp6 from "../images/6-flutter -app.jpg";
import FlutterApp7 from "../images/7-flutter -app.jpg";
import FlutterApp8 from "../images/8-flutter -app.jpg";

import { motion } from "framer-motion";

import { FaGithub, FaShareFromSquare, FaYoutube } from "react-icons/fa6";
import TabtracVideoComponent from "../components/TabtracVideo";

const PortfolioPage = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <motion.section
      className="h-full w-full flex flex-col items-center py-5 pt-24"
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <motion.h1
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl lg:text-5xl font-lemon text-primary mb-5 lg:mb-10"
      >
        My Portfolio
      </motion.h1>
      <TabtracVideoComponent />
      {/* Mobile Projects */}
      <div className="flex flex-col justify-around items-center w-full py-5 px-5">
        <h1 className="text-xl font-lemon text-primary mb-5 lg:mb-10">
          Mobile Projects
        </h1>
        {/* Projects  box container*/}
        <div className="w-[80%] flex justify-around items-center flex-col lg:flex-row flex-wrap gap-10">
          {/* box 1 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between  flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <img
              src={FlutterApp1}
              alt="Onboarding screens Application"
              className="cursor-default w-full md:h-[70vh] h-[50vh] lg:h-[50vh] object-cover rounded-xl"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Onboarding Screens
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink(
                        "https://github.com/KellyDanielO/onboarding_screen"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 1 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between  flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <img
              src={FlutterApp6}
              alt="Onboarding screens Application"
              className="cursor-default w-full md:h-[70vh] h-[50vh] lg:h-[50vh] object-contain"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Sign up Screen
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink(
                        "https://github.com/KellyDanielO/darkthemed_auth_screen"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 2 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <img
              src={FlutterApp2}
              alt="Fashion App Application"
              className="cursor-default md:h-[70vh] w-full h-[50vh] lg:h-[50vh] object-cover rounded-xl"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Fashion App
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 3 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <img
              src={FlutterApp3}
              alt="Auth Screens Application"
              className="cursor-default  md:h-[70vh]w-full h-[50vh] lg:h-[50vh] object-cover rounded-xl"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Auth Screens
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/auth_screens")
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 4 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <img
              src={FlutterApp4}
              alt="Travel Application"
              className="cursor-de md:h-[70vh]fault w-full h-[50vh] lg:h-[50vh] object-cover rounded-xl"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Travel App
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/travel_app")
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 4 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <img
              src={FlutterApp5}
              alt="Heart Beat Tracker Application"
              className="cursor-default w-full md:h-[70vh] h-[50vh] lg:h-[50vh] object-cover rounded-xl"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Heart Beat Tracker
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/heart-beat-app")
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 5 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <img
              src={FlutterApp7}
              alt="Dating App Design"
              className="cursor-default w-full md:h-[70vh] h-[50vh] lg:h-[50vh] object-cover rounded-xl"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Dating App Design
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/dating_app_flutter")
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 5 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <img
              src={FlutterApp8}
              alt="News App"
              className="cursor-default w-full md:h-[70vh] h-[50vh] lg:h-[50vh] object-cover rounded-xl"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                News App
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaYoutube
                    className="text-xl cursor-pointer hover:text-primary"
                    title="video preview"
                    onClick={() =>
                      openLink("https://youtu.be/0pUsZFktu_Y")
                    }
                  />
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/clean_architecture_news_app")
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Web Projects */}
      <div className="flex flex-col justify-around items-center w-full px-5">
        <motion.h1
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-lemon text-primary mb-5 lg:mb-10"
        >
          Web Projects
        </motion.h1>
        {/* Projects  box container*/}
        <div className="w-full flex justify-around items-center flex-col lg:flex-row flex-wrap">
          {/* box 1 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full lg:w-[35%] flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl"
          >
            <img
              src={WebImage1}
              alt="Fudo"
              className="cursor-default w-full h-[20vh] lg:h-[40vh] object-cover"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Fudo
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    HTML
                  </p>
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    TailwindCSS
                  </p>
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    JavaScript
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-sm lg:text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/fudo")
                    }
                  />
                  <FaShareFromSquare
                    className="text-sm lg:text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://fudo-tailwindcss.vercel.app/")
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 2 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full lg:w-[35%] flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl"
          >
            <img
              src={WebImage2}
              alt="Holt"
              className="cursor-default w-full h-[20vh] lg:h-[40vh] object-cover"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Holt
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    HTML
                  </p>
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    TailwindCSS
                  </p>
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    JavaScript
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-sm lg:text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/holt")
                    }
                  />
                  <FaShareFromSquare
                    className="text-sm lg:text-xl cursor-pointer hover:text-primary"
                    onClick={() => openLink("https://holt-gray.vercel.app/")}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* box 3 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full lg:w-[35%] flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl"
          >
            <img
              src={WebImage3}
              alt="Holt"
              className="cursor-default w-full h-[20vh] lg:h-[40vh] object-cover"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                My Porfolio
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    React
                  </p>
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    TailwindCSS
                  </p>
                  <p className="hover:text-primary text-sm lg:text-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    TypeScript
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-sm lg:text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/kellydanielo-portfolio")
                    }
                  />
                  <FaShareFromSquare
                    className="text-sm lg:text-xl cursor-pointer hover:text-primary"
                    onClick={() => openLink("https://kellydanielo.vercel.app/")}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Desktop Projects */}
      <div className="flex flex-col justify-around items-center w-full py-5 px-5">
        <motion.h1
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-lemon text-primary mb-5 lg:mb-10"
        >
          Desktop Project
        </motion.h1>
        {/* Projects  box container*/}
        <div className="w-full flex justify-around items-center">
          {/* box 1 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[40%] w-full flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl"
          >
            <img
              src={Desktop}
              alt="Desktop Application"
              className="cursor-default w-full h-[20vh] lg:h-[40vh] object-cover"
            />
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Visa Desktop Application
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Flutter
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/desktop_app/")
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Backend Projects */}
      <div className="flex flex-col justify-around items-center w-full py-5 px-5">
        <motion.h1
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-lemon text-primary mb-5 lg:mb-10"
        >
          Backend Project
        </motion.h1>
        {/* Projects  box container*/}
        <div className="w-full flex justify-around items-center">
          {/* box 1 */}
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-[40%] w-full flex justify-between flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl"
          >
            <div className="w-full flex flex-col py-2  px-2 justify-center items-start">
              <h3 className="text-xl lg:text-2xl font-lemon text-primary">
                Mulitventor Backend Rest API
              </h3>
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 py-2">
                  <p className="hover:text-primary hover:-translate-y-2 transition-transform cursor-pointer">
                    Django
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() =>
                      openLink("https://github.com/KellyDanielO/multivendor_api_django")
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioPage;
