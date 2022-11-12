export default {
    name: 'featuredProduct',
    type: 'array',
    of: [
        {
            type: 'reference',
            to: {type: 'products'}
        }
    ],
}