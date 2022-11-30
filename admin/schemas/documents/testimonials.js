export default {
    name: 'singleTestimonial',
    type: 'document',
    title: 'All Testimonials',
    fields: [
        {
            name: 'name',
            title: 'Customer Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'testimonial',
            title: 'Testimonial',
            type: 'blockContent'
        }
    ]
}