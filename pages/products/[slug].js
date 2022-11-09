import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import { urlFor } from "../../lib/modules";
import { product } from "../../lib/queries";
import { client } from "../../lib/sanity";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import { useSwipeable } from 'react-swipeable';

export default function Page({ data }) {
    const productData = data.productData;
    const relatedImages = productData.gallery;
    const mobile = data.siteSettings.mobileMenu;
    const siteSettings = data.siteSettings;

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
        // e.stopPropagation()
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
        // e.stopPropagation()
        let currentIndex = relatedImages.indexOf(imagesToShow)
          if(currentIndex <= 0) {
          setLighboxDisplay(false)
        }
        else {
          let nextImage = relatedImages[currentIndex - 1]
          setImagestoShow(nextImage)
        }
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => showNext(),
        onSwipedRight: () => showPrev(),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true

    })

    return (
        <>
            <SEO 
                title={`${productData.title} - ${data.siteSettings.title}`} 
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <Navbar
                mobileMenu={mobile}
                navigation={siteSettings.navigation}
                logo={urlFor(siteSettings.logo).url()}
            />
            <main className="p-4 flex justify-center">
                {lightboxDisplay ?
                    <div {...swipeHandlers} className="z-1 fixed top-0 left-0 w-screen h-screen flex items-center justify-center md:justify-between bg-black/75" onClick={hideLightbox}>
                        <button onClick={showPrev} className='hidden md:block md:mx-4 md:text-5xl'>
                            <HiArrowCircleLeft width={20} height={20} className='text-light-blue-100' />
                        </button>
                        <Image src={urlFor(imagesToShow).url()} width={1000} height={1000} className='w-7/8 md:w-3/4' />
                        <button onClick={showNext} className='hidden md:block md:mx-4 md:text-5xl'>
                            <HiArrowCircleRight width={20} height={20} className='text-light-blue-100' />
                        </button>
                    </div>
                : ''}
                <section className="grid grid-cols-1 gap-4 md:grid-cols-4 md:w-3/4">
                    <div className="md:col-span-2 p-5 border border-light-blue-300 rounded-lg">
                        <Image
                            src={urlFor(productData.image).url()}
                            height={1000}
                            width={1000}
                            alt={productData.image.alt}
                            className="w-full rounded-md"
                        />
                    </div>
                    <div className="span-cols-1 md:col-span-2 md:pl-5">
                        <h1 className='text-3xl font-bold'>{productData.title}</h1>
                        <p className="font-sans font-light">Type: {productData.type}</p>
                        <p className="text-2xl font-bold">${productData.price}.00</p>
                        {relatedImages != undefined ? (
                            <div className="flex">
                                {relatedImages.map((item, index) => (
                                    <div key={index}>
                                        <Image
                                            src={urlFor(item.asset._ref).url()}
                                            width={100}
                                            height={100}
                                            onClick={() => showImage(item)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : <></>}
                       
                    </div>
                </section>
            </main>
        </>
    )
}

export const getServerSideProps = async function (context) {
    const { slug = "" } = context.query;
  
    const data = await client.fetch(product, { slug });
    return { props: { data } };
};