export default {
    name: 'work',
    title: 'My Work',
    type: 'document',
    __experimental_actions:[
        /*"create", /*"delete",*/ "update", "publish"
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            readOnly: ({document}) => document?.title
        },
        {
            name: 'favorite',
            title: 'My Favorite',
            type: 'reference',
            to: [{type: 'products'}],
            description: "Choose one of your products to be your favorite."
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'gallery'
        }
    ],
}