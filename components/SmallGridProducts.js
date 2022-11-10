import Link from "next/link";
import { urlFor } from "../lib/modules";

const SmallGridProducts = ({ href, image }) => {
    return (
        <>
            <div className="flex justify-center">
                <Link
                    href={`products/${href}`}
                >
                    <div className='bg-cover rounded-md h-32 w-32' style={{backgroundImage: `url(${urlFor(image).url()})`}} />
                </Link>
            </div>
        </>
    )
}

export default SmallGridProducts;