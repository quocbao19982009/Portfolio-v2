import AWS from '@assets/skills/amazon-web-services.svg';
import cSharp from '@assets/skills/csharp.svg';
import docker from '@assets/skills/docker.svg';
import dotnet from '@assets/skills/dotnet.svg';
import git from '@assets/skills/git-scm-icon.svg';
import github from '@assets/skills/github.svg';
import jest from '@assets/skills/jest-icon.svg';
import mateiralUI from '@assets/skills/material-ui.svg';
import mongoDb from '@assets/skills/mongodb-icon.svg';
import nodejs from '@assets/skills/nodejs-icon.svg';
import postgresSql from '@assets/skills/postgresql.svg';
import reactQuery from '@assets/skills/react-query-icon.svg';
import react from '@assets/skills/reactjs-icon.svg';
import redux from '@assets/skills/redux-icon.svg';
import typescript from '@assets/skills/typescript-icon.svg';
import { useState } from 'react';

const SkillsSet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopover = () => {
        setIsOpen(!isOpen);
    };
    const skillList2 = [
        {
            type: 'frontend',
            title: 'Favorite Frontend Technologies:',
            tech: [
                {
                    name: 'Typescript',
                    image: typescript,
                },
                {
                    name: 'React',
                    image: react,
                },
                {
                    name: 'Material UI',
                    image: mateiralUI,
                },
                {
                    name: 'React Query',
                    image: reactQuery,
                },
                {
                    name: 'Redux',
                    image: redux,
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
                },
                {
                    name: 'C#',
                    image: cSharp,
                },
                {
                    name: '.Net',
                    image: dotnet,
                },
                {
                    name: 'MongoDB',
                    image: mongoDb,
                },
                {
                    name: 'PostgreSQL',
                    image: postgresSql,
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
                },
                {
                    name: 'Jest',
                    image: jest,
                },
                {
                    name: 'Github Action',
                    image: github,
                },
                {
                    name: 'Docker',
                    image: docker,
                },
                {
                    name: 'Amazon Web Service',
                    image: AWS,
                },
            ],
        },
    ];

    return (
        <>
            <div className="text-*xs mx-auto mt-12 flex flex-wrap gap-10 rounded-full px-4 text-center md:px-6 lg:px-8 xl:px-0">
                {skillList2.map((skill) => (
                    <div key={skill.type} className="w-full">
                        <h3>{skill.title}</h3>
                        <div className="w-full">
                            <ul className="grid w-full list-none grid-cols-3 items-center justify-items-center gap-10 sm:grid-cols-4  md:grid-cols-5">
                                {skill.tech.map((tech) => (
                                    <li
                                        key={tech.name}
                                        className="flex flex-col items-center justify-center gap-2  "
                                    >
                                        <img
                                            className="h-14 w-14"
                                            src={tech.image}
                                            alt={tech.name}
                                        />
                                        <p>{tech.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <button
                    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
                    onClick={togglePopover}
                >
                    Open Popover
                </button>
                {isOpen && (
                    <div className="absolute left-0 top-0 z-10 mt-2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
                        {/* Popover title */}
                        <div className="mb-2 flex items-center justify-between">
                            <h2 className="text-lg font-semibold">
                                Popover Title
                            </h2>
                            <button
                                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                                onClick={togglePopover}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm3.879 13.293l-1.414 1.414L10 11.414l-2.464 2.293-1.414-1.414L8.586 10 6.121 7.536l1.414-1.414L10 8.586l2.464-2.464 1.414 1.414L11.414 10l2.465 2.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Popover content */}
                        <p>
                            This is the content of the popover. You can add any
                            HTML content here.
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default SkillsSet;
