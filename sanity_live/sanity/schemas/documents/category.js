export default {
  type: 'document',
  name: 'category',
  title: 'Kategori',
  fields: [
    {
      type: 'slug',
      name: 'name',
      title: 'Navn',
      validation: (Rule) => Rule.required(),
      options: {
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 50),
      },
    },
  ],
  preview: {
    select: {
      title: 'name.current',
    },
  },
}
