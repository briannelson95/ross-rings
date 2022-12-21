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
            name: 'autoScroll',
            title: 'Auto Scroll',
            type: 'boolean',
            description: 'Do you want the Carousel Images to auto scroll? If turned on, they will scroll every 6 seconds.'
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
            description: 'Only the first 5 items will show'
        }
    ],
}