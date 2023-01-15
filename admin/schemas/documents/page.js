export default {
    name: 'page',
    title: 'Pages',
    type: 'document',
    __experimental_actions:[
        "create", "delete", "update", "publish"
    ],
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: 'content',
            title: 'Main Content',
            type: 'blockContent',
        },
        // {
        //     name: 'textRepeater',
        //     title: 'Text Repeater',
        //     type: 'array',
        //     of: [
        //         {type: 'repeaterBlocks'},
        //         {type: 'textObject'},
        //         {type: 'image'}
        //     ],
        //     description: 'Use this if you want the content to contain both Images and Text'
        // },
        {
            name: 'featuredTitle',
            title: 'Featured Title',
            type: 'string',
            validation: Rule => Rule.max(96).warning('Try to keep this 96 characters or less.')
        },
        {
            name: 'filter',
            title: 'Filter',
            type: 'boolean',
            default: true,
            description: 'Use this to remove the black/white filter from the hero image.'
        },
        {
            name: 'image',
            title: 'Featured Image',
            type: 'mainImage'
        },
        
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string',
            description: 'Use this to display preview text on other pages.'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'openGraph',
            description: 'Use this to set custom SEO meta-data for each page. Heads up! This will override site settings.'
        }
    ],
}