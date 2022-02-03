const customImage = {
  name: "customImage",
  title: "Bilde",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alternativeText",
      title: "Alternativ tekst",
      type: "string",
    },
    {
      name: "caption",
      title: "Bildetekst",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "position",
      title: "Plassering",
      type: "string",
      options: {
        isHighlighted: true,
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};

export default customImage;
