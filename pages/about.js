import React from 'react'
import { client } from "../lib/sanity";
import { about } from "../lib/queries";
import SEO from '../components/SEO'
import Image from "next/image";
import { urlFor } from '../lib/modules'
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Link from 'next/link';

export default function About({ data }) {
  const pageData = data.pageData[0];
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
        {pageData.title}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(about)

  return {
      props: {
          data
      }
  }
}
