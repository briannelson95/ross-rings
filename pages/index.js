import { client } from "../lib/sanity";
import { homepage } from "../lib/queries";
import SEO from '../components/SEO'
import Image from "next/image";
import { urlFor } from '../lib/modules'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Button from '../components/Button';
import Link from 'next/link';
import TextComponent from '../components/TextComponent';
import SmallGridProducts from '../components/SmallGridProducts';
import Grid from "../components/Grid";

import HeroBanner from "../components/HeroBanner";
import Hero from "../components/Hero";
import NewNav from "../components/NewNav";

export default function Home({ data }) {
    const pageData = data.pageData[0];
    const mobile = data.siteSettings.favicon;
    const siteSettings = data.siteSettings;
    const products = pageData.featuredProducts
    console.log(products)
    return (
        <>
            <SEO 
                title={`${data.siteSettings.title}`} 
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <section className="h-screen w-screen relative">
                <Hero />
                <div className="pt-8" />
                <NewNav
                    navigation={siteSettings.navigation}
                    logo={urlFor(siteSettings.logo).url()}
                    
                />
            </section>
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
                <section className="my-2 px-10 2xl:mx-52">
                    <TextComponent 
                        text={pageData.content}
                    />
                    <div 
                        className={
                            `mt-3 grid grid-cols-2 gap-2 xl:gap-4
                            ${products.length <= 3 
                                ? 'xl:flex xl:justify-center xl:grid-cols-3' 
                                : 'xl:grid-cols-4'
                            }`
                        }
                    >
                        {products.map((item, index) => (
                            <SmallGridProducts
                                key={index}
                                href={item.slug.current}
                                image={item.image}
                            />
                        ))}
                    </div>
                </section>
                <section className="my-2 px-10 2xl:mx-52">
                    <Grid
                        items={products}
                    />
                </section>
                <HeroBanner 
                    image={pageData.hero.image} 
                    filter={true}
                    title="Hello World"
                />
                <Footer
                    navigation={siteSettings.navigation}
                />
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
