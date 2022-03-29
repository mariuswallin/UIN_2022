export default {
  name: "movie",
  title: "Movie",
  type: "document",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Tittle",
    },
    {
      type: "reference",
      name: "actor",
      title: "Actor",
      to: { type: "actor" },
    },
  ],
};
