import Image from "next/image"
import Logo from '../public/Logo.png'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () =>{
    
    return(
        <>
            <nav className="flex justify-between px-5 justify-items-center mt-5">
                <Image src={Logo}></Image>
                <div className="absolute flex flex-col md:flex gap-5">
                    <a className='text-white'>WORK</a>
                    <a className='text-white'>SERVICES</a>
                    <a className='text-white'>CONTACT</a>
                </div>
                <AiOutlineMenu  size={30} color="white" className='md:hidden'/>
            </nav>
        </>
    )
}

export default Header