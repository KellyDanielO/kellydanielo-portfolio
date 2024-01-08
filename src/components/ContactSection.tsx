import { motion } from "framer-motion";
const ContactSection = () => {
    return <motion.section 
    id="contact"
    className="w-full py-20 flex justify-center items-center flex-col"
    transition={{ delay: 0.5 }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}></motion.section>
}

export default ContactSection;