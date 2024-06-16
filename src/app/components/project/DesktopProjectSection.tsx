import Image1 from '../../../assets/images/3-web .jpg'
import { motion } from "framer-motion"
import WebProjectCard from "../WebProjectCard"

const DesktopProjectSection = () => {
    return <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: false, amount: 0.25 }}
        // transition={{ duration: 0.5 }}
        className="w-full flex gap-5 flex-wrap justify-between items-center">
        <WebProjectCard image={Image1} title={"Visa"} description={"just flutter jkwdnknsckjkdjd swccnsln dnkdnkkdjoj"} stack={['Flutter']} github={null} />

    </motion.div>
}

export default DesktopProjectSection