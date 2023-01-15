import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import NewNav from "../../components/NewNav";
import SingleProduct from "../../components/SingleProduct";
import SEO from "../../components/SEO";
import { urlFor } from "../../lib/modules";
import { product } from "../../lib/queries";
import { client } from "../../lib/sanity";
import { HiArrowCircleRight, HiArrowCircleLeft, HiX } from "react-icons/hi";
import { useSwipeable } from 'react-swipeable';

export default function Page({ data }) {
    const productData = data.productData;
    const relatedImages = productData.gallery;
    const mobile = data.siteSettings.favicon;
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
                title={`${data.siteSettings.title}`} 
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <main className="w-screen overflow-hidden relative">
                <section className="h-full w-full relative pt-4 lg:pt-8 lg:mb-16">
                    <NewNav
                        navigation={siteSettings.navigation}
                        logo={urlFor(siteSettings.logo).url()}
                        
                    />
                </section>
                {lightboxDisplay ?
                    <div {...swipeHandlers} className="z-1 fixed top-0 left-0 w-screen h-screen flex items-center justify-center md:justify-between bg-black/75" >
                        <div className="absolute top-5 right-4 text-white text-3xl" onClick={hideLightbox}><HiX height={40} width={40} /></div>
                        <button onClick={showPrev} className='hidden md:block md:mx-4 md:text-5xl'>
                            <HiArrowCircleLeft width={20} height={20} className='text-light-blue-100' />
                        </button>
                        <Image src={urlFor(imagesToShow).url()} width={1000} height={1000} className='w-7/8 md:w-3/4' />
                        <button onClick={showNext} className='hidden md:block md:mx-4 md:text-5xl'>
                            <HiArrowCircleRight width={20} height={20} className='text-light-blue-100' />
                        </button>
                    </div>
                : ''}
                <div className="my-6 lg:my-24" />
                <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
                    <SingleProduct
                        title={productData.title}
                        image={productData.image}
                        price={productData.price}
                        description={productData.description}
                        href={productData.link}
                    />
                </section>
                <section className="my-4 px-10 2xl:mx-52 lg:m-10 lg:px-8">
                    {relatedImages != undefined ? (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {relatedImages.map((item, index) => (
                                <div className="aspect-square overflow-hidden" key={index}>
                                    <Image
                                        src={urlFor(item.asset._ref).url()}
                                        width={1000}
                                        height={1000}
                                        onClick={() => showImage(item)}
                                        className='object-cover h-full w-full transition ease-in-out duration-300 hover:scale-110'
                                    />
                                </div>
                            ))}
                        </div>
                    ) : <></>}
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