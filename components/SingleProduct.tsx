import Image from "next/image";
import { urlFor } from "../lib/modules";
import Button from "./Button";
import {PortableText} from '@portabletext/react'
import { RichTextComponent } from "../components/TextComponent";

const SingleProduct = ({ image, price, title, description, href }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <h1 className="text-3xl lg:text-6xl ">
                    {title}
                </h1>
                <p className="text-4xl mt-6 lg:my-10">${price.toFixed(2)}</p>
                <div className="lg:mb-10">
                    {description ? 
                        <PortableText value={description} components={RichTextComponent} /> 
                        : 
                        <>No description about this product yet.</>
                    }
                </div>
                <div className="flex justify-center lg:justify-start">
                    <Button href={href} text="Buy on Etsy" color={true} />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
