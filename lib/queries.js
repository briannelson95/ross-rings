export const homepage = `{
    "pageData": *[_type == "page" && title == "Homepage"]{
        title,
        slug,
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
        seo
    }
}`