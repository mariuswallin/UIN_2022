export default {
  name: "contact",
  title: "Kontakt",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Avsender",
      type: "string",
    },
    {
      name: "message",
      title: "Beskjed",
      type: "text",
    },
  ],
  preview: {
    select: {
      name: "name",
      created: "_createdAt",
    },
    prepare({ name, created }) {
      return {
        title: `Fra: ${name}`,
        subtitle: `Dato: ${created ? new Date(created).toDateString() : null}`,
      };
    },
  },
};
