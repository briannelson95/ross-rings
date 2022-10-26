import { client } from "../lib/sanity";
import { homepage } from "../lib/queries";
import SEO from '../components/SEO'
import Image from "next/image";
import { urlFor } from '../lib/modules'


export default function Home({ data }) {
    // console.log(data)
    const pageData = data.pageData[0]
    console.log(urlFor(data.siteSettings.logo).url)
    return (
        <>
            <SEO 
                title={`${pageData.title} - ${data.siteSettings.title}`} 
            />
            <main>
                <Image 
                    src={urlFor(data.siteSettings.logo).url()}
                    width={532}
                    height={287}
                    className="w-40"
                />
                <h1 className="text-2xl font-bold">{data.siteSettings.title}</h1>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(homepage)
  
    return {
        props: {
            data
        }
    }
}