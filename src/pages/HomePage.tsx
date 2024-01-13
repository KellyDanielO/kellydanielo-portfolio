import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactMe from "./Contact";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      transition={{ delay: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactMe />
    </motion.div>
  );
};

export default Home;
