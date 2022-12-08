import Image from "next/image";
import Link from "next/link";
import { FaEtsy, FaInstagram } from "react-icons/fa";

interface NavProps {
    navigation: any;
    logo: string;
}

export default function NewNav(Props: NavProps) {
    return(
        <nav className="relative h-[122px] text-[20px] text-dark-blue-900 lg:h-[100px] lg:text-base">
            {/* desktop nav */}
            <ul className="flex h-full px-10 mx-52 lg:mx-10 lg:px-6">
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