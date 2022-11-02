import Image from "next/image";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import { urlFor } from "../../lib/modules";
import { product } from "../../lib/queries";
import { client } from "../../lib/sanity";

export default function Page({ data }) {
    // console.log(data);
    const productData = data.productData;
    const relatedImages = productData.gallery;
    console.log(relatedImages)
    const mobile = data.siteSettings.mobileMenu;
    const siteSettings = data.siteSettings;
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
                <section className="grid grid-cols-1 md:grid-cols-5 md:w-3/4">
                    <div className="span-cols-1 md:col-span-2">
                        <h1 className='text-3xl font-bold'>{productData.title}</h1>
                        <p className="font-sans font-light">{productData.type}</p>
                        <div className="flex">
                            {relatedImages.map((index, item) => (
                                <Image
                                    key={index}
                                    src={urlFor(item.image)}
                                    width={100}
                                    height={100}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-3 p-5 border border-light-blue-300 rounded-lg">
                        <Image
                            src={urlFor(productData.image).url()}
                            height={1000}
                            width={1000}
                            alt={productData.image.alt}
                            className="w-full rounded-md"
                        />
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