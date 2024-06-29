"use client"
import FooterComponent from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar"
import useIntersectionObserver from "@/app/components/SectionObserver";
import SocialsSection from "@/app/sections/SocialsSection"
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Project, getProjectById } from "@/app/functions/firebase_functions";
import { FaGithub, FaShare } from "react-icons/fa";

function SingleProject({ params }: { params: { id: string } }) {

    const [projectData, setSpecificProject] = useState<Project | null>(null);

    useEffect(() => {

        const fetchSpecificProject = async (projectId: string) => {
            const projectData = await getProjectById(projectId) as Project;
            if (projectData) {

                setSpecificProject(projectData);
            }
        };
        fetchSpecificProject(params.id);
    }, []);
    const [activeSection, setActiveSection] = useState<string>('home-section');
    const openLink = (link: string) => {
        window.open(link, "_blank");
    };
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
                        <Link href={`/portfolio/project/${params.id}`} className="bg-shade text-foreground rounded-full py-1 px-3 cursor-pointer">{projectData != null ? projectData.title : 'Loading...'}</Link>
                        /
                    </div>
                </div>
                {projectData?.youtubeUrl && (<div className="w-full flex lg:h-[60vh] gap-3 lg:gap-0 pt-10 flex-col justify-between lg:flex-row">
                    <div className="w-full lg:w-[60%] h-[60%] lg:h-auto ">

                        <iframe className="w-full h-[30vh] lg:h-full" src={projectData.youtubeUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>)}

                <div className="flex flex-col my-2 gap-5 lg:max-w-[80%]">
                    <h1 className="text-3xl lg:text-5xl font-medium font-freeman">{projectData?.title}</h1>
                    <h3 className="text-3xl lg:text-2xl font-medium">Overview</h3>
                    <p className="text-sm lg:text-xl" dangerouslySetInnerHTML={{ __html: projectData?.description || '' }} />
                    <div className="flex gap-4">
                    {projectData?.githubUrl && (
                        <FaGithub
                            className="text-xl cursor-pointer hover:text-primary"
                            onClick={() =>
                                openLink(
                                    projectData?.githubUrl || ''
                                )
                            }
                        />
                    )}
                    {projectData?.liveUrl && (
                        <FaShare
                            className="text-xl cursor-pointer hover:text-primary"
                            onClick={() =>
                                openLink(
                                    projectData?.liveUrl || ''
                                )
                            }
                        />
                    )}

                </div>
                </div>
                <div className="flex flex-col my-2 gap-5 lg:max-w-[80%]">
                    <h1 className="text-3xl lg:text-5xl font-medium font-freeman">Featured Image(s)</h1>
                    <div className="w-full flex flex-wrap gap-5">
                       
                        {projectData?.images && (projectData?.images.map((image, index) => (
                            // <div key={index} className="bg-shade py-1 px-3 rounded-full cursor-pointer hover:bg-primary/70 text-sm">{tech}</div>
                            <Image
                                key={index}
                                src={image}
                                width={500}
                                height={500}
                                alt={projectData.title}
                                className="cursor-default lg:max-w-[46%] w-full max-h-[70vh] object-contain"
                            />
                        )))}
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