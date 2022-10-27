import { client } from "../lib/sanity";
import { homepage } from "../lib/queries";
import SEO from '../components/SEO'
import Image from "next/image";
import { urlFor } from '../lib/modules'
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Link from 'next/link';

export default function Home({ data }) {
    // console.log(data)
    const pageData = data.pageData[0];
    const mobile = data.siteSettings.mobileMenu;
    const siteSettings = data.siteSettings;
    
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
            <main className="h-screen w-screen overflow-hidden p-4">
                <div className="flex justify-center items-center my-4 md:grid md:grid-cols-5 md:gap-4 h-[85vh]">
                    <div className="md:col-span-2">
                        <h1 className="text-2xl font-medium mb-2">{pageData.hero.tagline}</h1>
                        <Button
                            text={pageData.hero.cta.title}
                            href={pageData.hero.cta.url.current}
                        />
                    </div>
                    <div className='md:col-span-3 w-full h-full rounded-xl' style={{backgroundImage: `url(${urlFor(pageData.hero.image).url()})`, backgroundSize: 'cover'}}>
                        {/* <Image
                            src={urlFor(pageData.hero.image).url()}
                            height={100}
                            width={100}
                            className='w-100'
                        /> */}
                    </div>
                </div>
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