import { useEffect, useRef, useState } from "react";

const ProjectSection = () => {
    const appRef = useRef<HTMLDivElement>(null);
    const websiteRef = useRef<HTMLDivElement>(null);
    const apiRef = useRef<HTMLDivElement>(null);


    const [activeTab, setActiveTab] = useState<string>('app');
    useEffect(() => {
        console.log(activeTab);
        
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
            break;
        case 'api':
            appRef.current?.classList.remove('open')
            websiteRef.current?.classList.remove('open')
            apiRef.current?.classList.add('open')         
            break;
        default:
            appRef.current?.classList.add('open')
            websiteRef.current?.classList.remove('open')
            apiRef.current?.classList.remove('open')
            break;
            
      }
    }, [activeTab])
    
    return <section id="project-section" className="container-wrapper flex justify-center items-center flex-col py-20 lg:py-40 gap-2 lg:gap-5">
        <h1 className="font-freeman text-6xl">My Projects</h1>
        <p className="text-greyColor text-lg text-center lg:text-justify">Embrace every challenge, celebrate each achievement, and pursue your goals with unwavering dedication and strength.</p>
        <div className="flex gap-x-4">
            <div onClick={() => setActiveTab('app')} ref={appRef} className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70 open">App</div>
            <div onClick={() => setActiveTab('website')} ref={websiteRef} className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Website </div>
            <div onClick={() => setActiveTab('api')} ref={apiRef}  className="bg-shade py-2 px-4 rounded-full cursor-pointer hover:bg-primary/70">Rest API</div>
        </div>
    </section>
}

export default ProjectSection