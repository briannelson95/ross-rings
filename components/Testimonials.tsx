import TextComponent from "./TextComponent";

const Testimonials = ({ testimonials }) => {
    return (
        <div className="text-finlandia flex flex-col items-center">
            <h2 className="lgtext-6xl text-5xl">Testimonials</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {testimonials.map((item, index) => (
                    <div key={index} className="flex flex-col items-center spacespace-between lg:mt-32 p-8 lg:w-80">
                        <p className="text-9xl lg:text-[162px]">&quot;</p>
                        <TextComponent text={item.testimonial} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;