import React from 'react'
import { allPages } from '../lib/queries';
import { client } from '../lib/sanity';
import { urlFor } from '../lib/modules';
import Navbar from '../components/Navbar';
import NewNav from '../components/NewNav';
import HeroBanner from '../components/HeroBanner';
import {PortableText} from '@portabletext/react'
import TextComponent, { RichTextComponent } from "../components/TextComponent";
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Page({ data }) {
    const pageData = data.pageData;
    const textRepeater = pageData.textRepeater;
    // console.log(pageData)
    const siteSettings = data.siteSettings;
    let seo = pageData.seo;
    return (
        <>
            <SEO 
                title={seo ? seo.title : `${pageData.title} - ${siteSettings.title}`} 
                description={seo ? seo.description : siteSettings.description}
                image={seo ? seo.image : siteSettings.image}
                icon={urlFor(siteSettings.seo.icon).url()}  
            />
            <main>
                <section className="w-screen relative pt-4 lg:pt-8 lg:mb-16">
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
                <section className="px-10 2xl:mx-52 lg:mx-10 lg:p-8 lg:text-2xl">
                    <div className='flex justify-center my-4'>
                        <h2 className='lg:text-3xl 2xl:text-6xl text-pale-sky lg:leading-[84px] text-center'>{pageData.featuredTitle}</h2>
                    </div>
                    <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24 lg:mt-10'>
                        <PortableText value={pageData.content} components={RichTextComponent} />
                        {/* {textRepeater ? 
                            textRepeater.map((item, index) => (
                                <div key={index} className=''>
                                    {item.text ? 
                                        <p className='lg:text-2xl'>{item.text}</p>
                                        : <div className=''>
                                            <Image src={urlFor(item.asset).url()} height={1000} width={1000} className='object-cover' alt={item.alt ? item.alt : ''} />
                                        </div>
                                    }
                                </div>
                            )) :
                            <TextComponent text={pageData.content} /> 
                        } */}
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

// export async function getStaticPaths() {
//     // When this is true (in preview environments) don't
//     // prerender any static pages
//     // (faster builds, but slower initial page load)
//     if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//       return {
//         paths: [],
//         fallback: 'blocking',
//       }
//     }
  
//     // Call an external API endpoint to get posts
//     const res = await client.fetch(allPages)
//     const pages = await res.json()
  
//     // Get the paths we want to prerender based on posts
//     // In production environments, prerender all pages
//     // (slower builds, but faster initial page load)
//     const paths = pages.map((page) => ({
//       params: { id: page.id },
//     }))
  
//     // { fallback: false } means other routes should 404
//     return { paths, fallback: false }
// }

export async function getServerSideProps(context) {
    const { res, query } = context;
    const { slug = "" } = query;

    const data = await client.fetch(allPages, { slug });

    if (!data) {
        res.statusCode = 404;
        return {
            notFound: true,
            props: {},
        };
    }

    return { props: { data } };
};