import AppProjectCard from "../AppProjectCard";
import Image1 from '../../../assets/images/1-flutter -app.jpg'
import Image2 from '../../../assets/images/2-flutter -app.jpg'
import Image3 from '../../../assets/images/3-flutter -app.jpg'
import Image4 from '../../../assets/images/4-flutter -app.jpg'
import { motion } from "framer-motion";
import { Project } from "@/app/functions/firebase_functions";

interface ProjectsListProps {
  projects: Project[];
}
const AppProjectSection: React.FC<ProjectsListProps> = ({ projects }) => {
  return <motion.div
    className="w-full flex gap-5 flex-wrap justify-between items-center">
    {projects.length > 0 ? (
      <>
        {projects.map(project => {
          let stacks: string[] = project.stack!.split(' ')
          let bio: string = project.description
          return <AppProjectCard key={project.id} image={project.images != undefined ? project.images[0] : ''} title={project.title} description={bio} stack={stacks} github={project.githubUrl || null} id={project.id} isTop={project.isTopProject} liveLink={project.liveUrl || null} />

        })}
      </>
    ) : (
      <p>Loading...</p>
    )}
  </motion.div>
}

export default AppProjectSection