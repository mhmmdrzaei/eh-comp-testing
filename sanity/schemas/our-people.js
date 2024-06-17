export default {
  
  
    title: 'Staff Highlight',
    name: 'staffHighlight',
    type: 'object',
    fields: [

      {
        title: 'Heading',
        name: 'staffHeadingContainer',
        type: 'object',
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
        title: 'Staff Testimonials ',
        name: 'staffTestiCont',
        type: 'array',
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
        title: "Image",
        name: "pplImag",
        type: "image",
        fields: [
          {
            name: "caption",
            type: "string",
            title: "Caption",
          },
        ],
      },
   
    ]
    
  
  }