import resume from '@assets/Bao-Nguyen-Resume.pdf';
import { Close, Menu } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { navLinks } from '../../constants';
import ButtonLink from '../button/ButtonLink';

const Navbar = () => {
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
            <div
                className={`flex-2 hidden h-full items-center justify-center gap-10 md:flex`}
            >
                {navLinks.map((link) => (
                    <ButtonLink
                        key={link.name}
                        text={link.name}
                        href={link.path}
                        contained={false}
                        variant="secondary"
                        onClick={() => setIsMenuOpen(false)}
                    />
                ))}
                <ButtonLink
                    text={'Resume'}
                    href={resume}
                    onClick={() => setIsMenuOpen(false)}
                    variant="secondary"
                />
            </div>
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
                    <div className={`flex flex-col justify-center gap-10 p-10`}>
                        {navLinks.map((link) => (
                            <ButtonLink
                                key={link.name}
                                text={link.name}
                                href={link.path}
                                contained={false}
                                variant="secondary"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                        <ButtonLink
                            text={'Resume'}
                            href={resume}
                            variant="secondary"
                            onClick={() => setIsMenuOpen(false)}
                        />
                    </div>
                </div>
            }
            {/* Backdrop */}
            <div
                className={` absolute left-0 top-0 h-screen w-screen backdrop-filter transition duration-500 ease-in  ${
                    isMenuOpen
                        ? 'bg-backdrop-color'
                        : 'pointer-events-none bg-transparent'
                } md:hidden`}
                onClick={() => setIsMenuOpen(false)}
            />
            ,
        </nav>
    );
};

export default Navbar;
