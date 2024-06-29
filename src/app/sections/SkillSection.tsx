const SkillSection = () => {
    return <section id="skill-section" className="container-wrapper flex justify-between items-center py-20 flex-col gap-5 ">
        <h1 className="font-freeman text-6xl">My SKills</h1>
        <p className="text-greyColor text-lg text-center lg:text-justify">Embrace the journey, treasure each milestone, and forge your unique path forward with determination and resilience.</p>
        <div className="w-full flex flex-wrap gap-10">
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-5">
                <div className="flex justify-between items-center w-full">
                    <h3>HTML/CSS</h3>
                    <p>80%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-shade">
                    <div className="h-2 w-[80%] bg-primary rounded-full"></div>
                </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                    <h3>PHP</h3>
                    <p>80%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-shade">
                    <div className="h-2 w-[80%] bg-primary rounded-full"></div>
                </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                    <h3>JavaScript</h3>
                    <p>75%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-shade">
                    <div className="h-2 w-[75%] bg-primary rounded-full"></div>
                </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                    <h3>Flutter</h3>
                    <p>75%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-shade">
                    <div className="h-2 w-[75%] bg-primary rounded-full"></div>
                </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                    <h3>React</h3>
                    <p>70%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-shade">
                    <div className="h-2 w-[70%] bg-primary rounded-full"></div>
                </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                    <h3>NextJS</h3>
                    <p>65%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-shade">
                    <div className="h-2 w-[65%] bg-primary rounded-full"></div>
                </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                    <h3>python (Django)</h3>
                    <p>75%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-shade">
                    <div className="h-2 w-[75%] bg-primary rounded-full"></div>
                </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-between items-center flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                    <h3>MySQL & Postgres</h3>
                    <p>70%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-shade">
                    <div className="h-2 w-[70%] bg-primary rounded-full"></div>
                </div>
            </div>
        </div>
    </section>
}
export default SkillSection