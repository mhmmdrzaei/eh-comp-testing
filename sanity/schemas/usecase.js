export default {
  
  
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
    
  
  }