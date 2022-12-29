import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import NewNav from "../components/NewNav";
import SEO from "../components/SEO";
import TextComponent from "../components/TextComponent";
import { urlFor } from "../lib/modules";
import { about } from "../lib/queries";
import { client } from "../lib/sanity";
import Image from "next/image";
import Grid from "../components/Grid";

export default function About({ data }) {
    let pageData = data.pageData[0];
    let textRepeater = pageData.textRepeater;
    let siteSettings = data.siteSettings;
    // console.log(siteSettings);
    return (
        <>
            <main>
                <section className="h-full w-full relative pt-4 lg:pt-8 lg:mb-16">
                    <NewNav
                        navigation={siteSettings.navigation}
                        logo={urlFor(siteSettings.logo).url()}
                        
                    />
                </section>
                <section className='w-screen h-72 lg:h-[450px]'>
                    <HeroBanner
                        image={pageData.image}
                        title={pageData.title}
                        filter={pageData.filter}
                    >
                    </HeroBanner>
                </section>
                <section className="px-10 2xl:mx-52 lg:mx-10 lg:p-8 my-6">
                    <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24 lg:mt-10'>
                        {textRepeater ? 
                            textRepeater.map((item, index) => (
                                <div key={index} className=''>
                                    {item.text ? 
                                        <p className="lg:text-2xl">{item.text}</p>
                                        : <div className="aspect-[4/5]">
                                            <Image src={urlFor(item.asset).url()} height={1000} width={1000} className='h-[450px] object-cover' alt={item.alt ? item.alt : ''} />
                                        </div>
                                    }
                                </div>
                            )) :
                            <TextComponent text={pageData.content} />
                        }
                    </div>
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
    const data = await client.fetch(about)
  
    return {
        props: {
            data
        }
    }
}
