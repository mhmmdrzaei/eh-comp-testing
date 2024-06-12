export default {
    title: 'Heading Quote Logo',
    name: 'headingQuoteLogo',
    type: 'object',
    fields: [
      {
        title: 'Heading',
        name: 'hqlHeading',
        type: 'string',
      },
      {
        title: 'Logos',
        name: 'hqlLogos',
        type: 'array',
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


    ]
  
    
  
  }