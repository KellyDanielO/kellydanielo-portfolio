import Link from "next/link"

const ResumeSection = () => {
    return <section id="resume-section" className="container-wrapper flex justify-between items-center py-20 flex-col gap-2">

        <h1 className="font-freeman text-6xl">Resume</h1>
        <p className="text-greyColor text-lg text-center lg:text-justify">Embrace the journey, cherish the moments, and create your own path.</p>
        <div className="flex w-full flex-wrap justify-center gap-2 flex-col lg:flex-row">
            <div className="lg:w-[45%] bg-shade p-10">
                <span className="text-primary text-3xl font-freeman font-bold">2024-Date</span>
                <h2 className="text-3xl font-roboto">Flutter Developer</h2>
                <span className="position">InMotion Hub</span>
                <p className="mt-4">Collaborating with other team members to develop, quality and production ready applications.</p>
            </div>
            <div className="lg:w-[45%] bg-shade p-10">
                <span className="text-primary text-3xl font-freeman font-bold">2021-2023</span>
                <h2 className="text-3xl font-roboto">Software Developer</h2>
                <span className="position">OMEGA POWER MINISTRIES</span>
                <p className="mt-4">Collaborated with the church team to develop impactful mobile applications and enhance their digital presence through website optimization</p>
            </div>
            <div className="lg:w-[45%] bg-shade p-10">
                <span className="text-primary text-3xl font-freeman font-bold">2023-Date</span>
                <h2 className="text-3xl font-roboto">Flutter Developer <span className="text-sm">(Part-time)</span> </h2>
                <span className="position">Beninfy</span>
                <p className="mt-4">Collaborated with a dedicated team to innovate and develop a cutting-edge ride-hailing application, driving forward user experience and technological advancement in the transportation industry.</p>
            </div>
            <div className="lg:w-[45%] bg-shade p-10">
                <span className="text-primary text-3xl font-freeman font-bold">2024-Date</span>
                <h2 className="text-3xl font-roboto">IT Manager <span className="text-sm">(Part-time)</span></h2>
                <span className="position">Climate Resillency</span>
                <p className="mt-4">Leading a talented team in pioneering innovative IT solutions, driving digital transformation and enhancing operational efficiency for optimal organizational success.</p>
            </div>
        </div>
        <Link href={""} className="uppercase py-3 px-5 bg-shade hover:bg-primary/70 transition-all ease-in font-freeman rounded-full" >Download CV</Link>
    </section>
}

export default ResumeSection