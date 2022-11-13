import Link from "next/link";

const Footer = ({ navigation }) => {
    return (
        <>
            <footer className="bg-light-blue-50 mt-6 px-10 py-4 pb-6">
                <div className="grid grid-cols-1 gap-3 xl:grid-cols-4">
                    <div>
                        <ul>
                            {navigation.map((item, index) => (
                                <Link
                                    key={index} 
                                    href={`/${item.slug.current}`}
                                >
                                    <li>{item.title}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    Website Developed by <a className="underline" href="https://www.briannelson.dev/" target="_blank">Brian Nelson</a>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;