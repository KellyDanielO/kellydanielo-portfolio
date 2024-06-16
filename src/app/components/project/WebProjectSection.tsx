import Image1 from '../../../assets/images/1-web -app.png'
import { motion } from "framer-motion";
import WebProjectCard from '../WebProjectCard';
const WebProjectSection = () => {
    return <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: false, amount: 0.25 }}
        // transition={{ duration: 0.5 }}
        className="w-full flex gap-5 flex-wrap justify-between items-center">
        <WebProjectCard image={Image1} title={"Fudo"} description={"just flutter jkwdnknsckjkdjd swccnsln dnkdnkkdjoj"} stack={['HTML', 'TailwindCSS', 'JavaScript']} github={null} />
        <WebProjectCard image={Image1} title={"Fudo"} description={"just flutter jkwdnknsckjkdjd swccnsln dnkdnkkdjoj"} stack={['HTML', 'TailwindCSS', 'JavaScript']} github={null} />
        <WebProjectCard image={Image1} title={"Fudo"} description={"just flutter jkwdnknsckjkdjd swccnsln dnkdnkkdjoj"} stack={['HTML', 'TailwindCSS', 'JavaScript']} github={null} />
        <WebProjectCard image={Image1} title={"Fudo"} description={"just flutter jkwdnknsckjkdjd swccnsln dnkdnkkdjoj"} stack={['HTML', 'TailwindCSS', 'JavaScript']} github={null} />
        
    </motion.div>
}

export default WebProjectSection