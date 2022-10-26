import Head from "next/head";

const SEO = ({ title, icon }) => {
    return ( 
        <Head>
            <title>{title}</title>
            <link rel="icon" href={icon} />
        </Head>
    );
}
 
export default SEO;