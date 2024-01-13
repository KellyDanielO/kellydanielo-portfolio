import { useRef, LegacyRef, RefObject, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactMe = () => {
  const publicKey = "user_j9YNgCviV2OlwriYmRWPk";
  const templateId = "template_jcxprnp";
  const serviceId = "service_ek5fby6";
  //   const publicKey = process.env.EMAIL_JS_PUBLIC_KEY;
  //   const templateId = process.env.EMAIL_JS_TEMPLATE_ID;
  //   const serviceId = process.env.EMAIL_JS_SERVICE_ID;

  useEffect(() => emailjs.init(`${publicKey}`), []);
  const emailRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const nameRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const messageRef: RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

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
    <motion.section
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="contact"
      className="w-full py-20 flex justify-center items-center flex-col lg:flex-row lg:py-32"
    >
      <div className="w-full lg:w-[20%] flex justify-center flex-col mt-10 items-center lg:items-start">
        <h1 className="text-3xl mb-2 lg:text-5xl font-lemon text-primary">
          Contact me
        </h1>
        <h3 className="text-xl">Reach out to me, 24/7</h3>
        <div className="flex flex-col gap-1 py-4">
          <small className="text-sm lg:text-xl">Email</small>
          <a href="mailto:itzkellydaniel@gmail.com" className="text-xl lg:text-2xl font-bold cursor-pointer hover:text-primary/80" target="__blank">itzkellydaniel@gmail.com</a>
        </div>
        <div className="flex flex-col gap-1 py-4">
          <small className="text-sm lg:text-xl">Call</small>
          <a href="tel:+2348067081323" className="text-xl lg:text-2xl font-bold cursor-pointer hover:text-primary/80" target="__blank">(+234)-806-708-1323</a>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full lg:w-[30%] justify-center items-center pt-10 md:w-[60%]"
      >
        {/* Full name */}
        <div className=" py-2 px-5 w-full  ">
          <input
            type="text"
            placeholder="Full Name"
            id="full_name"
            ref={nameRef}
            required
            className=" outline-none bg-shade focus:border-b-primary border-transparent border-b-4 p-5 transition-all w-full text-sm lg:text-xl"
          />
        </div>
        {/* Email*/}
        <div className=" py-2 px-5 w-full  ">
          <input
            type="email"
            placeholder="E-mail"
            required
            ref={emailRef}
            id="email"
            className=" outline-none bg-shade focus:border-b-primary border-transparent border-b-4 p-5 transition-all w-full text-sm lg:text-xl"
          />
        </div>
        {/* Message*/}
        <div className=" py-2 px-5 w-full  ">
          <textarea
            placeholder="Message"
            required
            id="message"
            ref={messageRef}
            className=" outline-none bg-shade focus:border-b-primary border-transparent border-b-4 p-5 transition-all w-full text-sm lg:text-xl resize-y"
          ></textarea>
        </div>
        <button
          className="bg-primary/60 border-2 font-bold py-3 px-10 rounded-xl  shadow-sm text-white text-sm lg:text-xl transition-all hover:border-transparent"
          type="submit"
          disabled={loading}
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
};

export default ContactMe;
