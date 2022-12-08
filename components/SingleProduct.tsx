import Image from "next/image";
import { urlFor } from "../lib/modules";
import Button from "./Button";
import TextComponent from "./TextComponent";

const SingleProduct = ({ image, price, title, description, href }) => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square">
                <Image
                    src={urlFor(image).url()}
                    alt={image.alt}
                    height={1500}
                    width={1500}
                    className='object-cover h-full w-full'
                />
            </div>
            <div className="text-finlandia">
                <h1 className="text-6xl">
                    {title}
                </h1>
                <p className="text-4xl my-10">${price.toFixed(2)}</p>
                <div className="mb-10">
                    {description ? 
                        <TextComponent text={description} /> 
                        : 
                        <>No description about this product yet.</>
                    }
                </div>
                <Button href={href} text="Buy on Etsy" color={true} />
            </div>
        </div>
    )
}

export default SingleProduct;