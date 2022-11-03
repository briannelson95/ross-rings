import React, { useState } from 'react'
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

export default function LightBox({ image, relatedImages, }) {
    const [lightboxDisplay, setLighboxDisplay] = useState(false);
    const [imagesToShow, setImagestoShow] =useState('');

    const showImage = (image) => {
        setImagestoShow(image)
        setLighboxDisplay(true)
    }

    const hideLightbox = () => {
        setLighboxDisplay(false);
    }

    const showNext = (e) => {
        e.stopPropagation()
        let currentIndex = relatedImages.indexOf(imagesToShow)
        if(currentIndex >= relatedImages.length - 1) {
            setLighboxDisplay(false)
        }
        else {
            let nextImage = relatedImages[currentIndex + 1]
            setImagestoShow(nextImage)
        }
    }

    const showPrev = (e) => {
        e.stopPropagation()
        let currentIndex = relatedImages.indexOf(imagesToShow)
          if(currentIndex <= 0) {
          setLighboxDisplay(false)
        }
        else {
          let nextImage = relatedImages[currentIndex - 1]
          setImagestoShow(nextImage)
        }
    }

    return (
        <>
            {lightboxDisplay ?
                <div className="z-1 fixed top-0 left-0 w-screen h-screen flex items-center justify-between bg-black/50" onClick={hideLightbox}>
                    <button onClick={showPrev} className='mx-4'><HiArrowCircleLeft width={20} height={20} className='text-light-blue-100' /></button>
                    <Image src={urlFor(imagesToShow).url()} width={1000} height={1000} className='w-3/4' />
                    <button onClick={showNext} className='mx-4'><HiArrowCircleRight width={20} height={20} className='text-light-blue-100' /></button>
                </div>
            : ''}
        </>
    )
}
