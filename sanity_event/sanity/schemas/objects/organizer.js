const organizer = {
  name: "organizer",
  type: "object",
  title: "Arrangør",
  fields: [
    { name: "name", type: "string", title: "Navn" },
    { name: "description", type: "string", title: "Beskrivelse" },
    { name: "certified", type: "boolean", title: "Sertifisert?" },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
};

export default organizer;
