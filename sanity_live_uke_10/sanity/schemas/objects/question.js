import answer from './answer'

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
      type: 'array',
      name: 'answeres',
      title: 'Svar',
      of: [{ type: 'answer' }],
      validation: (Rule) =>
        Rule.custom((answeres) => {
          // console.log(answeres)
          return answeres?.filter((answer) => answer?.correct)?.length > 0
            ? true
            : 'Må ha minst ett riktig svar'
        }),
    },
  ],
}
