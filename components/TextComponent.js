import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '../lib/modules'

const components = {
    block: {
        h1: ({children}) => <h1 className='text-3xl font-bold'>{children}</h1>,
        h2: ({children}) => <h2 className='text-6xl leading-10'>{children}</h2>,
        h3: ({children}) => <h3 className='text-xl'>{children}</h3>,
        h4: ({children}) => <h4 className='text-lg'>{children}</h4>,
        normal: ({children}) => <><p className='col-span-1'>{children}</p></>
    },
    list: {
        bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
        number: ({children}) => <ol className="mt-lg">{children}</ol>,
    },
    types: {
      mainImage: ({value}) => <>
        <div className='aspect-squre h-80'>
          <Image src={urlFor(value).url()} height={500} width={500} alt={value.alt ? value.alt : ''} loading='lazy' className='object-cover h-full w-full' />
        </div>
      </>,
    },
    marks: {
        // Ex. 1: custom renderer for the em / italics decorator
        em: ({children}) => <em>{children}</em>,
    
        // Ex. 2: rendering a custom `link` annotation
        link: ({value, children}) => {
          const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
          return (
            <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
              {children}
            </a>
          )
        },
    },
}

const TextComponent = ({ text }) => {
  return (
    <div className='grid grid-cols-1 gap-24 lg:grid-cols-2 test'>
      <PortableText value={text} components={components} />
    </div>
  )
}

export default TextComponent
