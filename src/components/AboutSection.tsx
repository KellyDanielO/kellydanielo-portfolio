import avatarImage from "../images/avatar.jpeg";

import { motion } from "framer-motion";
import { saveAs } from 'file-saver';
import { ReavealAnimation } from "./Reveal";
const AboutSection = () => {
  const handleDownload = () => {
    // Replace 'path/to/your/pdf/document.pdf' with the path or URL of your PDF file
    const pdfUrl = '../kelly-daneil-cv.pdf';

    // Fetch the PDF file
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        // Save the PDF file using file-saver
        saveAs(blob, 'kelly-daniel-cv.pdf');
      })
      .catch(error => {
        console.error('Error fetching or saving the PDF file', error);
      });
  };
  return (
    <motion.section
      id="about"
      className="w-full py-10 px-5 flex justify-center items-center flex-col md:w-[60%] md:mx-auto"
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex py-20 justify-center items-center w-full lg:w-auto gap-20 flex-col lg:flex-row">
        {/* Image Area */}
        <div className="relative w-[90%] lg:w-auto">
          <div className="lg:w-[30em] lg:h-[30em] h-[10em] w-[10em] border-primary border-r-2 border-b-2 absolute -bottom-5 -right-5 z-[1]"></div>
          <div className="lg:w-[30em] lg:h-[30em] h-[10em] w-[10em] border-primary border-l-2 border-t-2 absolute -top-5 -left-5 z-[1]"></div>
          <motion.img
            src={avatarImage}
            alt="avatar"
            className="object-cover lg:w-[30em] lg:h-[30em] h-[40vh] w-[100%]"
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
        </div>
        {/* Text Area */}
        <motion.div
          className="lg:w-[34%] flex flex-col items-start justify-start gap-2"
          transition={{ delay: 0.6 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h1 className="text-3xl font-lemon text-primary">About Me</h1>

          <p className="text-xl mb-1">
            My name is{" "}
            <span className="text-primary/80 font-lemon">Kelly Daniel</span>{" "}
          </p>
          <ReavealAnimation>
            <p className="break-keep">
              I am a passionate and versatile web developer based in Nigeria, dedicated to transforming ideas into digital reality. Specializing in crafting dynamic and user-friendly web applications, my skills cover a range of technologies, allowing me to create seamless and engaging online experiences. I excel in building responsive and intuitive interfaces, leveraging my front-end expertise. Additionally, my back-end proficiency with Django ensures the development of robust and scalable server-side functionalities.
            </p>
          </ReavealAnimation>
          {/* Skills */}
          <ReavealAnimation>
            <div className="flex gap-2 flex-wrap">
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">HTML</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">CSS</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">JavaScript</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">PHP</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">React</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">Flutter</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">Python</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">Django</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">MySQL</div>
              <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/30">Postgress</div>
            </div>
          </ReavealAnimation>

          <button onClick={handleDownload} className="border-primary/60 border-2 font-bold py-3 px-10 rounded-full bg-transparent shadow-sm hover:bg-primary/60 transition-all hover:border-transparent">
            Download CV
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
