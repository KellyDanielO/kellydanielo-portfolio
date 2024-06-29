import { motion } from 'framer-motion'
import Image1 from '../../../assets/images/api.jpeg'
import WebProjectCard from '../WebProjectCard'
import { Project } from '@/app/functions/firebase_functions';
interface ProjectsListProps {
    projects: Project[];
}
const ApiProjectSection: React.FC<ProjectsListProps> = ({ projects }) => {
    return <motion.div
        className="w-full flex gap-x-5 gap-y-16 flex-wrap justify-between items-center">
        {projects.length > 0 ? (
            <>
                {projects.map(project => {
                    let stacks: string[] = project.stack!.split(' ')
                    let bio: string = project.description.substring(0, 120)
                    return <WebProjectCard key={project.id} image={project.images != undefined ? project.images[0] : ''} title={project.title} description={bio} stack={stacks} github={project.githubUrl || null} id={project.id} isTop={project.isTopProject} liveLink={project.liveUrl || null} />

                })}
            </>
        ) : (
            <p>Loading...</p>
        )}
    </motion.div>
}

export default ApiProjectSection