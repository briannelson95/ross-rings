import InstagramFeed from "../components/Instagram";
import Slider from "../components/Slider";
// import TextComponent from "../components/TextComponent";
import {PortableText} from '@portabletext/react'
import { RichTextComponent } from "../components/TextComponent";
import { about, homepage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function test({ data }) {
    const pageData = data.pageData[0];
    // const mobile = data.siteSettings.favicon;
    // const siteSettings = data.siteSettings;
    // const products = pageData.featuredProducts
    // const testimonials = data.testimonials;
    return (
        <>
            <section className="px-10 2xl:mx-52 lg:mx-10 lg:p-8">
                <PortableText value={pageData.content} components={RichTextComponent} />
            </section>
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
