import SkillBadgeList from '@/components/skillBadgeList/SkillBadgeList';

interface ExperienceDetailProps {
    experience: Experience;
}

const ExperienceDetail = ({ experience }: ExperienceDetailProps) => {
    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2024 to Present"
                >
                    {experience.startDate} — {experience.endDate}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug ">
                        <div>
                            <a
                                className="group/link inline-flex items-baseline text-base font-medium leading-tight hover:text-primary focus-visible:text-primary"
                                href={experience.companyLink}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${experience.title} at ${experience.company}`}
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                    {experience.title} {' · '}
                                    <span className="inline-block">
                                        {experience.company}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                        {experience.description}
                    </p>
                    <SkillBadgeList skills={experience.technologies} />
                </div>
            </div>
        </li>
    );
};

export default ExperienceDetail;
