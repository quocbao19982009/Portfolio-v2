import resume from '@assets/Bao-Nguyen-Resume.pdf';
import Button from '@components/button/Button';
import { Close, Menu } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { navLinks } from '../../constants';

const Navbar = () => {
    // TODO: Is Logo needed?
    // TODO: Update the Resume

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isVisible =
                prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    return (
        <nav
            className={`fixed z-50 flex h-24 w-full items-center justify-end bg-nav-color px-8 py-0 text-white backdrop-blur-sm backdrop-filter transition-all duration-300  ${
                visible ? 'top-0' : '-top-full'
            }`}
        >
            <ul
                className={`flex-2 hidden h-full items-center justify-center gap-10 md:flex`}
            >
                {navLinks.map((link) => (
                    <li
                        className=" flex h-full flex-1 cursor-pointer  items-center justify-center  rounded-sm border-b-4 border-transparent border-opacity-0 text-lg font-bold hover:border-b-4 hover:border-primary"
                        key={link.name}
                    >
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))}
                <a href={resume}>
                    <Button
                        className="text-lg font-bold text-white"
                        text={'Resume'}
                        onClick={() => {}}
                    />
                </a>
            </ul>

            {
                <div className={'z-50 cursor-pointer md:hidden'}>
                    {isMenuOpen ? (
                        <Close onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <Menu onClick={() => setIsMenuOpen(true)} />
                    )}
                </div>
            }

            {/* Navlink for mobile */}
            {
                <div
                    className={`absolute right-0 top-0 z-40 flex h-screen w-1/2 justify-center bg-hero pt-24 transition duration-500 ease-in  ${
                        isMenuOpen
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0'
                    }
          md:hidden`}
                >
                    <ul className={`flex flex-col justify-center gap-10 p-10`}>
                        {navLinks.map((link) => (
                            <li
                                className="cursor-pointer text-center text-xl font-bold text-white "
                                key={link.name}
                            >
                                <a
                                    href={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <a href={resume}>
                            <Button
                                className="text-lg font-bold text-white"
                                text={'Resume'}
                                onClick={() => {}}
                            />
                        </a>
                    </ul>
                </div>
            }
            {/* Backdrop */}
            <div
                className={`backdrop-blur-1 z-1 pointer-events-none absolute left-0 top-0 h-screen w-screen backdrop-filter transition duration-500 ease-in  ${
                    isMenuOpen ? 'bg-backdrop-color' : 'bg-transparent'
                } md:hidden`}
            />
        </nav>
    );
};

export default Navbar;
