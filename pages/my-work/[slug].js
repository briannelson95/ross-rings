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
    console.log(productData)
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
                title={`${data.siteSettings.title}`} 
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <main className="w-screen overflow-hidden relative">
                <section className="h-full w-full relative pt-8 lg:mb-16">
                    <NewNav
                        navigation={siteSettings.navigation}
                        logo={urlFor(siteSettings.logo).url()}
                        
                    />
                </section>
                <div className="my-24" />
                <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
                    <SingleProduct
                        title={productData.title}
                        image={productData.image}
                        price={productData.price}
                        description={productData.description}
                        href={productData.link}
                    />
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