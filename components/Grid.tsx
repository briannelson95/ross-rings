import Image from 'next/image';
import { urlFor } from '../lib/modules';
import PriceTag from './PriceTag';

export default function Grid({ items }){
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {items.map((item, index) => (
                <>
                    <div
                        className="relative h-80 w-full lg:col-span-1 row-span-1 first:lg:col-start-1 first:col-span-2 first:row-span-2 first:h-full"
                        key={index}
                    >
                        <div className="absolute w-full h-full">
                                <Image
                                    src={urlFor(item.image).url()}
                                    alt={item.image.alt}
                                    height={2000}
                                    width={2000}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className={`relative h-full flex overflow-x-auto`}>
                                <div className={`w-full`}>
                                    <div className="h-full w-64 flex items-end pb-6">
                                        <PriceTag
                                            price={item.price}
                                            name={item.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                </>
            ))}
        </div>
    )
}