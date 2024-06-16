import AppProjectCard from "../AppProjectCard";
import Image1 from '../../../assets/images/1-flutter -app.jpg'
import Image2 from '../../../assets/images/2-flutter -app.jpg'
import Image3 from '../../../assets/images/3-flutter -app.jpg'
import Image4 from '../../../assets/images/4-flutter -app.jpg'
import { motion } from "framer-motion";

const AppProjectSection = () => {
  return <motion.div
    // initial={{ opacity: 0 }}
    // whileInView={{ opacity: 1}}
    // viewport={{ once: false, amount: 0.25 }}
    // transition={{ duration: 0.5 }}
    className="w-full flex gap-5 flex-wrap justify-between items-center">
    <AppProjectCard image={Image1} title={"Flutter app"} description={"just flutter jkwdnknsckjkdjd swccnsln"} stack={['Flutter', 'Riverpod', 'php', 'django']} github={null} />
    <AppProjectCard image={Image2} title={"Flutter app"} description={"just flutter jkwdnknsckjkdjd swccnsln"} stack={['Flutter']} github={null} />
    <AppProjectCard image={Image3} title={"Flutter app"} description={"just flutter jkwdnknsckjkdjd swccnsln"} stack={['Flutter']} github={null} />
    <AppProjectCard image={Image4} title={"Flutter app"} description={"just flutter jkwdnknsckjkdjd swccnsln"} stack={['Flutter']} github={null} />
  </motion.div>
}

export default AppProjectSection