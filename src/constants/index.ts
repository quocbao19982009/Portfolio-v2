import { ProjectDetail } from '@/interfaces/projectDetail.interfaces';
import portfolio from '@assets/projects/portfolio.png';
import todo from '@assets/projects/Todo.png';
import veikkausSimulator from '@assets/projects/veikkaus-simulator.png';

export const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
];

export const projectsList: ProjectDetail[] = [
    {
        title: 'Veikkaus Simulator',
        description:
            'Inspired by Veikkaus and a lot of reverse engineer, a full-stack application where users can play the Eurojackpot lottery and Lotto. Fully user-friendly and responsive design, the application is easy to use and understand. The backend was made with .Net and Entity Framework Core. This is my proudest baby so far.',
        image: veikkausSimulator,
        technologies: ['React', 'Typescript', '.Net', 'SQL'],
        source: 'https://github.com/quocbao19982009/Veikkaus-Simulator-V2',
        note: "Why? Because who doesn't want to be a millionaire? But life isn't that easy, so let's simulate it first.",
        live: 'https://eurojackpot-simulator-v2.onrender.com/',
    },
    {
        title: "Bao Nguyen's portfolio",
        description:
            'A static site built with React and Tailwind CSS. The site is fully responsive, built to look clean and straight forward.',
        image: portfolio,
        technologies: ['React', 'Typescript', 'Tailwind CSS'],
        source: 'https://github.com/quocbao19982009/Portfolio-v2',
        note: "Hey, you are already here, why don't you check out the source code?",
        live: 'https://baonguyendev.com/',
    },
    {
        title: 'Todo App',
        description: 'Every one has a todo app. This is mine.',
        image: todo,
        source: 'https://github.com/quocbao19982009/Todo-App?tab=readme-ov-file',
        note: "This is a todo app, but it's my first project with React. So it's special to me. Also, my most star projects on Github.",
        live: 'https://todo-app-16d97.web.app/',
        technologies: ['React', 'Firebase', 'CRUD'],
    },
];

export const experienceList: Experience[] = [
    {
        title: 'Full Stack Web Developer',
        company: 'Insta Group Oy',
        companyLink: 'https://www.insta.fi/fi/',
        startDate: 'AUG 2022',
        endDate: 'Present',
        description:
            "Developed and maintained a industrial software for Konecranes Oyj. The software is used to manage and monitor the industrial equipment. I'm responsible for the front-end and back-end development.",
        technologies: ['React', 'Typescript', 'SQL', '.NET', 'AWS'],
    },
    {
        title: 'Intern Software Developer',
        company: 'Intergrify',
        companyLink: 'https://www.integrify.io/',
        startDate: 'JAN 2022',
        endDate: 'JUNE 2022',
        description:
            'Study and work as a software developer. I have learned and worked with many technologies such as React, NodeJS, Express, MongoDB, Docker, etc. I have also worked with many projects, from small to big, from front-end to back-end.',
        technologies: ['React', 'Docker', 'NodeJS', 'Express', 'MongoDB'],
    },
    {
        title: 'Frontend Developer',
        company: 'Self-taught',
        companyLink:
            'https://www.linkedin.com/posts/bao-nguyen-dev_webdevelopment-job-coding-activity-6938854018999853056-bn4f?utm_source=share&utm_medium=member_desktop',
        startDate: '2021',
        endDate: '2022',
        description:
            'I had a detailed plan on which technologies I will learn and an estimated time for how long it will take me to master them. At that time, I had a part-time job so I learned in the morning and did web dev stuff in the evening. The main methods of my study are Udemy Courses, Youtube videos, and doing hands-on projects. Like everyone else, I get started with HTML, CSS, JavaScript, and ReactJS. After a certain point, I realized that I needed more than just those basic skills to become a competent Frontend Developer. I started to dig into other Frontend technologies such as TypeScript, Next JS, and SASS. Slowly, I picked up interests in Backend and DevOps, so I studied Node JS, Docker, AWS, and Github Action. ',
        technologies: ['HTML', 'Javascript', 'CSS'],
    },
    {
        title: 'Environmental and Engineering Student',
        company: 'Tampere University of Applied Sciences (TAMK)',
        companyLink: 'https://www.tuni.fi/en',
        startDate: '2016',
        endDate: '2021',
        description:
            'I studied Environmental Engineering at Tampere University of Applied Sciences. I learned a lot about the environment, how to protect it, and how to make the world a better place. I also learned a lot about engineering, how to solve problems, and how to make things work.',
        technologies: ['Engineer', 'Environmental', 'Logic', 'Laboratory'],
    },
];
