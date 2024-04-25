import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import projectsList from '@/constants';
import ProjectDetails from './components/ProjectDetails';

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <h2 className="mb-10 text-center text-4xl font-bold">Projects</h2>
            <div className="flex flex-col gap-3">
                {' '}
                {projectsList.map((projectInfo) => (
                    <ProjectDetails project={projectInfo} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
