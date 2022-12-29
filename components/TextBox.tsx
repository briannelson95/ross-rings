import Button from "./Button";

const TextBox = ({ heading, text, href, buttonText }) => {
    return (
        <div className="w-full h-full bg-norway text-white relative">
            <div className="px-8 py-4 pt-8">
                <h2 className="text-3xl lg:text-6xl mb-6">{heading}</h2>
                <p>{text}</p>
                <div className="flex h-20 text-center lg:absolute bottom-10">
                    <Button href={href} text={buttonText} />
                </div>
            </div>
        </div>
    )
}

export default TextBox;