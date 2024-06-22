export default {
  name: "demos",
  title: "Demo Options",
  type: "object",
  fields: [

    {
      name: 'selfGuided',
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
          name: 'descriptionFields',
          type: 'demoInner',
          group: ["page"]
        },
        {
          name: "containerClass",
          type: "string",
          group: ["css"],
        },
        {
          name: 'titleClass',
          type: "string",
          description: 'define color and additional styling here',
          group: ["css"]
        }
      ]
    },
    {
      name: 'personalized',
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
          name: 'descriptionFields',
          type: 'demoInner',
          group: ["page"]
        },
        {
          name: "containerClass",
          type: "string",
          group: ["css"],
        },
        {
          name: 'titleClass',
          type: "string",
          description: 'define color and additional styling here',
          group: ["css"]
        }
      ]
    }
  ],
};
