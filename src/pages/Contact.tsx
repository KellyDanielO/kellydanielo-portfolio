import { useRef, LegacyRef, RefObject, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
      className="w-full py-20 flex justify-center items-center flex-col lg:py-32"
    >
      <h1 className="text-3xl lg:text-5xl font-lemon text-primary">
        Contact me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full justify-center items-center pt-10"
      >
        {/* Full name */}
        <div className=" py-2 px-5 w-full lg:w-[40%] ">
          <input
            type="text"
            placeholder="Full Name"
            id="full_name"
            ref={nameRef}
            required
            className=" outline-none bg-[#0f030326] focus:border-b-primary border-transparent border-b-2 p-5 transition-all w-full text-sm lg:text-xl"
          />
        </div>
        {/* Email*/}
        <div className=" py-2 px-5 w-full lg:w-[40%] ">
          <input
            type="email"
            placeholder="E-mail"
            required
            ref={emailRef}
            id="email"
            className=" outline-none bg-[#0f030326] focus:border-b-primary border-transparent border-b-2 p-5 transition-all w-full text-sm lg:text-xl"
          />
        </div>
        {/* Message*/}
        <div className=" py-2 px-5 w-full lg:w-[40%] ">
          <textarea
            placeholder="Message"
            required
            id="message"
            ref={messageRef}
            className=" outline-none bg-[#0f030326] focus:border-b-primary border-transparent border-b-2 p-5 transition-all w-full text-sm lg:text-xl resize-y"
          ></textarea>
        </div>
        <button
          className="border-primary/60 border-2 font-bold py-3 px-10 rounded-xl bg-transparent shadow-sm hover:bg-primary/60 text-sm lg:text-xl transition-all hover:border-transparent"
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
