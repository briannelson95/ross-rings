export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'image',
            type: 'mainImage' 
        },
        {
            name: 'link',
            title: 'Link to Product',
            type: 'url',
            description: 'Place the products Etsy link here'
        },
        {
            name: 'type',
            title: 'Product Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Ring', value: 'Ring'},
                    {title: 'Misc', value: 'Misc'}
                ]
            }
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        }
    ],
}