import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import NewNav from "../components/NewNav";
import SEO from "../components/SEO";
import { urlFor } from "../lib/modules";
import { about } from "../lib/queries";
import { client } from "../lib/sanity";
import Image from "next/image";
import {PortableText} from '@portabletext/react'
import TextComponent, { RichTextComponent } from "../components/TextComponent";
import Instagram from "../components/Instagram";

export default function About({ data, images }) {
    let pageData = data.pageData[0];
    let textRepeater = pageData.textRepeater;
    let siteSettings = data.siteSettings;
    // console.log(siteSettings);
    // let imgArr = images.slice(0,5)
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
                <section className="px-10 2xl:mx-52 lg:mx-10 lg:p-8 my-6 lg:text-2xl">
                    <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24 lg:mt-10'>
                        {/* {textRepeater ? 
                            textRepeater.map((item, index) => (
                                <div key={index} className=''>
                                    {item.text ? 
                                        <p className="lg:text-2xl">{item.text}</p>
                                        : <div className="">
                                            <Image src={urlFor(item.asset).url()} height={1000} width={1000} className='h-[450px] object-cover' alt={item.alt ? item.alt : ''} />
                                        </div>
                                    }
                                </div>
                            )) :
                            // <TextComponent text={} />
                            <TextComponent text={pageData.content} />                      
                        } */}
                        <PortableText value={pageData.content} components={RichTextComponent} />
                    </div>
                    
                </section>
                <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
                    <Instagram items={data.social[1].imageCarousel} />
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

    // const url = `https://graph.instagram.com/me/media?fields=media_url,permalink,media_type&access_token=${process.env.INSTAGRAM_TOKEN}`
    // const igData = await fetch(url)
    // const feed = await igData.json()

    // const images = feed.data.filter(function (obj) {
    //     return obj.media_type === "IMAGE";
    // });
  
    return {
        props: {
            data,
            // images
        }
    }
}
