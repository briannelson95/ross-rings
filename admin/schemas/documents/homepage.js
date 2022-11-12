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
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            readOnly: ({document}) => document?.title
        },
        {
            name: 'hero',
            type: 'hero'
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