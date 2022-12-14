export default {
    name: 'repeaterBlocks',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }
    ],
    preview: {
        select: {
            media: 'image',
            title: 'text'
        }
    }
}