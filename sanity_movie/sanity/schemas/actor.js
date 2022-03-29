export default {
  name: "actor",
  title: "Actor",
  type: "document",
  fields: [
    {
      type: "string",
      name: "fullName",
      title: "Hele navnet",
    },
    {
      title: "Navn",
      name: "name",
      type: "slug",
    },
  ],
};
