// @ts-ignore
import {PortableText} from '@portabletext/react'
import { urlFor } from '../lib/modules'

import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponent:any = {
    types: {
        mainImage: ({ value }) => {
            return (
                <div className='relative w-full h-96 m-10 mx-auto'>
                    <Image 
                        className='object-contain'
                        src={urlFor(value).url()} 
                        alt={value.alt ? value.alt : 'Ross Ring Image'}
                        fill
                    />
                </div>
            );
        }
    },
    list: {
        bullet: ({ children }) => {
            <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
        },
        number: ({ children }) => {
            <ol className='mt=lg list-decimal'>{children}</ol>
        },
    },
    block: {
        h1: ({ children }) => {
            <h1 className='text-5xl py-10 font-bold'>{children}</h1>
        },
        h2: ({ children }) => {
            <h2 className='text-4xl py-10 font-bold'>{children}</h2>
        },
        h3: ({ children }) => {
            <h3 className='text-3xl py-10 font-bold'>{children}</h3>
        },
        h4: ({ children }) => {
            <h4 className='text-2xl py-10 font-bold'>{children}</h4>
        },
        blockquote: ({ children }) => (
            <blockquote className='border-l-slate-500 border-l-4 pl-5 py-5 my-5'>
                {children}
            </blockquote>
        ),
        text: ({ children }) => {
            <p className='m-10 lg:text-2xl'>{children}</p>
        }
    },
    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("")
                ? "noreferrer noopener"
                : undefined;
            
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-slate-800"
                >
                    {children}
                </Link>
            )
        }
    }
}



const TextComponent = ({ text }) => {
  return (
    <div className=''>
      <PortableText value={text} components={RichTextComponent} />
    </div>
  )
}

export default TextComponent
