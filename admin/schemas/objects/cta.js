export default {
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'slug'
        },
    ],
}