import { motion } from "framer-motion";
import { FaLaptop, FaDesktop, FaLink } from "react-icons/fa6";
import { ReavealAnimation } from "./Reveal";

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      className="w-full flex justify-center items-center flex-col h-full px-5 lg:px-0 lg:py-20"
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h1 className="text-5xl font-lemon text-primary mb-5 lg:mb-10">
        My Services
      </h1>
      <div className="flex justify-around items-center lg:py-20 flex-col lg:flex-row w-full md:w-[60%] lg:w-[90%]">
        {/* Each Service */}
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ x: -10 }}
          whileInView={{ x: 0 }}
          className="p-10 shadow-lg flex justify-center items-center gap-5 flex-col mb-10 lg:mb-0 w-[100%] lg:w-[25%]"
        >
          <div className="p-5 rounded-full bg-shade flex justify-center items-center">
            <FaLaptop className="w-10 h-10 text-black" />
          </div>
          <strong className="text-xl">Web Development</strong>
          <ReavealAnimation> <p className="text-center">
            Passionate web architect and coding maestro, I craft captivating and
            fully responsive websites that breathe life into pixels. Armed with
            the dynamic trio of HTML, CSS, and JavaScript, I sculpt seamless
            user experiences that dazzle. For the backend dance, I wield the
            powerful PHP wand, or embrace the elegance of frameworks like React
            and Django to build robust, scalable systems. Bringing visions to
            life, one line of code at a time – your digital dreams are my
            playground.
          </p>
          </ReavealAnimation>
        </motion.div>
        {/* Each Service */}
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ y: -10 }}
          whileInView={{ y: 0 }}
          className="p-10 shadow-lg flex justify-center items-center gap-5 flex-col mb-10 lg:mb-0 w-[100%] lg:w-[25%]"
        >
          <div className="p-5 rounded-full bg-shade flex justify-center items-center">
            <FaDesktop className="w-10 h-10 text-black" />
          </div>
          <strong className="text-xl">Software Development</strong>
          <ReavealAnimation>
            <p className="text-center">
              Crossing boundaries and blurring the lines between platforms, I am a
              skilled architect of digital universes. Armed with the versatile
              Flutter framework, I weave enchanting cross-platform applications
              that dance effortlessly on iOS and Android alike. From pixel-perfect
              designs to seamless functionality, my creations embody the harmony
              of form and function. With Flutter as my trusted brush, I paint the
              canvas of your vision with vibrant, interactive, and responsive
              mobile experiences that captivate users across every device they
              touch.
            </p>
          </ReavealAnimation>
        </motion.div>
        {/* Each Service */}
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ x: 10 }}
          whileInView={{ x: 0 }} className="p-10 shadow-lg flex justify-center items-center gap-5 flex-col mb-10 lg:mb-0 w-[100%] lg:w-[25%]">
          <div className="p-5 rounded-full bg-shade flex justify-center items-center">
            <FaLink className="w-10 h-10 text-black" />
          </div>
          <strong className="text-xl">Rest API Development</strong>
          <ReavealAnimation>
            <p className="text-center">
              As a master craftsman of the digital realm, I specialize in building
              robust RESTful APIs using the Django framework. With each line of
              code, I sculpt a seamless bridge between front-end and back-end,
              ensuring smooth communication and data flow. Leveraging the power
              and elegance of Django, I design APIs that not only meet your
              specifications but exceed expectations. From authentication to
              resourceful endpoints, I bring your data to life, transforming ideas
              into efficient and scalable web solutions. Your digital foundation,
              solidly built with Django expertise.
            </p>
          </ReavealAnimation>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
