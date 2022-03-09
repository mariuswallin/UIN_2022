export default {
  type: 'object',
  name: 'answer',
  title: 'Svar',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Tittel',
    },
    {
      type: 'boolean',
      name: 'correct',
      title: 'Riktig svar',
    },
  ],
  preview: {
    select: {
      title: 'title',
      isCorrect: 'correct',
    },
    prepare(selection) {
      const { title, isCorrect } = selection
      return {
        title: title,
        subtitle: isCorrect ? 'Riktig' : '',
      }
    },
  },
}
