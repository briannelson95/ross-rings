import HeroBanner from "../components/HeroBanner";
import NewNav from "../components/NewNav";
import SEO from "../components/SEO";
import TextComponent from "../components/TextComponent";
import { urlFor } from "../lib/modules";
import { about } from "../lib/queries";
import { client } from "../lib/sanity";

export default function About({ data }) {
    let pageData = data.pageData[0];
    let siteSettings = data.siteSettings;
    console.log(pageData);
    return (
        <>
            <main>
                <section className="h-full w-full relative pt-8 lg:mb-16">
                    <NewNav
                        navigation={siteSettings.navigation}
                        logo={urlFor(siteSettings.logo).url()}
                        
                    />
                </section>
                <section className='w-screen lg:h-[450px]'>
                    <HeroBanner
                        image={pageData.image}
                        title={pageData.title}
                        filter={pageData.filter}
                    >
                    </HeroBanner>
                </section>
                <section className="px-10 2xl:mx-52 lg:mx-10 lg:p-8">
                    <div className='mt-32 grid grid-cols-2 gap-4'>
                        <TextComponent text={pageData.content} />
                    </div>
                </section>
            </main>
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
