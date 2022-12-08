import Image from "next/image";
import { urlFor } from "../lib/modules";

type ImageType = {
    src: string;
    alt: string;
}

interface BannerProps {
    image: ImageType;
    filter?: boolean;
    title: string;
    children?: any;
}

const HeroBanner = (Props: BannerProps) => {
    return (
        <div className={`w-full h-full relative border border-grey`}>
            <div className="absolute w-full h-full">
                {Props.image 
                    ? <Image
                        src={urlFor(Props.image).url()}
                        alt={Props.image.alt}
                        height={2000}
                        width={2000}
                        className={`w-full h-full object-cover`}
                    />
                    : <div className="bg-heather-800" />
                }
            </div>
            <div className={`relative h-full flex overflow-x-auto`}>
                <div className={`w-full ${Props.filter ? 'mix-blend-color bg-pale-sky' : 'bg-black bg-opacity-30'}`}>
                    <div className="h-full flex justify-center items-center" />
                </div>
                <div className="px-10 2xl:mx-52 absolute h-full flex items-center">
                    {Props.title 
                        ?  <h1 className={`lg:text-[112px] 2xl:text-[133px] ${Props.filter ? 'text-white' : 'text-white'}`}>{Props.title}</h1>
                        : Props.children}
                </div>
            </div>
            
        </div>
    )
}

export default HeroBanner;
