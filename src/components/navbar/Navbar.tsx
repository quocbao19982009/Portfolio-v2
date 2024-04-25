import Button from '@components/button/Button';
import { Close, Menu } from '@mui/icons-material';
import { useState } from 'react';
import { navLinks } from '../../constants';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className={
                'text-white fixed z-50 flex h-24 w-full items-center justify-end bg-nav-color px-8 py-0 backdrop-blur-sm backdrop-filter'
            }
        >
            {/* TODO: FIX when have a real Logo */}
            {/* <span className="text-xl font-bold">Bao Nguyen</span> */}

            <ul
                className={`flex-2 hidden h-full items-center justify-center gap-10 md:flex`}
            >
                {navLinks.map((link) => (
                    <li
                        className=" flex h-full flex-1 cursor-pointer items-center justify-center rounded-sm  border-b-4 border-transparent border-opacity-0 text-lg font-bold hover:border-b-4 hover:border-primary"
                        key={link.name}
                    >
                        <a>{link.name}</a>
                    </li>
                ))}
                <Button
                    className="hidden md:flex"
                    text={'Resume'}
                    onClick={() => console.log('Download Resume')}
                />
            </ul>

            {
                <div className={'z-50 md:hidden'}>
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
                                className="text-white cursor-pointer text-center text-xl font-bold "
                                key={link.name}
                            >
                                <a>{link.name}</a>
                            </li>
                        ))}
                        <Button
                            text={'Resume'}
                            className="text-white text-lg font-bold"
                            onClick={() => console.log('Download Resume')}
                        />
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
