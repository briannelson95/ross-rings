export const homepage = `{
    "pageData": *[_type == "page" && title == "Homepage"],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    },
}`