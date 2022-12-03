import Head from "next/head";
import { urlFor } from "../lib/modules";

const SEO = ({ title, icon, description, image }) => {
    return ( 
        <Head>
            <title>{title}</title>
            <link rel="icon" href={icon} />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#B8C9D1" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#B8C9D1" />
            <meta name="theme-color" content="#B8C9D1" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image ? urlFor(image).url() : process.env.NEXT_PUBLIC_URL + 'RossRings-Icon.PNG'} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image ? urlFor(image).url() : process.env.NEXT_PUBLIC_URL + 'RossRings-Icon.PNG'} />
        </Head>
    );
}
 
export default SEO;