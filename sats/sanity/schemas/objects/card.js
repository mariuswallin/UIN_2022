const card = {
  name: "card",
  title: "Card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "text",
      title: "Ledetekst",
      type: "string",
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image'
    },
    {
      name: 'link',
      title: 'Linker',
      type: 'array',
      of: [{type: 'link'}]
    }
  ],
};

export default card;