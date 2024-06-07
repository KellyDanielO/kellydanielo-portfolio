import { FaGithub } from "react-icons/fa";
import HeartBeat from "../../../assets/images/5-flutter -app.jpg";
import Image from "next/image";
const AppProjectSection = () => {
    const openLink = (link: string) => {
        window.open(link, "_blank");
    };``
    return <div className="w-full flex gap-5 flex-wrap justify-between items-center">
                  <div
            className="lg:w-[15%] mb-4 lg:mb-0 w-full flex justify-between  flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl md:w-[80%]"
          >
            <Image
              src={HeartBeat}
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
          </div>
    </div>
}

export default AppProjectSection