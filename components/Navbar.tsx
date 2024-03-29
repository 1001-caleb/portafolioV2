
import Link from "next/link"

import { useEffect, useState } from "react"

const Header = () => {
    const [active, setActive] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => window.removeEventListener('scroll', changeNavbarColor);
    }, []);

    return (
        <>
            <nav className={colorChange ? 'fixed w-full flex items-center flex-wrap p-3 h-20 z-10 bg-black  bg-opacity-30 backdrop-blur-sm max-h-[40rem] '
                : 'fixed w-full flex items-center flex-wrap p-3 h-20 z-10 '}>

                <Link href="/">
                    <a className='inline-flex items-center p-2 '>
                        <p className='bg-gradient-to-r from-cyan-500 to-violet-600 text-transparent bg-clip-text font-bold text-2xl sm:text-4xl '>PC</p>
                        <span className='text-white mx-2 text-xl invisible sm:visible'>parra.code</span>
                    </a>
                </Link>

                <button
                    className=' inline-flex p-3  lg:hidden text-white ml-auto hover:text-white outline-none '
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>

                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto `}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='#work'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center  hover:text-violet-600 '>
                                WORK
                            </a>
                        </Link>


                        <Link href='#service'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center  hover:text-violet-600 '>
                                SERVICE
                            </a>
                        </Link>

                        <Link href='#contact'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center  hover:text-violet-600 '>
                                CONTACT
                            </a>
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header