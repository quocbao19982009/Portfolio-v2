import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import { projectsList } from '@/constants';
import ProjectDetails from './components/ProjectDetails';

const Projects = () => {
    return (
        <div className="bg-hero">
            <SectionWrapper id="projects" className="text-white">
                <h2 className="mb-10 text-center text-4xl font-bold">
                    Projects
                </h2>
                <div className="flex flex-col gap-8">
                    {projectsList.map((projectInfo) => (
                        <ProjectDetails
                            key={projectInfo.title}
                            project={projectInfo}
                        />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Projects;
