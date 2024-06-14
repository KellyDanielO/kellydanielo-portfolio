import { motion } from "framer-motion"
import Link from "next/link"

const HeroSection = () => {
    return <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.5 }}
     id="home-section" className="container-wrapper flex justify-center items-center flex-col py-20 lg:py-40 gap-2 lg:gap-5">
    <small className="text-primary font-freeman text-sm lg:text-2xl">Welcome!</small>
    <h1 className="text-2xl lg:text-8xl font-roboto font-bold text-center">Let's Transform Ideas Into <br />Digital Success</h1>
    <h2 className="text-lg lg:text-2xl text-greyColor text-center">I Build, Manage, and Elevate Your Digital Presence</h2>
    <div className="flex gap-5 items-center">
      <Link href={"#contact-section"} className="uppercase py-3 px-5 text-sm lg:text-lg bg-primary/60 font-freeman rounded-full" >Hire me</Link>
      <Link href={"#portfolio-section"} className="uppercase py-3 px-5 text-sm lg:text-lg bg-transparent border-2 font-freeman rounded-full" >My works</Link>
    </div>

  </motion.section>
}

export default HeroSection