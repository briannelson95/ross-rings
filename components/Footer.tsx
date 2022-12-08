import Link from "next/link";
import Image from 'next/image';

interface FooterProps {
    navigation: any;
    logo: string;
}

const Footer = (Props: FooterProps) => {
    return (
        <>
            <footer className="mt-6 px-10 py-4 pb-6 2xl:mx-52 flex flex-col items-center">
                <hr className="w-4/5 pb-16" />
                <nav className="mb-8 w-full">
                    <ul className='flex items-center mx-6 lg:mx-4'>
                        <li className="first:mr-auto">
                            <Link
                                href={'/'}
                                className=""
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
                            <li key={index} className="px-8">
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
                <div className="text-center">
                    Website Developed by <a className="underline" href="https://www.briannelson.dev/" target="_blank" rel="noreferrer">Brian Nelson</a>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;
