import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/modules'
import { HiMenu, HiX, HiOutlineShoppingCart } from 'react-icons/hi'
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Navbar = ({ navigation, mobileMenu, logo }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setMenuOpen(false),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true

    })
    return (
        <nav className="bg-white text-black w-screen h-16 shadow-md shadow-light-blue-100/50 overflow-hidden">
            {/* mobile menu */}
            <div {...swipeHandlers} className={`bg-light-blue-100 text-dark-blue-900 w-3/4 h-screen absolute top-0 left-0 flex flex-col items-center duration-300 ease-in-out transition-all ${menuOpen ? `translate-x-0` : `-translate-x-full`}`}>
                <Link
                    href='/'
                >
                    <Image 
                        src={logo}
                        height={150}
                        width={150}
                    />
                </Link>
                <HiX className='absolute top-4 right-3 text-2xl' onClick={() => setMenuOpen(false)} />
                {navigation.map((item, index) => (
                    <Link 
                        key={index} 
                        href={`/${item.slug.current}`}
                        className='flex items-center my-4 text-3xl hover:text-white ease-in-out duration-200'
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="h-full flex justify-between items-center mx-4 md:hidden">
                <HiMenu height={40} width={40} className='text-2xl ml-2' onClick={() => setMenuOpen(true)} />
                <Link href="/">
                    <Image 
                        src={urlFor(mobileMenu[1]).url()} 
                        width={50}
                        height={50}
                    />
                </Link>
                <Link href={`/${navigation[1].slug.current}`}>
                    <HiOutlineShoppingCart height={40} width={40}  className='text-2xl ml-2' />
                </Link>
            </div>
            {/* desktop nav */}
            <div className='hidden md:flex h-full mx-8'>
                    <Link href="/" className='first:mr-auto'>
                        <Image 
                            src={logo}
                            height={120}
                            width={120}
                        />
                    </Link>
                    {navigation.map((item, index) => (
                        <Link 
                            key={index} 
                            href={`/${item.slug.current}`}
                            className='flex items-center mx-6'
                        >
                            {item.title}
                        </Link>
                    ))}
            </div>
        </nav>
    );
}
 
export default Navbar;
