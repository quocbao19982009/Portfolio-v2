import Button from '@components/button/Button'
import { ArrowForward, Close, Menu } from '@mui/icons-material'
import { useState } from 'react'
import { navLinks } from '../../constants'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav
            className={
                'fixed flex h-24 w-full items-center justify-between bg-nav-color px-8 py-0 backdrop-blur-sm backdrop-filter '
            }
        >
            {/* TODO: FIX when have a real Logo */}
            <span className="text-xl font-bold">Bao Nguyen</span>

            <ul
                className={`flex-2 hidden  h-full w-1/2 items-center justify-center gap-10 md:flex`}
            >
                {navLinks.map((link) => (
                    <li
                        className=" border-transparent flex h-full flex-1 cursor-pointer items-center justify-center  rounded-sm border-b-4 border-opacity-0 text-lg font-bold hover:border-b-4 hover:border-primary"
                        key={link.name}
                    >
                        <a>{link.name}</a>
                    </li>
                ))}
            </ul>
            <Button
                className="hidden md:flex"
                text={'My Resume'}
                onClick={() => console.log('Download Resume')}
                icon={<ArrowForward />}
            />
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
                    className={`
                    absolute
          right-0 top-0 z-40 h-screen w-[80vw] bg-secondary pt-24 transition duration-500 ease-in  ${
              isMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
          } 
          md:hidden`}
                >
                    <ul className={`flex w-full flex-col gap-10 p-10`}>
                        {navLinks.map((link) => (
                            <li className="text-xl font-bold" key={link.name}>
                                <a>{link.name}</a>
                            </li>
                        ))}
                        <Button
                            text={'My Resume'}
                            onClick={() => console.log('Download Resume')}
                            icon={<ArrowForward />}
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
    )
}

export default Navbar
