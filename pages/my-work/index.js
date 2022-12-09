import React from 'react'
import { client } from "../../lib/sanity";
import { allProducts } from "../../lib/queries";
import SEO from '../../components/SEO'
import Image from "next/image";
import { urlFor } from '../../lib/modules'
import Navbar from '../../components/Navbar';
import NewNav from "../../components/NewNav";
import Button from '../../components/Button';
import Link from 'next/link';
import Product from '../../components/Product';
import TextComponent from '../../components/TextComponent'
import Grid from "../../components/Grid";
import Footer from "../../components/Footer";

export default function Products({ data }) {
  const pageData = data.pageData[0];
  const mobile = data.siteSettings.favicon;
  const siteSettings = data.siteSettings;
  const products = data.products;
  let seo = pageData.seo;

  return (
    <>
      <SEO 
        title={seo ? seo.title : `${pageData.title} - ${siteSettings.title}`} 
        description={seo ? seo.description : siteSettings.description}
        image={seo ? seo.image : siteSettings.image}
        icon={urlFor(siteSettings.seo.icon).url()}  
      />
      <main className=''>
        <section className="h-full w-full relative pt-4 lg:pt-8 lg:mb-16">
          <NewNav
              navigation={siteSettings.navigation}
              logo={urlFor(siteSettings.logo).url()}
              
          />
        </section>
        <section className='text-center my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8'>
          <h1 className='text-6xl text-finlandia mb-14'>{pageData.title}</h1>
          <h2 className='lg:text-3xl text-pale-sky leading-[84px] text-center'>{pageData.featuredTitle}</h2>
        </section>
        <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
          <Grid
              items={products}
          />
        </section>
        <Footer
          navigation={siteSettings.navigation}
          logo={urlFor(siteSettings.logo).url()}
        />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(allProducts)

  return {
      props: {
          data
      }
  }
}
