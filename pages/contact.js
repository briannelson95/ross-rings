import React from 'react'
import { client } from "../lib/sanity";
import { contact } from "../lib/queries";
import SEO from '../components/SEO'
import Image from "next/image";
import { urlFor } from '../lib/modules'
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Link from 'next/link';

export default function Contact({ data }) {
  const mobile = data.siteSettings.favicon;
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
        {data.siteSettings.title}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(contact)

  return {
      props: {
          data
      }
  }
}
