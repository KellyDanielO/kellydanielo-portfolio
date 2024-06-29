import { db } from '../firebase'; // make sure you have configured your firebase
import { collection, query, where, getDocs, orderBy, doc, getDoc } from 'firebase/firestore';
export interface Project {
    id: string;
    title: string;
    description: string;
    isTopProject: boolean;
    youtubeUrl?: string;
    category: string;
    stack?: string;
    liveUrl?: string;
    githubUrl?: string;
    images?: string[];
    createdAt: Date;
}

type ProjectsByCategory = {
    [key: string]: Project[];
};
export const getTopProjectsByCategory = async () => {
    try {
        const categories = ['app', 'web', 'api', 'desktop']; 
        const topProjects: ProjectsByCategory = {};

        for (const category of categories) {
            const q = query(collection(db, 'projects'), where('isTopProject', '==', true), where('category', '==', category));
            const querySnapshot = await getDocs(q);
            topProjects[category] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
        }

        return topProjects;
    } catch (error) {
        // console.error('Error retrieving top projects by category: ', error);
    }
};

export const getAllProjectsByCategoryOrdered = async () => {
    try {
        const categories = ['app', 'web', 'api', 'desktop']; 
        const allProjects: ProjectsByCategory = {};

        for (const category of categories) {
            const q = query(collection(db, 'projects'), where('category', '==', category), orderBy('isTopProject', 'desc'));
            const querySnapshot = await getDocs(q);
        
            
            allProjects[category] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
        }
        
        return allProjects;
    } catch (error) {
        // console.error('Error retrieving projects by category: ', error);
    }
};

export const getProjectById = async (projectId: string) => {
    try {
        const projectDoc = doc(db, 'projects', projectId);
        const projectSnapshot = await getDoc(projectDoc);

        if (projectSnapshot.exists()) {
            return { id: projectSnapshot.id, ...projectSnapshot.data() };
        } else {
            console.log('No such project!');
        }
    } catch (error) {
        // console.error('Error retrieving project: ', error);
    }
};