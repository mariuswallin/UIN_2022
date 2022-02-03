const event = {
  title: "Event",
  name: "event",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      description: "Dette er tittelen",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Dette er den unike url-en",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Bilde",
      type: "customImage",
    },
    {
      title: "Ingress",
      name: "preAmble",
      type: "text",
      description: "Dette er ingressen",
    },
    {
      title: "Innhold",
      name: "body",
      type: "content",
    },
    {
      title: "Kategori",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category.title",
    },
    prepare(selection) {
      const { title, category } = selection;
      return {
        title,
        subtitle: `Kategori: ${category}`,
      };
    },
  },
};

export default event;
