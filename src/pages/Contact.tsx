import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.section
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="w-full py-20 flex justify-center items-center flex-col lg:py-32"
    >
      <h1 className="text-5xl font-lemon text-primary">Contact me</h1>
      <div className="flex flex-col w-full justify-center items-center pt-10">
        {/* Full name */}
        <div className=" py-2 px-5 w-[40%] ">
          <input
            type="text"
            placeholder="Full Name"
            id="full_name"
            className=" outline-none bg-[#0f030326] focus:border-b-primary border-transparent border-b-2 p-5 transition-all w-full text-xl"
          />
        </div>
        {/* Email*/}
        <div className=" py-2 px-5 w-[40%] ">
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            className=" outline-none bg-[#0f030326] focus:border-b-primary border-transparent border-b-2 p-5 transition-all w-full text-xl"
          />
        </div>
        {/* Message*/}
        <div className=" py-2 px-5 w-[40%] ">
          <textarea
            placeholder="Message"
            id="message"
            className=" outline-none bg-[#0f030326] focus:border-b-primary border-transparent border-b-2 p-5 transition-all w-full text-xl resize-y"
          ></textarea>
        </div>
        <button className="border-primary/60 border-2 font-bold py-3 px-10 rounded-xl bg-transparent shadow-sm hover:bg-primary/60 transition-all hover:border-transparent">
          Submit
        </button>
      </div>
    </motion.section>
  );
};

export default ContactMe;
