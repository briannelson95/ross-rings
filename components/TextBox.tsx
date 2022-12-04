import Button from "./Button";
import TextComponent from "./TextComponent";

const TextBox = ({ heading, text, href, buttonText }) => {
    return (
        <div className="w-full h-full bg-norway text-white relative">
            <div className="px-8 py-4 pt-8">
                <h2 className="text-6xl mb-6">{heading}</h2>
                <p>{text}</p>
                <div className="absolute bottom-10">
                    <Button href={href} text={buttonText} />
                </div>
            </div>
        </div>
    )
}

export default TextBox;