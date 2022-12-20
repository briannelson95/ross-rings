import React, { useState } from 'react'
import { client } from "../lib/sanity";
import { contact } from "../lib/queries";
import SEO from '../components/SEO'
import Image from "next/image";
import { urlFor } from '../lib/modules'
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Link from 'next/link';
import Footer from '../components/Footer';
import NewNav from '../components/NewNav';
import ContactForm from '../components/ContactForm';

export default function Contact({ data }) {
  const mobile = data.siteSettings.favicon;
  const siteSettings = data.siteSettings;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: name,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  }


  return (
    <>
      <SEO 
        title={`${data.siteSettings.title}`} 
        icon={urlFor(siteSettings.seo.icon).url()}  
      />
      <main>
        <section className="h-full w-full relative pt-4 lg:pt-8 lg:mb-16">
          <NewNav
              navigation={siteSettings.navigation}
              logo={urlFor(siteSettings.logo).url()}
          />
        </section>
        <section className="my-2 px-10 2xl:mx-52 lg:m-10 lg:p-8">
          <ContactForm />
        </section>
      </main>
      <Footer
          navigation={siteSettings.navigation}
          logo={urlFor(siteSettings.logo).url()}
      />
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
