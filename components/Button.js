import Link from "next/link";

const Button = ({ text, href }) => {
    return (
        <>
            <Link
                href={href}
                className='bg-dark-blue-800 text-white p-2 rounded-md hover:bg-dark-blue-900 ease-in-out duration-200'
            >
                {text}
            </Link>
        </>
    );
}
 
export default Button;