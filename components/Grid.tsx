import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/modules';
import PriceTag from './PriceTag';

export default function Grid({ items }){
    return (
        <div className="productsRow grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {items.map((item, index) => (
                <>
                    <Link
                        className="relative h-72 w-full col-span-1 lg:col-span-1 row-span-1 first:lg:col-start-1 lg:first:col-span-2 lg:first:row-span-2 lg:first:h-full"
                        key={index}
                        href={`/my-work/${item.slug.current}`}
                    >
                        <div className="absolute w-full h-full overflow-hidden">
                            <Image
                                src={urlFor(item.image).url()}
                                alt={item.image.alt}
                                height={2000}
                                width={2000}
                                className='w-full h-full object-cover transition ease-in-out duration-300 hover:scale-110'
                            />
                        </div>
                        <div className={`relative h-full flex overflow-x-auto`}>
                            <div className={`w-full`}>
                                <div className="h-full w-3/4 flex items-end pb-6">
                                    <PriceTag
                                        price={item.price}
                                        name={item.title}
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </>
            ))}
        </div>
    )
}