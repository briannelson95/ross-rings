import React from 'react'
import { client } from "../../lib/sanity";
import { allProducts } from "../../lib/queries";
import SEO from '../../components/SEO'
import Image from "next/image";
import { urlFor } from '../../lib/modules'
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Link from 'next/link';

export default function Products({ data }) {
  const pageData = data.pageData[0];
  const mobile = data.siteSettings.mobileMenu;
  const siteSettings = data.siteSettings;
  const products = data.products;
  console.log(products)

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
      <main className='p-4'>
        <div className='flex'>
          {products.map((item, index) => (
            <div key={index} className='border p-2 border-dark-blue-200 rounded-md hover:border-dark-blue-400 ease-in-out duration-200'>
              <Link 
                href={`products/${item.slug.current}`}
                className=''
              >
                <div>
                  <Image 
                    src={urlFor(item.image).url()}
                    height={100}
                    width={100}
                  />
                  <h3 className='text-xl font-medium'>{item.title}</h3>
                </div>
              </Link>
            </div>
            
          ))}
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