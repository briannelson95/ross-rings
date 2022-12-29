import Link from "next/link";

interface ButtonProps {
    text: string;
    href: string;
    color?: boolean;
}

const Button = (Props: ButtonProps) => {
    return (
        <>
            <Link
                href={Props.href}
                className={
                    `mt-4 py-4 px-10 ease-in-out duration-200 text-poppins border rounded-full 
                    ${!Props.color 
                        ? `border-white bg-white bg-opacity-25 hover:bg-white hover:text-finlandia` 
                        : `border-finlandia bg-finlandia bg-opacity-25 text-finlandia hover:bg-finlandia hover:text-white`
                    }`
                }
            >
                {Props.text}
            </Link>
        </>
    );
}
 
export default Button;