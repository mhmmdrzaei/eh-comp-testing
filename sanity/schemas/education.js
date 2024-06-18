export default {
  name: "education",
  title: "Education Box",
  type: "object",
  groups: [
    {
      name: "page",
      title: "Page Content",
      default: true,
    },
    {
      name: "css",
      title: "Styling",
    },

  ],
  fields: [
    {
      name: "containerClass",
      type: "string",
      group: ["css"],
    },

    {
      name: "darkBg",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
      group: ["css"],
    },

    {
      name: "edHeading",
      title: "Heading",
      type: "object",
      group: ["page"],
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
      name: "headingClass",
      type: "string",
      group: ["css"],
      description: "If you need a custom heading, add classes here for it",
    },
    {
      name: "subHeadingClass",
      title: "Sub-Heading Class",
      description: "Add color customization for sub-header (ex. text-lime)",
      type: "string",
      group: ["css"],
    },
    {
      name: "edListpoints",
      title: "List Points",
      type: "array",
      group: ["page"],
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
      group: ["page"],
    },
    {
      title: "Image",
      name: "edImag",
      type: "image",
      group: ["page"],
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },
    {
      name: "imgCss",
      title: "Additional Image Css (bg-center is default)",
      type: "string",
      group: ["css"],
    },
    {
      name: "imgTop",
      title: "Image on TOP of content",
      type: "boolean",
      initialValue: false,
      group: ["css"],
    },
    {
      name: "imgDark",
      title: "Is the image dark?",
      type: "boolean",
      initialValue: false,
      group: ["css"],
    },
    {
      name: "imgHeight",
      title: "Image height (h-450 is default)",
      type: "string",
      group: ["css"],
    },
    {
        name: 'ctaButton',
        title: 'CTA Button',
        type: 'object',
        group: ["page"],
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
    },
  ],
};
