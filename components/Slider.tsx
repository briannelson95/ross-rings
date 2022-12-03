import Image from 'next/image';
import { urlFor } from '../lib/modules';

const Slider = ({ images }) => {
    return (
        <div className='ml-20'>
            {images.map((item, index) => (
                <div key={index}  className='absolute justify-self-center grid grid-cols-12'>
                    <Image
                        src={item.asset.url}
                        height={1000}
                        width={1000}
                        alt={item.alt}
                        className=' h-[960px] w-fit col-start-6 col-span-6'
                    />
                </div>
            ))}
        </div>
    )
}

export default Slider;