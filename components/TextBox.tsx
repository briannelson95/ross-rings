import Button from "./Button";
import TextComponent from "./TextComponent";

const TextBox = ({ heading, text, href, buttonText }) => {
    return (
        <div className="w-full h-full bg-norway text-white ">
            {/* <h2 className="text-6xl">{heading}</h2> */}
            <div className="px-8 py-4 pt-8">
                <TextComponent text={text} />
                <div className="mt-10"/>
                <Button href={href} text={buttonText} />
            </div>
        </div>
    )
}

export default TextBox;