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
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full md:w-3/4'>
            {products.map((item, index) => (
              // <Link 
              //   href={`products/${item.slug.current}`}
              //   className=''
              //   key={index}
              // >
              //   <div  
              //     className='border border-dark-blue-200 rounded-lg hover:border-dark-blue-400 ease-in-out duration-200 md:col-span-1'
              //   >
              //     <div className='bg-cover rounded-md h-60' style={{backgroundImage: `url(${urlFor(item.image).url()})`}} />
              //     <div className='px-2 mb-2 flex justify-between items-end'>
              //       <div>
              //         <p className='font-sans font-light'>{item.type}</p>
              //         <h3 className='text-xl font-semibold'>{item.title}</h3>
              //         <p className='text-lg'>${item.price}.00</p>
              //       </div>
              //       <div>
              //         Test Button
              //       </div>
              //     </div> 
              //   </div>
              // </Link>
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