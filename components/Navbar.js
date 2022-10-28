import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/modules'

const Navbar = ({ navigation, mobileMenu, logo }) => {
    return (
        <nav className="bg-white text-black w-screen h-16 shadow-md shadow-light-blue-100/50 overflow-hidden">
            {/* mobile menu */}
            <div className="h-full flex justify-between items-center mx-4 md:hidden">
                <Link href={navigation[1].slug.current}>
                    {navigation[1].title}
                </Link>
                <Link href="/">
                    <Image 
                        src={urlFor(mobileMenu[1]).url()} 
                        width={50}
                        height={50}
                    />
                </Link>
                <Link href={navigation[2].slug.current}>
                    {navigation[2].title}
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