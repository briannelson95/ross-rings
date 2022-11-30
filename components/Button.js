import Link from "next/link";

const Button = ({ text, href }) => {
    return (
        <>
            <Link
                href={href}
                className="border border-white rounded-full bg-white bg-opacity-25 mt-4 py-4 px-12 hover:bg-white hover:text-finlandia ease-in-out duration-200"
            >
                {text}
            </Link>
        </>
    );
}
 
export default Button;