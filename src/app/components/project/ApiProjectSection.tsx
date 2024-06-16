import { motion } from 'framer-motion'
import Image1 from '../../../assets/images/api.jpeg'
import WebProjectCard from '../WebProjectCard'
const ApiProjectSection = () => {
    return <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: false, amount: 0.25 }}
        // transition={{ duration: 0.5 }}
        className="w-full flex gap-5 flex-wrap justify-between items-center">
        <WebProjectCard image={Image1} title={"Rest API"} description={"just flutter jkwdnknsckjkdjd swccnsln dnkdnkkdjoj"} stack={['Django', 'Django Rest Framework']} github={null} />

    </motion.div>
}

export default ApiProjectSection