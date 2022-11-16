import React from 'react'
import { client } from "../../lib/sanity";
import { allProducts } from "../../lib/queries";
import SEO from '../../components/SEO'
import Image from "next/image";
import { urlFor } from '../../lib/modules'
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Link from 'next/link';
import Product from '../../components/Product';
import TextComponent from '../../components/TextComponent'

export default function Products({ data }) {
  const pageData = data.pageData[0];
  const mobile = data.siteSettings.favicon;
  const siteSettings = data.siteSettings;
  const products = data.products;
  const hero = data.favorite[0];
  console.log(hero)

  return (
    <>
      <SEO 
        title={`${pageData.title} - ${data.siteSettings.title}`} 
        icon={urlFor(siteSettings.seo.icon).url()}  
      />
      <Navbar
        mobileMenu={mobile}
        navigation={siteSettings.navigation}
        logo={urlFor(siteSettings.logo).url()}
      />
      <main className='px-10 py-4 2xl:mx-52'>
        <section className='grid grid-cols-1 gap-4 xl:grid-cols-5 mb-4'>
          <div className="xl:col-span-2 xl:flex xl:justify-center">
            <Image 
              src={urlFor(hero.favorite.image).url()}
              width={500}
              height={500}
              alt={hero.favorite.image.alt}
              className='xl:w-full'
            />
          </div>
          <div className='xl:col-span-3'>
            <TextComponent
              text={hero.description}
            />
            <div className='my-2'>
              <Link className='bg-pine text-white px-4 py-2' href={`/my-work/${hero.favorite.slug.current}`}>
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full'>
            {products.map((item, index) => (
              <Product
                key={index}
                href={item.slug.current}
                type={item.type}
                name={item.title}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
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