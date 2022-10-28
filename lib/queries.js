export const homepage = `{
    "pageData": *[_type == "page" && title == "Homepage"]{
        title,
        slug,
        hero,
        image,
        content,
        seo
    },
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
        navigation[]->{
            title,
            slug
        },
        mobileMenu,
        seo
    }
}`

export const allProducts = `{
    "pageData": *[_type == "page" && title == "Products"]{
        title,
        slug,
        hero,
        image,
        content,
        seo
    },
    "products": *[_type == "products"],
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
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
        hero,
        image,
        content,
        seo
    },
    "siteSettings": *[_type == "siteSettings"][0]{
        title,
        contact,
        logo,
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
        navigation[]->{
            title,
            slug
        },
        mobileMenu,
        seo
    }
}`