const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    }, 
    {
      name: 'text',
      type: 'string',
      title: 'Ledetekst'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Bilde'
    },
    {
      name: 'links',
      type: 'array',
      title: 'Linker',
      of: [{type: 'link'}]
    }
  ]
}

export default hero;