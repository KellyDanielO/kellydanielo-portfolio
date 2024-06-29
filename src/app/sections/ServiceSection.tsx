
import AppSvg from '../../assets/svgs/app.svg'
import FrontendSvg from '../../assets/svgs/frontend.svg'
import BackendSvg from '../../assets/svgs/backend.svg'
import Image from "next/image";

const ServiceSection = () => {
    return <section id="service-section" className="container-wrapper flex justify-between items-center py-28 flex-col gap-3 ">
    <h1 className="font-freeman text-6xl">My Services</h1>
    <p className="text-greyColor text-lg pt-5">Embrace the transformation, celebrate every achievement, and carve your distinct trajectory with unwavering dedication and adaptability</p>
    <div className="w-full flex justify-between py-20 flex-col lg:flex-row gap-y-3">
      {/* App Development */}
      <div className="lg:w-[30%] py-10 bg-shade flex justify-center items-center gap-5 flex-col">
        <Image
          src={AppSvg}
          alt="App Development"
          // layout="responsive"
          className="w-36 object-contain"
        />
        <h1 className="text-3xl font-freeman">App Development</h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      {/* Front End Development */}
      <div className="lg:w-[30%] py-10 bg-shade flex justify-center items-center gap-5 flex-col">
        <Image
          src={FrontendSvg}
          alt="Fronend Development"
          // layout="responsive"
          className="w-36 object-contain"
        />
        <h1 className="text-3xl font-freeman">Front-end Development</h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      {/* Back End Development */}
      <div className="lg:w-[30%] py-10 bg-shade flex justify-center items-center gap-5 flex-col">
        <Image
          src={BackendSvg}
          alt="Fronend Development"
          // layout="responsive"
          className="w-36 object-contain"
        />
        <h1 className="text-3xl font-freeman">Back-end Development</h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
    </div>
  </section>
}

export default ServiceSection