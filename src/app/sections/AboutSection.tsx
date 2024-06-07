import Link from "next/link"
import MeImage from "../../assets/images/me.png";
import Image from "next/image";

const AboutSection = () => {
    return <section id="about-section" className="container-wrapper flex justify-between items-center py-20 flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] flex justify-center items-center lg:items-start h-[70vh]">
            <Image
                src={MeImage}
                alt="Kelly Daniel"
                // layout="responsive"
                className="w-full h-full object-contain"
            />
        </div>
        <div className='w-full lg:w-[45%] transition-all ease-in flex flex-col items-center lg:items-start gap-5 text-center lg:text-justify'>
            <h1 className="font-freeman text-6xl">About Me</h1>
            <p className="text-greyColor font-roboto font-medium text-lg">
                I am a versatile web and software developer from Nigeria, focused on turning ideas into digital realities. With expertise in front-end technologies and back-end proficiency with Django, I create dynamic and user-friendly web applications. My experience spans various programming languages and frameworks, enabling me to deliver effective digital solutions.</p>
            <p className="text-greyColor font-roboto font-medium text-lg">I have hands-on experience with a wide range of technologies, including HTML, CSS, JavaScript, and modern web frameworks like React and Next.js. This diverse skill set allows me to build intuitive and responsive user interfaces.</p>
            <p className="text-greyColor font-roboto font-medium text-lg">In addition to my front-end skills, I am proficient in server-side languages like PHP and database management systems such as MySQL and PostgreSQL. My integrated approach ensures seamless functionality for web applications, and I am committed to delivering robust and scalable solutions that drive success for my clients.</p>
            <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">HTML</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">CSS</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">JavaScript</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">PHP</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">React</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">NextJS</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Flutter</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Python</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Django</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">MySQL</div>
                <div className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Postgress</div>
            </div>
            <Link href={""} className="uppercase py-3 px-5 bg-shade hover:bg-primary/70 transition-all ease-in font-freeman rounded-full" >Download CV</Link>
        </div>
    </section>
}

export default AboutSection