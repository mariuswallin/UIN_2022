export default {
  type: 'object',
  name: 'answere',
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
      title: 'Riktig?',
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
