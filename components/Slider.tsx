import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

const Slider = ({ images }) => {
    const [current, setCurrent] = useState(0)
    const length = images.length;
    var autoScroll: boolean = true;
    let slideInterval;
    let intervalTime: number = 6000

    if (images.length < 2) {
        autoScroll = false
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
    }, [current])

    return (
        <div className='relative h-full flex justify-center items-center'>
            {images.length > 1 
                ? <div className='m-16 h-96 space-y-80'>
                    <IoMdArrowDropup onClick={prevSlide} size={20} />
                    <IoMdArrowDropdown onClick={nextSlide} size={20} />
                </div>
                : ''
            }
            {images.map((item, index) => { 
                return (
                    <div key={index} className={`ease-in-out duration-300 ${index === current ? 'active:opacity-100' : 'opacity-0'}`}>
                        {index === current && (
                            <div className='flex items-center justify-center'>
                                <div className='w-[603px] leading-[84px]'>
                                    <h1 className='text-[59px]'>
                                        {item.caption}
                                    </h1>
                                </div>
                                <Image
                                    src={item.asset.url}
                                    height={700}
                                    width={700}
                                    alt={item.alt}
                                    className='h-full'
                                />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider;