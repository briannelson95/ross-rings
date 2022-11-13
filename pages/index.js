import { client } from "../lib/sanity";
import { homepage } from "../lib/queries";
import SEO from '../components/SEO'
import Image from "next/image";
import { urlFor } from '../lib/modules'
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Link from 'next/link';
import TextComponent from '../components/TextComponent';
import SmallGridProducts from '../components/SmallGridProducts';

export default function Home({ data }) {
    const pageData = data.pageData[0];
    const mobile = data.siteSettings.favicon;
    const siteSettings = data.siteSettings;
    const products = pageData.featuredProducts  



    console.log(mobile)
    return (
        <>
            <SEO 
                title={`${data.siteSettings.title}`} 
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <Navbar
                mobileMenu={mobile}
                navigation={siteSettings.navigation}
                logo={urlFor(siteSettings.logo).url()}
            />
            <main className="w-screen overflow-hidden">
                <section className="h-[500px] bg-250% bg-center xl:bg-cover xl:h-[550px] xl:bg-center 2xl:h-[750px] text-center" style={{backgroundImage: `url(${urlFor(pageData.hero.image).url()})`}}>
                    <div className="h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
                        <h1 className="text-4xl">{pageData.hero.tagline}</h1>
                        <p className="font-sans">{pageData.hero.mainContent}</p>
                        <Button 
                            text={pageData.hero.cta.title}
                            href={pageData.hero.cta.url.slug.current}
                        />
                    </div>
                </section>
                <section className="my-2 px-10">
                    <TextComponent 
                        text={pageData.content}
                    />
                    <div className="mt-3 grid grid-cols-2 gap-2 xl:grid-cols-4 xl:gap-4">
                        {products.map((item, index) => (
                            <SmallGridProducts
                                key={index}
                                href={item.slug.current}
                                image={item.image}
                                // alt={item.image.alt}
                            />
                        ))}
                    </div>
                </section>
                {/* <div className="grid grid-cols-1 my-4 gap-4 xl:grid-cols-5">
                    <div className="col-span-1 xl:col-span-2">
                        <h1 className="text-2xl font-medium mb-2">{pageData.hero.tagline}</h1>
                        <Button
                            text={pageData.hero.cta.title}
                            href={pageData.hero.cta.url.current}
                        />
                    </div>
                    <div className='col-span-1 xl:col-span-3 w-full h-60 rounded-xl xl:h-[85vh]' style={{backgroundImage: `url(${urlFor(pageData.hero.image).url()})`, backgroundSize: 'cover'}}>
                        <Image
                            src={urlFor(pageData.hero.image).url()}
                            height={100}
                            width={100}
                            className='w-100'
                        />
                    </div>
                </div> */}
            </main>
        </>
    )
}

export async function getServerSideProps() {
    const data = await client.fetch(homepage)
  
    return {
        props: {
            data
        }
    }
}
