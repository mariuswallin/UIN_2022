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
    },
  ],
  preview: {
    select: {
      title: 'name.current',
    },
  },
}
