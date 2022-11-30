import TextComponent from "./TextComponent";

const Testimonials = ({ testimonials }) => {
    return (
        <div className="text-finlandia flex flex-col items-center">
            <h2 className="text-6xl">Testimonials</h2>
            <div className="flex">
                {testimonials.map((item, index) => (
                    <div key={index} className="flex flex-col items-center spacespace-between mt-32 p-8 w-80">
                        <p className="text-[162px]">"</p>
                        <TextComponent text={item.testimonial} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;