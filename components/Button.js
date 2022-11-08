import Link from "next/link";

const Button = ({ text, href }) => {
    return (
        <>
            <Link
                href={href}
                className="border-2 border-white mt-4 p-2 hover:bg-white hover:text-black ease-in-out duration-200"
            >
                {text}
            </Link>
        </>
    );
}
 
export default Button;