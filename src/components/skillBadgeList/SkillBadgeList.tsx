interface SkillBadgeListProps {
    skills: string[];
    variant?: 'primary' | 'secondary';
}

const SkillBadgeList = ({
    skills,
    variant = 'primary',
}: SkillBadgeListProps) => {
    const isSecondary = variant === 'secondary';
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {skills.map((skill) => (
                <li key={skill} className="mr-1.5 mt-2">
                    <div
                        className={`flex items-center rounded-full ${
                            isSecondary ? 'bg-teal-100/30' : 'bg-teal-300/10'
                        } px-3 py-1 text-xs font-medium leading-5 ${
                            isSecondary ? 'text-white' : 'text-primary'
                        } `}
                    >
                        {skill}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SkillBadgeList;
