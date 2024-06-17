export default {
  
  
    title: 'Opportunities',
    name: 'opportunitiesContainer',
    type: 'object',
    fields: [

      {
        title: 'Heading',
        name: 'oppHeadingContainer',
        type: 'object',
        fields: [
          {
            title:'Sub Head',
            type: 'string',
            name: 'oppSubHead'
          },
          {
            title:'Header',
            type: 'string',
            name: 'oppHeader'
          },
          {
            title:'Description',
            type: 'text',
            name: 'oppDesc'
          },

          
        ]
      },
      {
        title:'Number of Countries',
        type: 'string',
        name: 'oppNumber'
      },

      {
        title: 'Listed Opportunities',
        name: 'oppListedContainer',
        type: 'array',
        of: [
          {
            title: 'Listed Opportunity',
            name: 'oppEach',
            type: 'object',
            fields: [
              {
                title:'Position',
                type: 'string',
                name: 'oppPosition'
              },
              {
                title:'Link',
                type: 'string',
                name: 'oppPosURL'
              },
              {
                title: 'Number of Open Roles',
                type: 'string',
                name: 'oppRolesOpen'
              },
              {
                title: 'Opens in a new tab?',
                name: 'tabopen',
                type: 'boolean',
                initialValue: true
              }

            ]
          }
          
        ]
      },
      {
        name: 'ctaBox',
        title: 'Large CTA Box',
        type: 'object',
        fields: [
          {
            name: 'ctaHeading',
            type: 'string',
            title: 'Heading'
          },
          {
            name: 'oppctaButton',
            title: 'CTA Button',
            type: 'object',
            fields: [
                {
                    name: 'oppCTAText',
                    title: 'Link Text',
                    type: 'string'
                },
                {
                    name: 'oppCTAurl',
                    title: 'Link URL',
                    type: 'string'
                },
                {
                    title: 'Opens in a new tab?',
                    name: 'opptabopen',
                    type: 'boolean'
                  }
            ]
        }

        ] 

      }
    ]
    
  
  }