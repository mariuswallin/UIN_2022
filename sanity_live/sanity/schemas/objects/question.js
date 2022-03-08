export default {
  type: 'object',
  name: 'question',
  title: 'Spørsmål og svar',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Spørsmål',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Svar',
      name: 'answeres',
      type: 'array',
      validation: (Rule) =>
        Rule.custom((answeres) => {
          // console.log(answeres)
          return answeres?.filter((answer) => answer?.correct)?.length > 0 ||
            answeres?.length === 0
            ? true
            : 'Må ha minst ett riktig svar'
        }),
      of: [{ type: 'answere' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      answeres: 'answeres',
    },
    prepare(selection) {
      const { title, answeres } = selection
      return {
        title: title,
        subtitle: answeres ? `${answeres.length} svar` : '0 svar',
      }
    },
  },
}
