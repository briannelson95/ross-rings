import Image from "next/image";
import { urlFor } from "../lib/modules";

const HeroBanner = ({ image, filter, title, children }) => {
    return (
        <div className={`w-full h-full relative border border-grey`}>
            <div className="absolute w-full h-full">
                <Image
                    src={urlFor(image).url()}
                    alt={image.alt}
                    height={2000}
                    width={2000}
                    className={`w-full h-full object-cover`}
                />
            </div>
            <div className={`relative h-full flex overflow-x-auto`}>
                <div className={`w-full ${filter ? 'mix-blend-color bg-pale-sky' : ''}`}>
                    <div className="h-full flex justify-center items-center" />
                </div>
                <div className="px-10 2xl:mx-52 absolute h-full flex items-center">
                    {title 
                        ?  <h1 className={`lg:text-[112px] 2xl:text-[133px] ${filter ? 'text-white' : ''}`}>{title}</h1>
                        : children}
                </div>
            </div>
            
        </div>
    )
}

export default HeroBanner;
