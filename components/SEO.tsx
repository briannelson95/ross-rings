import Head from "next/head";
import { urlFor } from "../lib/modules";

interface SeoProps {
    title: string,
    icon: string,
    description?: string,
    image?: string
}

const SEO = (Props: SeoProps) => {
    return ( 
        <Head>
            <title>{Props.title}</title>
            <link rel="icon" href={Props.icon} />
            <meta name="title" content={Props.title} />
            <meta name="description" content={Props.description} />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#B8C9D1" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#B8C9D1" />
            <meta name="theme-color" content="#B8C9D1" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
            <meta property="og:title" content={Props.title} />
            <meta property="og:description" content={Props.description} />
            <meta property="og:image" content={Props.image ? urlFor(Props.image).url() : process.env.NEXT_PUBLIC_URL + 'RossRings-Icon.PNG'} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
            <meta property="twitter:title" content={Props.title} />
            <meta property="twitter:description" content={Props.description} />
            <meta property="twitter:image" content={Props.image ? urlFor(Props.image).url() : process.env.NEXT_PUBLIC_URL + 'RossRings-Icon.PNG'} />
        </Head>
    );
}
 
export default SEO;