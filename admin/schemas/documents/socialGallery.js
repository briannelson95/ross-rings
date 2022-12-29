export default {
    name: 'socialGallery',
    title: 'Social Image Gallery',
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
            name: 'imageCarousel',
            type: 'carousel',
            title: 'Image Gallery'
        },
    ],
}