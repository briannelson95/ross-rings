import Link from "next/link";

const Button = ({ text, href, color }) => {
    return (
        <>
            <Link
                href={href}
                className={`mt-4 py-4 px-12 ease-in-out duration-200 text-poppins border rounded-full ${!color ? `border-white bg-white bg-opacity-25 hover:bg-white hover:text-finlandia` : `border-finlandia bg-finlandia bg-opacity-25 text-finlandia hover:bg-finlandia hover:text-white`}`}
            >
                {text}
            </Link>
        </>
    );
}
 
export default Button;