import SkillBadgeList from '@/components/skillBadgeList/SkillBadgeList';
import { ProjectDetail } from '@/interfaces/projectDetail.interfaces';
import Reveal from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';

interface ProjectDetailsProps {
    project: ProjectDetail;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    const { title, description, image, source, live, note, technologies } =
        project;
    return (
        <div className="flex flex-wrap items-center">
            <div className=" w-full lg:w-2/5">
                <div className="">
                    <Reveal
                        cascade={true}
                        triggerOnce
                        key="info"
                        delay={1000}
                        duration={500}
                    >
                        <h3 className="mb-3 text-lg font-bold">{title}</h3>
                        <div>
                            <p className="mb-4">{description}</p>
                            <p className="mb-4">{note}</p>
                            <p className="mb-4 font-bold">
                                <SkillBadgeList
                                    variant="secondary"
                                    skills={technologies}
                                />
                            </p>
                        </div>
                        <div className="items-cen flex gap-3 ">
                            <a rel="noreferrer" target="_blank" href={live}>
                                <button
                                    className="relative z-0 mt-2 inline-block rounded-md border-2 border-white px-4 py-2 font-bold text-white transition
                                     ease-in-out before:absolute  before:bottom-0 before:left-0 before:-z-10 before:block before:h-full before:w-0 before:transition-all before:content-[''] hover:text-primary
                                     before:hover:w-full before:hover:bg-white
                                     "
                                >
                                    See Live
                                </button>
                            </a>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                className="mt-2 flex items-center px-4  py-2 font-bold text-white"
                                href={source}
                            >
                                Source Code
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="mt-3 w-full md:pl-3 lg:w-3/5">
                <Reveal triggerOnce key="info" delay={1000} duration={500}>
                    <div className="project-wrapper__image load-hidden">
                        <a rel="noreferrer" href={live} target="_blank">
                            <Tilt
                                tiltMaxAngleX={4}
                                tiltMaxAngleY={4}
                                glareEnable
                                glareMaxOpacity={0.5}
                            >
                                <img
                                    alt="Project"
                                    className="w-full shadow-lg"
                                    src={image}
                                />
                            </Tilt>
                        </a>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default ProjectDetails;
