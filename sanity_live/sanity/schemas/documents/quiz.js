export default {
  type: 'document',
  name: 'quiz',
  title: 'Quiz',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Tittel',
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Spørsmål og svar',
      name: 'questions',
      type: 'array',
      of: [{ type: 'question' }],
    },
  ],
}
