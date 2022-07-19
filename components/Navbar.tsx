import Image from "next/image"
import Logo from '../public/Logo.png'
import Link from "next/link"

import { useState } from "react"

const Header = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <>
            <nav className='fixed w-full flex items-center flex-wrap p-3 h-20 z-10'>

                <a className='inline-flex items-center p-2 '>
                    <Image src={Logo}></Image>
                </a>

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
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto '>
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