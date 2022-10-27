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
            title: 'Main Content',
            type: 'simpleBlockContent'
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