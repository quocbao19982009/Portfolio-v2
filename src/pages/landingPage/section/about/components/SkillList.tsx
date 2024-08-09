import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import AWS from '@assets/skills/amazon-web-services.svg';
import cSharp from '@assets/skills/csharp.svg';
import css from '@assets/skills/css.svg';
import docker from '@assets/skills/docker.svg';
import dotnet from '@assets/skills/dotnet.svg';
import git from '@assets/skills/git-scm-icon.svg';
import github from '@assets/skills/github.svg';
import jest from '@assets/skills/jest-icon.svg';
import mongoDb from '@assets/skills/mongodb-icon.svg';
import nodejs from '@assets/skills/nodejs-icon.svg';
import postgresSql from '@assets/skills/postgresql.svg';
import reactQuery from '@assets/skills/react-query-icon.svg';
import react from '@assets/skills/reactjs-icon.svg';
import redux from '@assets/skills/redux-icon.svg';
import typescript from '@assets/skills/typescript-icon.svg';

const SkillsSet = () => {
    const skillList2 = [
        {
            type: 'frontend',
            title: 'Favorite Frontend Technologies:',
            tech: [
                {
                    name: 'Typescript',
                    image: typescript,
                    popoverContent:
                        'Typescript is must for me in every Frontend project',
                },
                {
                    name: 'React',
                    image: react,
                    popoverContent: `React is my main "framework" for frontend development`,
                },
                {
                    name: 'CSS',
                    image: css,
                    popoverContent:
                        'If you know CSS, mastering other CSS frameworks is easy (eg. Tailwind, Material-UI, etc)',
                },
                {
                    name: 'React Query',
                    image: reactQuery,
                    popoverContent:
                        'React Query is becoming the standard for data fetching in React apps',
                },
                {
                    name: 'Redux',
                    image: redux,
                    popoverContent:
                        'Redux is still my favorite state management library',
                },
            ],
        },
        {
            type: 'backend',
            title: 'Favorite Backend Technologies:',
            tech: [
                {
                    name: 'Node JS',
                    image: nodejs,
                    popoverContent:
                        'Node JS is easy to pick up after learning JS/TS',
                },
                {
                    name: 'C#',
                    image: cSharp,
                    popoverContent:
                        'My secondary language, which I am becoming more fond of',
                },
                {
                    name: '.Net',
                    image: dotnet,
                    popoverContent:
                        'Personally, I think .Net is becoming a great framework for backend development due to constant update and great community',
                },
                {
                    name: 'MongoDB',
                    image: mongoDb,
                    popoverContent:
                        'My go to for noSQL database, better to use with Mongoose, etc',
                },
                {
                    name: 'PostgreSQL',
                    image: postgresSql,
                    popoverContent:
                        'My go to for SQL database, better use with Prisma, EntityFrameWork, etc',
                },
            ],
        },
        {
            type: 'devops',
            title: 'Favorite DevOps Technologies:',
            tech: [
                {
                    name: 'Git',
                    image: git,
                    popoverContent: 'A must for every developer',
                },
                {
                    name: 'Jest',
                    image: jest,
                    popoverContent: 'A testing library for React/Node projects',
                },
                {
                    name: 'Github Action',
                    image: github,
                    popoverContent: 'Basic CI-CD tool for small projects',
                },
                {
                    name: 'Docker',
                    image: docker,
                    popoverContent:
                        'The best containerization tool for me, at the moment',
                },
                {
                    name: 'Amazon Web Service',
                    image: AWS,
                    popoverContent: 'I have AWS Certified Cloud Developer',
                },
            ],
        },
    ];

    return (
        <>
            <div className="text-*xs mx-auto mt-12 flex flex-wrap gap-5 rounded-full px-4 text-center md:px-6 lg:px-8 xl:px-0">
                {skillList2.map((skill) => (
                    <div key={skill.type} className="w-full">
                        <h3 className="mb-4 font-bold">{skill.title}</h3>
                        <div className="w-full">
                            <ul className="grid w-full list-none grid-cols-3 items-center justify-items-center gap-10 sm:grid-cols-4  md:grid-cols-5">
                                {skill.tech.map((tech) => (
                                    <Popover key={tech.name}>
                                        <li>
                                            <PopoverTrigger className="flex flex-col items-center justify-center gap-2">
                                                <img
                                                    className="h-14 w-14 transform transition-transform duration-500 hover:scale-125"
                                                    src={tech.image}
                                                    alt={tech.name}
                                                />
                                                <p>{tech.name}</p>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                {tech.popoverContent}
                                            </PopoverContent>
                                        </li>
                                    </Popover>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SkillsSet;
