import Image from "next/image";
import Link from "next/link";

export default function NewNav({ navigation, logo }) {
    return(
        <nav className="relative h-[122px] text-[20px] text-dark-blue-900">
            {/* desktop nav */}
            <ul className="flex h-full px-10 mx-52">
                <li>
                    <Link
                        href={'/'}
                        className="first:mr-56"
                    >
                        <Image 
                            src={logo}
                            height={122}
                            width={122}
                            alt={'logo.alt'}
                        />
                    </Link>
                </li>
                {navigation.map((item, index) => (
                    <li key={index} className='flex items-center mx-6 hover:underline ease-in-out'>
                        <Link 
                            key={index} 
                            href={`/${item.slug.current}`}
                            
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
    
}