import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
import { urlFor } from "../lib/modules";

const Hero = ({ images, children }) => {
    return (
        <div className="w-full h-full bg-heather relative text-white">
            {children}
        </div>
    )
}

export default Hero;