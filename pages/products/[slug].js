import Image from "next/image";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import { urlFor } from "../../lib/modules";
import { product } from "../../lib/queries";
import { client } from "../../lib/sanity";

export default function Page({ data }) {
    console.log(data);
    const productData = data.productData;
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
            <main>
                <h1 className='text-2xl font-medium'>{productData.title}</h1>
                <Image
                    src={urlFor(productData.image).url()}
                    height={100}
                    width={100}
                    alt={productData.image.alt}
                />
            </main>
        </>
    )
}

export const getServerSideProps = async function (context) {
    const { slug = "" } = context.query;
  
    const data = await client.fetch(product, { slug });
    return { props: { data } };
};