import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/modules";

const SmallGridProducts = ({ href, image, alt }) => {
    return (
        <>
            <div className="">
                <Link
                    href={`my-work/${href}`}
                >
                    {/* <Image
                        src={urlFor(image).url()}
                        height={200}
                        width={200}
                        className='w-fit h-fit'
                        // alt={alt}
                    /> */}
                    <div className='bg-cover rounded-md w-36 h-36 xl:w-72 xl:h-72' style={{backgroundImage: `url(${urlFor(image).url()})`}} />
                </Link>
            </div>
        </>
    )
}

export default SmallGridProducts;