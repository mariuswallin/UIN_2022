const category = {
  title: 'Kategori',
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Kategori',
      name: 'title',
      type: 'string',
      description: 'Dette er navnet på kategorien',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default category
