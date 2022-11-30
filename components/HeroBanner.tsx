import Image from "next/image";
import { urlFor } from "../lib/modules";

const HeroBanner = ({ image, filter, title }) => {
    return (
        <div className="w-full h-96 relative border border-grey">
            <div className="absolute w-full h-full">
                <Image
                    src={urlFor(image).url()}
                    alt={image.alt}
                    height={2000}
                    width={2000}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className={`relative h-full flex overflow-x-auto `}>
                <div className={`w-full ${filter ? 'mix-blend-color bg-pale-sky' : ''}`}>
                    <div className="h-full flex justify-center items-center">
                        <h1 className={`w-3/4 text-6xl font-bold ${filter ? 'text-white' : ''}`}>
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;