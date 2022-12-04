import Slider from "../components/Slider";
import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function test({ data }) {
    const pageData = data.pageData[0];
    const mobile = data.siteSettings.favicon;
    const siteSettings = data.siteSettings;
    const products = pageData.featuredProducts
    const testimonials = data.testimonials;
    return (
        <>
            <Slider 
                images={pageData.imageCarousel}
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
