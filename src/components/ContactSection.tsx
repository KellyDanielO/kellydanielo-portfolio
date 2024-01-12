import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="w-full py-20 flex justify-center items-center flex-col"
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h1 className="text-5xl font-lemon text-primary mb-5 lg:mb-10">
        Contact me
      </h1>
      <div className="flex gap-20 justify-around w-full">
        <div className="gap-4 flex items-center justify-center">
          <FaPhone />
          <div>
            <p>Call</p>
            <Link to='tel:+2348067081323' >+2348067081323</Link>
          </div>
        </div>
        <div className="gap-4 flex items-center justify-center">
          <FaEnvelope />
          <div>
            <p>Email At</p>
            <Link to='mailto:itzkellydaniel@gmail.com' >itzkellydaniel@gmail.com</Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
