import React from 'react'
import { allPages } from '../lib/queries';
import { client } from '../lib/sanity';
import SEO from '../components/SEO';
import { urlFor } from '../lib/modules';
import Navbar from '../components/Navbar';

export default function Page({ data }) {
    console.log(data);
    const pageData = data.pageData;
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
            <main>
                <h1 className='text-2xl font-medium'>{pageData.title}</h1>
            </main>
        </>
    )
}

export const getServerSideProps = async function (context) {
    const { slug = "" } = context.query;
  
    const data = await client.fetch(allPages, { slug });
    return { props: { data } };
};