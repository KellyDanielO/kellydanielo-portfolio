import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MeImage from "../../assets/images/me.png";
import Image from "next/image";
import { useEffect, LegacyRef, useRef, RefObject, useState } from "react";
import emailjs from "@emailjs/browser";


const ContactSection = () => {
    useEffect(() => emailjs.init(`${publicKey}`), []);
    const emailRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const nameRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const subjectRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const messageRef: RefObject<HTMLTextAreaElement> =
        useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState(false);
    const publicKey = "user_j9YNgCviV2OlwriYmRWPk";
    const templateId = "template_jcxprnp";
    const serviceId = "service_ek5fby6";
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
    return <section id="contact-section" className="container-wrapper flex justify-between items-center py-20 flex-col gap-3 ">
        <h1 className="font-freeman text-6xl">Contact Me</h1>
        <p className="text-greyColor text-lg text-center lg:text-justify">Let's connect and explore how we can create impactful digital experiences together.</p>
        <div className="flex items-center justify-center gap-x-16 py-5 flex-col lg:flex-row gap-y-5">
            {/* Email */}
            <div className="flex justify-center items-center gap-3 flex-col">
                <div className="text-3xl p-7 bg-shade text-primary/70 rounded-full">
                    <MdEmail />
                </div>
                <p className="text-lg font-semibold">E-mail</p>
                <a href="mailto:itzkellydaniel@gmail.com" className="text-xl hover:text-primary transition-all ease-in">itzkellydaniel@gmail.com</a>
            </div>
            {/* Email */}
            <div className="flex justify-center items-center gap-3 flex-col">
                <div className="text-3xl p-7 bg-shade text-primary/70 rounded-full">
                    <FaPhone />
                </div>
                <p className="text-lg font-semibold">Phone Number</p>
                <a href="tel:+2348067081323" className="text-xl hover:text-primary transition-all ease-in">+234 806 708 1323</a>
            </div>
            {/* Location */}
            <div className="flex justify-center items-center gap-3 flex-col">
                <div className="text-3xl p-7 bg-shade text-primary/70 rounded-full">
                    <FaLocationArrow />
                </div>
                <p className="text-lg font-semibold">Location</p>
                <p>Nigeria, Rivers State, Port Harcourt</p>
            </div>
        </div>
        <div className="w-full  flex justify-center items-center flex-col lg:flex-row ">
            <div className="w-full md:w-full lg:w-[30%] flex justify-center items-center lg:items-start h-[60vh] bg-shade p-5">
                <Image
                    src={MeImage}
                    alt="Kelly Daniel"
                    // layout="responsive"
                    className="w-full h-full object-contain"
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full lg:w-[40%] justify-around items-center pt-10 md:w-[60%] h-[60vh] bg-white/65 gap-3"
            >
                {/* Full name */}
                <div className=" px-5 w-full  ">
                    <input
                        type="text"
                        placeholder="Full Name"
                        id="full_name"
                        ref={nameRef}
                        required
                        className=" outline-none bg-transparent focus:border-black border-greyColor rounded-lg text-black placeholder:text-black border-2 p-3 transition-all w-full text-sm lg:text-xl"
                    />
                </div>
                {/* Email*/}
                <div className=" px-5 w-full  ">
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                        ref={subjectRef}
                        id="subject"
                        className=" outline-none bg-transparent focus:border-black border-greyColor rounded-lg text-black placeholder:text-black border-2 p-3 transition-all w-full text-sm lg:text-xl"
                    />
                </div>
                {/* Email*/}
                <div className=" px-5 w-full  ">
                    <input
                        type="email"
                        placeholder="E-mail"
                        required
                        ref={emailRef}
                        id="email"
                        className=" outline-none bg-transparent focus:border-black border-greyColor rounded-lg text-black placeholder:text-black border-2 p-3 transition-all w-full text-sm lg:text-xl"
                    />
                </div>
                {/* Message*/}
                <div className=" px-5 w-full  ">
                    <textarea
                        placeholder="Message"
                        required
                        id="message"
                        ref={messageRef}
                        className=" outline-none bg-transparent focus:border-black border-greyColor rounded-lg text-black placeholder:text-black border-2 p-3 transition-all w-full text-sm lg:text-xl resize-y"
                    ></textarea>
                </div>
                <button
                    className="bg-shade w-[80%] hover:bg-primary/60 border-none font-bold py-3 px-10 rounded-xl  shadow-sm text-white text-sm lg:text-xl transition-all hover:border-transparent"
                    type="submit"
                    disabled={loading}
                >
                    Submit
                </button>
            </form>
        </div>
    </section>
}

export default ContactSection