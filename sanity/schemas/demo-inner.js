export default {
  name: "demoInner",
  title: "Demo Inner",
  type: "object",
  fields: [
    {
      name: 'demoTitle',
      title: 'Demo Title',
      type: 'string',
    },
   {
    name:"heading",
    title: "Heading",
    type: "string",
   },
   {
    name: "headingDesc",
    title: "Heading Description",
    type: 'text',
   },
   {
    name: 'demoPointers',
    title: 'Demo Points',
    type: 'object',
    fields: [
      {
        name: 'demoPointersHeading',
        title: 'Heading',
        type:'string',

      },
      {
       name: 'demoPoints',
       title: 'points',
       type: 'array',
       of: [
        {
          name: 'Point',
          title: 'point',
          type: 'string'
        },
       ],
      },
    ],
   },
  ],
};
