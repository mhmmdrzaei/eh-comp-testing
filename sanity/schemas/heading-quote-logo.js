export default {
    title: 'Heading Quote Logo',
    name: 'headingQuoteLogo',
    type: 'object',
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
        name: "colClass",
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
        title: 'Heading',
        name: 'hqlHeading',
        type: 'string',
        group: ["page"],
      },
      {
        name: "headingClass",
        type: "string",
        group: ["css"],
        description: "If you need a custom heading, add classes here for it",
      },

      {
        title: 'Logos',
        name: 'hqlLogos',
        type: 'array',
        group: ["page"],
        of: [
          {
            title: 'Logo Image',
            name: 'hqlImage',
            type: 'image',
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Company Name /Caption',
              },
            ]

          }
        ]
      },
      {
        title: 'Quote',
        name: 'hqlQuoteContainer',
        type: 'object',
        group: ["page"],
        fields: [
          {
            title: 'Quote',
            name: 'hqlQuote',
            type: 'text',
          },
          {
            title: 'Person Name',
            name: 'hqlPerson',
            type: 'string',

          },
          {
           title: 'Person Title',
           name: 'hqlTitle',
           type: 'string', 
          }
        ]
      }, 
      {
        name: "quoteCSS",
        title: "Quote Container CSS",
        type: "string",
        group: ["css"],
      },


    ]
  
    
  
  }