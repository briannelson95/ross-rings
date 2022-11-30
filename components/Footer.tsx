import Link from "next/link";

const Footer = ({ navigation }) => {
    return (
        <>
            <footer className="mt-6 px-10 py-4 pb-6 2xl:mx-52 flex flex-col items-center">
                <hr className="w-4/5 pb-16" />
                <div className="mb-8">
                    <ul className='flex items-center mx-6 lg:mx-4'>
                        {navigation.map((item, index) => (
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
                </div>
                <div className="text-center">
                    Website Developed by <a className="underline" href="https://www.briannelson.dev/" target="_blank" rel="noreferrer">Brian Nelson</a>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;
