import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEtsy, FaInstagram } from "react-icons/fa";
import { HiMenu, HiOutlineShoppingCart, HiX } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";

interface NavProps {
    navigation: any;
    logo: string;
}

export default function NewNav(Props: NavProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setMenuOpen(false),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true

    })
    return(
        <nav className="relative xl:h-[122px] text-[20px] text-dark-blue-900 lg:h-[100px] lg:text-base">
            {/* mobile nav */}
            <ul {...swipeHandlers} className={`bg-light-blue-100 text-dark-blue-900 w-3/4 absolute mt-[-1rem] h-screen duration-300 ease-in-out transition-all ${menuOpen ? `translate-x-0` : `-translate-x-full`}`}>
                <Link
                    href='/'
                    className="flex w-full justify-center"
                >
                    <Image 
                        src={Props.logo}
                        height={150}
                        width={150}
                        alt={""}                    />
                </Link>
                <HiX className='absolute top-4 right-3 text-2xl' onClick={() => setMenuOpen(false)} />
                {Props.navigation.map((item, index) => (
                    <Link 
                        key={index} 
                        href={`/${item.slug.current}`}
                        className='flex w-full items-center justify-center my-4 text-3xl hover:text-white ease-in-out duration-200'
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.title}
                    </Link>
                ))}
            </ul>
            <div className="h-full flex justify-between items-center mx-4 lg:hidden">
                <HiMenu height={40} width={40} className='text-2xl ml-2' onClick={() => setMenuOpen(true)} />
                <Link href="/">
                    <Image 
                        src={Props.logo}
                        width={50}
                        height={50} 
                        alt={""}                    />
                </Link>
                <Link href={`/${Props.navigation[2].slug.current}`}>
                    <HiOutlineShoppingCart height={40} width={40}  className='text-2xl ml-2' />
                </Link>
            </div>
            {/* desktop nav */}
            <ul className="hidden lg:flex h-full px-10 mx-52 lg:mx-10 lg:px-6">
                <li>
                    <Link
                        href={'/'}
                        className="xl:first:mr-56 lg:first:mr-32"
                    >
                        <Image 
                            src={Props.logo}
                            height={122}
                            width={122}
                            alt={'logo.alt'}
                            className="lg:h-[100px] lg:w-[100px]"
                        />
                    </Link>
                </li>
                {Props.navigation.map((item, index) => (
                    <li key={index} className='flex items-center mx-6 hover:underline ease-in-out lg:mx-4'>
                        <Link 
                            key={index} 
                            href={`/${item.slug.current}`}
                            
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
                <ul className="last:ml-auto flex h-full px-10 mx-52 lg:mx-10 lg:px-6 text-xl">
                    <li className='flex items-center mx-6 hover:underline ease-in-out lg:mx-4'>
                        <a href="https://www.instagram.com/ross_rings" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className='flex items-center mx-6 hover:underline ease-in-out lg:mx-4'>
                        <a href="https://www.etsy.com/shop/RossRingsByMaisie" target="_blank" rel="noreferrer">
                            <FaEtsy />
                        </a>
                    </li>
                </ul>
            </ul>
        </nav>
    )
    
}