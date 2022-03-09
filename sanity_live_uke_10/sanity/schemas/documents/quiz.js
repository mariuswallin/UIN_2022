export default {
  type: 'document',
  name: 'quiz',
  title: 'Quiz',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Tittel',
      description: 'Her kan du legge til tittel',
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'questions',
      title: 'Spørsmål og svar',
      of: [{ type: 'question' }],
    },
    {
      type: 'reference',
      name: 'category',
      title: 'Kategori',
      to: { type: 'category' },
    },
  ],
}
