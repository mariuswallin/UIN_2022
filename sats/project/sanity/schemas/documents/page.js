const page = {
  name: 'page',
  title: 'Side',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'title',
      title: 'Tittel',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'lead',
      title: 'Ledetekst',
      type: 'text'
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'cards'
    }
  ]
}

export default page;