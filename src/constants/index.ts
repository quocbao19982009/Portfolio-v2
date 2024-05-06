import { ProjectDetail } from '@/interfaces/projectDetail.interfaces';
import netflix from '@assets/projects/netflix.png';
import portfolio from '@assets/projects/portfolio.png';
import veikkausSimulator from '@assets/projects/veikkaus-simulator.png';

export const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
];

const projectsList: ProjectDetail[] = [
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
        title: 'Netflix Clone',
        description:
            'A simple Netflix clone using React and API from The Movie Database (TMDB) where users can see movie info.',
        image: netflix,
        source: 'https://github.com/quocbao19982009/Netflix-Clone',
        note: "Who doesn't try to clone Netflix at least once in their life?",
        live: 'https://netflix-clone-cec3f.firebaseapp.com/',
        technologies: ['React', 'CSS Module', 'Axios', 'React Hook'],
    },
];

export default projectsList;
