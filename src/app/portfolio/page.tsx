"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import ApiProjectSection from "../components/project/ApiProjectSection";
import AppProjectSection from "../components/project/AppProjectSection";
import DesktopProjectSection from "../components/project/DesktopProjectSection";
import WebProjectSection from "../components/project/WebProjectSection";
import SocialsSection from "../sections/SocialsSection";
import NavBar from "../components/NavBar";
import useIntersectionObserver from "../components/SectionObserver";
import FooterComponent from "../components/Footer";


const PortfolioPage = () => {
    const appRef = useRef<HTMLDivElement>(null);
    const websiteRef = useRef<HTMLDivElement>(null);
    const apiRef = useRef<HTMLDivElement>(null);
    const desktopRef = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState<string>('home-section');

    useIntersectionObserver(setActiveSection);
    const renderActiveTab = () => {
        switch (activeTab) {
            case 'app':
                return <AppProjectSection />;
            case 'website':
                return <WebProjectSection />;
            case 'desktop':
                return <DesktopProjectSection />;
            case 'api':
                return <ApiProjectSection />;
            default:
                return <AppProjectSection />;
        }
    };
    const [activeTab, setActiveTab] = useState<string>('app');

    switch (activeTab) {
        case 'app':
            appRef.current?.classList.add('open')
            websiteRef.current?.classList.remove('open')
            apiRef.current?.classList.remove('open')
            break;
        case 'website':
            appRef.current?.classList.remove('open')
            websiteRef.current?.classList.add('open')
            apiRef.current?.classList.remove('open')
            desktopRef.current?.classList.remove('open')
            break;
        case 'api':
            appRef.current?.classList.remove('open')
            websiteRef.current?.classList.remove('open')
            apiRef.current?.classList.add('open')
            desktopRef.current?.classList.remove('open')
            break;
        case 'desktop':
            appRef.current?.classList.remove('open')
            websiteRef.current?.classList.remove('open')
            apiRef.current?.classList.remove('open')
            desktopRef.current?.classList.add('open')
            break;
        default:
            appRef.current?.classList.add('open')
            websiteRef.current?.classList.remove('open')
            apiRef.current?.classList.remove('open')
            desktopRef.current?.classList.remove('open')
            break;

    }

    return <>
        <SocialsSection />
        <main className="min-h-screen bg-main w-full overflow-auto font-roboto">
            {/* Navigation Bar */}
            <NavBar oberver={activeSection} />

            <section id="project-section" className="container-wrapper flex justify-center items-center flex-col py-20 lg:py-40 gap-2">
                <h1 className="font-freeman text-6xl">My Projects</h1>
                <p className="text-greyColor text-lg text-center lg:text-justify">Embrace every challenge, celebrate each achievement, and pursue your goals with unwavering dedication and strength.</p>
                <div className="flex gap-4  flex-wrap">
                    <div onClick={() => setActiveTab('app')} ref={appRef} className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70 open">App</div>
                    <div onClick={() => setActiveTab('website')} ref={websiteRef} className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Website </div>
                    <div onClick={() => setActiveTab('desktop')} ref={desktopRef} className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Desktop</div>
                    <div onClick={() => setActiveTab('api')} ref={apiRef} className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Rest API</div>
                </div>
                {/* display section */}
                {renderActiveTab()}
            </section>
        </main>
        {/* Footer Section Begin */}
        <FooterComponent />
        {/* Footer Section End */}
    </>
}

export default PortfolioPage