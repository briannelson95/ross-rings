import InstagramFeed from "../components/Instagram";
import Slider from "../components/Slider";
import TextComponent from "../components/TextComponent";
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
                <div className='mt-32 grid grid-cols-1 lg:grid-cols-5 gap-32 h-64'>
                    <div className="col-span-3">
                        <TextComponent text={pageData.content} />
                    </div>
                </div>
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
