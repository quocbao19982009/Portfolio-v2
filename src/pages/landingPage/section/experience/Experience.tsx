import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import { experienceList } from '@/constants';
import { Fade } from 'react-awesome-reveal';
import ExperienceDetail from './components/ExperienceDetail';

const Experience = () => {
    return (
        <SectionWrapper id="experiences">
            <h2 className="mb-10 text-center text-4xl font-bold">Experience</h2>
            <div className="flex flex-col gap-8">
                <ol>
                    {experienceList.map((experience, index) => (
                        <Fade
                            key={index}
                            triggerOnce
                            direction="right"
                            delay={200}
                        >
                            <ExperienceDetail experience={experience} />
                        </Fade>
                    ))}
                </ol>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
