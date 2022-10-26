import { HiAdjustments } from "react-icons/hi"

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: HiAdjustments,
    __experimental_actions: [
        /*"create", /*"delete",*/ "update", "publish"
    ],
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'contact',
            type: 'contact'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image'
        },
        {
            name: 'navigation',
            title: 'Navigation Menu',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'page'}
                    ]
                }
            ]
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'openGraph'
        }
    ],
}