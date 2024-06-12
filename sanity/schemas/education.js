export default {
  name: "education",
  title: "Education Box",
  type: "object",
  fields: [
    {
      name: "edHeading",
      title: "Heading",
      type: "object",
      fields: [
        {
          name: "edSubHead",
          title: "Sub Head",
          type: "string",
        },
        {
          name: "edHead",
          title: "Title",
          type: "string",
        },
      ],
    },
    {
      name: "edListpoints",
      title: "List Points",
      type: "array",
      of: [
        {
          name: "listpoint",
          title: "List Point",
          type: "string",
        },
      ],
    },
    {
      name: "edText",
      title: "Text Description",
      type: "text",
    },
    {
      title: "Image",
      name: "edImag",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },
    {
        name: 'ctaButton',
        title: 'CTA Button',
        type: 'object',
        fields: [
            {
                name: 'edCTAText',
                title: 'Link Text',
                type: 'string'
            },
            {
                name: 'edCTAurl',
                title: 'Link URL',
                type: 'string'
            },
            {
                title: 'Opens in a new tab?',
                name: 'tabopen',
                type: 'boolean'
              }
        ]
    }
  ],
};
