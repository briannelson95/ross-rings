import {PortableText} from '@portabletext/react'

const components = {
    block: {
        h1: ({children}) => <h1 className='text-3xl font-bold'>{children}</h1>,
        h2: ({children}) => <h2 className='text-2xl'>{children}</h2>,
        h3: ({children}) => <h3 className='text-xl'>{children}</h3>,
        h4: ({children}) => <h4 className='text-lg'>{children}</h4>,
    },
    list: {
        bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
        number: ({children}) => <ol className="mt-lg">{children}</ol>,
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
  return <PortableText value={text} components={components} />
}

export default TextComponent