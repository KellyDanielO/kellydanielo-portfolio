"use client"
import FooterComponent from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar"
import useIntersectionObserver from "@/app/components/SectionObserver";
import SocialsSection from "@/app/sections/SocialsSection"
import Link from "next/link";
import { useState } from "react";
import Image1 from '@/assets/images/1-web -app.png'
import Image, { StaticImageData } from "next/image";

const SingleProject = () => {

    const [activeSection, setActiveSection] = useState<string>('home-section');

    useIntersectionObserver(setActiveSection);
    return <>
        <SocialsSection />
        <main className="min-h-screen bg-main w-full overflow-auto font-roboto">
            {/* Navigation Bar */}
            <NavBar oberver={activeSection} />

            <section id="project-section" className="container-wrapper flex justify-center items-start flex-col py-20 lg:py-40 gap-2">
                <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-4 md:flex-row md:flex-wrap">
                    <div className="flex items-center justify-center gap-2 text-sm lg:text-xl flex-wrap">
                        <Link href={"/portfolio"} className="bg-shade text-foreground rounded-full py-1 px-3 cursor-pointer">Portfolio</Link>
                        /
                        <Link href={"/portfolio/project/cnsscn"} className="bg-shade text-foreground rounded-full py-1 px-3 cursor-pointer">Welcome to the personalization economy</Link>
                        /
                    </div>
                </div>
                <div className="w-full flex lg:h-[60vh] gap-3 lg:gap-0 pt-10 flex-col justify-between lg:flex-row">
                    <div className="w-full lg:w-[60%] h-[60%] lg:h-auto ">
                        <iframe className="w-full h-[30vh] lg:h-full" src="https://www.youtube.com/embed/UNtNzdfwfJw?si=-C2ixUM6BEE7AkMS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="flex flex-col my-2 gap-5 lg:max-w-[80%]">
                    <h1 className="text-3xl lg:text-5xl font-medium font-freeman">Welcome to the personalization economy</h1>
                    <h3 className="text-3xl lg:text-2xl font-medium">Overview</h3>
                    <p className="text-sm lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deserunt, dolore optio nostrum ullam. Autem, ab vitae iure perspiciatis officia eius ipsa praesentium mollitia nihil alias? Recusandae totam ullam atque, facilis, rem doloremque quasi ducimus quibusdam mollitia enim itaque odit vero placeat fuga consequuntur esse culpa reiciendis saepe ratione quia sit iste eos non delectus! Veniam eos reprehenderit perspiciatis praesentium officiis quisquam aut tempora explicabo culpa ipsam voluptas molestias nisi molestiae libero placeat qui, neque unde! Quos magnam facilis sapiente aperiam commodi eius facere, voluptas itaque doloribus autem amet ullam expedita tenetur est tempora. Distinctio harum excepturi voluptatum cum.</p>
                </div>
                <div className="flex flex-col my-2 gap-5 lg:max-w-[80%]">
                    <h1 className="text-3xl lg:text-5xl font-medium font-freeman">Featured Image(s)</h1>
                    <div className="w-full flex flex-wrap gap-5">
                        <Image
                            src={Image1}
                            alt="Onboarding screens Application"
                            className="cursor-default lg:max-w-[46%] w-full max-h-[70vh] object-contain"
                        />
                        <Image
                            src={Image1}
                            alt="Onboarding screens Application"
                            className="cursor-default lg:max-w-[46%] w-full max-h-[70vh] object-contain"
                        />
                        <Image
                            src={Image1}
                            alt="Onboarding screens Application"
                            className="cursor-default lg:max-w-[46%] w-full max-h-[70vh] object-contain"
                        />
                    </div>

                </div>
            </section>
        </main>
        {/* Footer Section Begin */}
        <FooterComponent />
        {/* Footer Section End */}
    </>
}

export default SingleProject