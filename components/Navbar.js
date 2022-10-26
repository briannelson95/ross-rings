import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/modules'

const Navbar = ({ navigation, mobileMenu }) => {
    console.log(mobileMenu)
    return (
        <nav className="bg-white text-black w-screen h-16 shadow-md shadow-light-blue-100/50">
            {/* mobile menu */}
            <div className="h-full flex justify-between items-center mx-4">
                <Link href="/">
                    {mobileMenu[0].title}
                </Link>
                <Link href="/">
                    <Image 
                        src={urlFor(mobileMenu[1]).url()} 
                        width={50}
                        height={50}
                    />
                </Link>
                <Link href="/">
                    {mobileMenu[2].title}
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;