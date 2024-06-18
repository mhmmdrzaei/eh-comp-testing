export default {
  
  
    title: 'Staff Highlight',
    name: 'staffHighlight',
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
        name: "darkBg",
        type: "boolean",
        options: {
          layout: "checkbox",
        },
        group: ["css"],
      },

      {
        title: 'Heading',
        name: 'staffHeadingContainer',
        type: 'object',
        group: ["page"],
        fields: [
          {
            title:'Sub Head',
            type: 'string',
            name: 'staffSubHead'
          },
          {
            title:'Header',
            type: 'string',
            name: 'staffHeader'
          },

          
        ]
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
        title: 'Staff Testimonials ',
        name: 'staffTestiCont',
        type: 'array',
        group: ["page"],
        of: [
          {
            title: 'Testimonial Box',
            name: 'testiEach',
            type: 'object',
            fields: [
              {
                title:'Quote',
                type: 'text',
                name: 'staffQuote'
              },
              {
                title:'Atrribution',
                type: 'string',
                name: 'staffAttri'
              },
            

            ]
          }
          
        ]
      },
      {
        name: "testiCSS",
        title: "Testimonial Container CSS",
        description: "Add color customization for sub-header (ex. text-lime)",
        type: "string",
        group: ["css"],
      },
      {
        title: "Image",
        name: "pplImag",
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
   
    ]
    
  
  }