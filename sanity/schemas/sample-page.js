import usecaseOne from "./usecase"
import social from "./social"
export default {
    name: 'samplePage',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Use Cases',
        name: 'usecasesContainer',
        type: 'object',
        fields: [
          {
            title: 'Heading',
            name: 'usecasesContHeading',
            type: 'string'
          },
          {
            title: 'Use Cases',
            name: 'usecases',
            type: 'array',
            of: [
              {
                name: 'usecaseOne',
                title: 'Use Case',
                type: 'object',
                fields: [
                  {name: 'useCaseHead', type: 'string', title: 'Use Case Head'},
                  {name: 'useCaseBenefits', type: 'text', title: 'Use Case Benefits'},
                  {name: 'useCaseSolution', type: 'text', title: 'Use Case Solution'},
            
                ]
              }
            ]
          }

        ]
      },
      {
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
    
    
    ]
  }