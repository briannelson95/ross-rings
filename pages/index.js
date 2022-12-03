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
import TextBox from "../components/TextBox";
import Testimonials from "../components/Testimonials";
import Slider from "../components/Slider";

export default function Home({ data }) {
    const pageData = data.pageData[0];
    const mobile = data.siteSettings.favicon;
    const siteSettings = data.siteSettings;
    const products = pageData.featuredProducts
    const testimonials = data.testimonials;
    return (
        <>
            <SEO 
                title={`${data.siteSettings.title}`} 
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <main className="w-screen overflow-hidden">
                <section className="h-screen relative overflow-hidden">
                    <Hero />
                    <div className="pt-8" />
                    <NewNav
                        navigation={siteSettings.navigation}
                        logo={urlFor(siteSettings.logo).url()}
                        
                    />
                    <Slider 
                        images={pageData.imageCarousel}
                    />
                </section>
                <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
                    <Grid
                        items={products}
                    />
                </section>
                <section className="w-screen lg:h-[450px]">
                    <HeroBanner 
                        // image={pageData.hero.image} 
                        // filter={true}
                    >
                        <div className="lg:my-4 lg:mx-10 lg:px-8 lg:w-96 lg:h-96">
                            <TextBox 
                                text={pageData.content} 
                                buttonText={'View our process'}
                                href={'/'}
                            />
                        </div>
                    </HeroBanner>
                </section>
                <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
                    <Testimonials testimonials={testimonials} />
                </section>
                <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
                    <Grid
                        items={products}
                    />
                </section>
        
                
            </main>
            <Footer
                navigation={siteSettings.navigation}
            />
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
