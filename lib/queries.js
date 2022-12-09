export const homepage = `{
    "pageData": *[_type == "home" && title == "Homepage"]{
        title,
        slug,
        imageCarousel[] {
            alt,
            caption,
            asset->
        },
        image,
        content,
        cta {
            title,
            url-> 
        },
        featuredProducts[0...5]->{
            image,
            slug,
            title,
            price,
            title
        }
    },
    "testimonials": *[_type == "singleTestimonial"],
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
        favicon,
        navigation[]->{
            title,
            slug
        },
        mobileMenu,
        seo
    },
    "process": *[_type == "page" && title == "Process"][0]{
        excerpt,
        image,
        title,
        filter,
        slug
    }
}`

export const allProducts = `{
    "pageData": *[_type == "page" && title == "My Work"]{
        title,
        slug,
        hero,
        image,
        featuredTitle,
        content,
        seo
    },
    "products": *[_type == "products"],
    "favorite": *[_type == "work"]{
        favorite->{
            title,
            image,
            slug
        },
        description
    },
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
        favicon,
        navigation[]->{
            title,
            slug
        },
        mobileMenu,
        seo
    }
}`

export const about = `{
    "pageData": *[_type == "page" && title == "About"]{
        title,
        slug,
        filter,
        hero,
        image,
        content,
        seo
    },
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
        favicon,
        navigation[]->{
            title,
            slug
        },
        mobileMenu,
        seo
    }
}`

export const contact = `{
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
        favicon,
        navigation[]->{
            title,
            slug
        },
        mobileMenu,
        seo
    }
}`

export const allPages = `{
    "pageData": *[_type == "page" && slug.current == $slug][0],
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
        favicon,
        navigation[]->{
            title,
            slug
        },
        mobileMenu,
        seo
    }
}`

export const product = `{
    "productData": *[_type == "products" && slug.current == $slug][0] {
        title,
        image,
        link,
        price,
        type,
        description,
        gallery[]
    },
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
        favicon,
        navigation[]->{
            title,
            slug
        },
        mobileMenu,
        seo
    }
}`