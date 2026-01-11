export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Event Title',
      validation: (Rule: any) => Rule.required(),
    },
    {name: 'description', type: 'text', title: 'Description'},
    {
      name: 'image',
      type: 'image',
      title: 'Event Image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    },
    {
      name: 'eventDate',
      type: 'datetime',
      title: 'Event Date & Time',
      validation: (Rule: any) => Rule.required(),
    },
    {name: 'location', type: 'string', title: 'Location (e.g., Lagos, Nigeria or Virtual)'},
    {name: 'ctaText', type: 'string', title: 'Button Text', initialValue: 'Register Now'},
    {name: 'ctaLink', type: 'url', title: 'Button Link'},
    {name: 'featured', type: 'boolean', title: 'Featured Event?', initialValue: false},
  ],
  preview: {
    select: {
      title: 'title',
      date: 'eventDate',
      media: 'image',
    },
    prepare(selection: any) {
      const {title, date} = selection
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
      }
    },
  },
}
