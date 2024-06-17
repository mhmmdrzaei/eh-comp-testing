
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
        name: 'usecase',
        title: 'Use Cases',
        type: 'usecasesContainer'
      },
      {
        name: 'hql',
        title: 'Heading Quote Logo',
        type: 'headingQuoteLogo'
      },
      {
        name: 'education',
        title: 'Education Box',
        type: 'education'
      },
      {
        name: 'opportunitiesBox',
        title: 'Opportunities',
        type:  'opportunitiesContainer'
      },
      {
        name: 'staffContainer',
        title: 'Staff Testimonials',
        type: 'staffHighlight'
      }
    
    
    ]
  }