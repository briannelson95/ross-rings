export default {
    name: 'home',
    title: 'Homepage',
    type: 'document',
    __experimental_actions:[
        /*"create", /*"delete",*/ "update", "publish"
    ],
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: Rule => Rule.required(),
            readOnly: ({document}) => document?.title
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            readOnly: ({document}) => document?.title
        },
        {
            name: 'imageCarousel',
            type: 'carousel',
            title: 'Image Carousel'
        },
        {
            name: 'cta',
            title: 'Call to Action',
            type: 'cta',
            description: 'Where do you want your users to go?'
        },
        {
            name: 'content',
            title: 'Main Content',
            type: 'blockContent'
        },
        {
            name: 'featuredProducts',
            title: 'Featured Products',
            type: 'featuredProduct',
            description: 'Only the first 4 items will show'
        }
    ],
}