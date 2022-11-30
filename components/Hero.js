import { Carousel } from "react-responsive-carousel";
import { urlFor } from "../lib/modules";

const Hero = ({ images }) => {
    return (
        <div className="w-full h-full bg-heather absolute">
            {images > 0 
                ? <Carousel axis="vertical" autoPlay>
                        {images.map((item, index) => (
                            <div key={index}>
                                <Image
                                    src={urlFor(item.image).url()}
                                    alt={item.alt}
                                    height={2000}
                                    width={2000}
                                />
                            </div>
                        ))}
                </Carousel>
                : <div>
                    <Image
                        src={urlFor(images.image).url()}
                        alt={images.alt}
                        height={2000}
                        width={2000}
                    />
                </div>
            }
            
        </div>
    )
}

export default Hero;