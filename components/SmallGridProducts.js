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
                    <div className='bg-cover rounded-md w-[151px] h-[151px] xl:w-72 xl:h-72' style={{backgroundImage: `url(${urlFor(image).url()})`}} />
                </Link>
            </div>
        </>
    )
}

export default SmallGridProducts;