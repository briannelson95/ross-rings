import { client } from "../lib/sanity";
import { homepage } from "../lib/queries";
import SEO from '../components/SEO'
import { urlFor } from '../lib/modules'
import Footer from '../components/Footer'
import Grid from "../components/Grid";

import HeroBanner from "../components/HeroBanner";
import Hero from "../components/Hero";
import NewNav from "../components/NewNav";
import TextBox from "../components/TextBox";
import Testimonials from "../components/Testimonials";
import Slider from "../components/Slider";

export default function Home({ data }) {
    const pageData = data.pageData[0];
    const siteSettings = data.siteSettings;
    const products = pageData.featuredProducts
    const testimonials = data.testimonials;
    return (
        <>
            <SEO 
                title={`${data.siteSettings.title}`} 
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <main className="w-screen overflow-hidden relative">
                <Hero>
                    <div className="relative pt-4 lg:pt-8 z-20">
                        <NewNav
                            navigation={siteSettings.navigation}
                            logo={urlFor(siteSettings.logo).url()}
                        />
                    </div>
                    <div className="lg:mt-[-8em] my-2 px-10 mt-4">
                        <Slider 
                            images={pageData.imageCarousel}
                            buttonText={pageData.cta.title}
                            href={pageData.cta.url.slug.current}
                            autoScroll={pageData.autoScroll}
                        />
                    </div>
                </Hero>
                <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
                    <Grid
                        items={products}
                    />
                </section>
                
                <section className="w-screen h-72 lg:h-[450px]">
                    <HeroBanner 
                        image={data.process.image} 
                        filter={data.process.filter}
                    >
                        <div className="my-0 lg:my-4 lg:w-96 lg:h-96">
                            <TextBox 
                                text={data.process.excerpt} 
                                buttonText={'View our process'}
                                href={data.process.slug.current}
                                heading={data.process.title}
                            />
                        </div>
                    </HeroBanner>
                </section>
                <div className="mt-10 lg:hidden" />
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
                logo={urlFor(siteSettings.logo).url()}
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
