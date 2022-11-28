import Image from "next/image";
import { urlFor } from "../lib/modules";

const HeroBanner = ({ image, filter, title }) => {
    return (
        <div className="w-full h-96 relative">
            <div className="absolute w-full h-full">
                <Image
                    src={urlFor(image).url()}
                    alt={image.alt}
                    height={2000}
                    width={2000}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className={`relative h-full flex overflow-x-auto ${filter ? 'backdrop-filter backdrop-grayscale' : ''}`}>
                <div className={`w-full ${filter ? 'bg-light-blue-900 bg-opacity-50' : ''}`}>
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