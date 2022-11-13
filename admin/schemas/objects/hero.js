export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string'
        },
        {
            name: 'mainContent',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Hero Image',
            type: 'mainImage'
        },
        {
            name: 'cta',
            title: 'Call to Action',
            type: 'cta'
        }
    ],
}