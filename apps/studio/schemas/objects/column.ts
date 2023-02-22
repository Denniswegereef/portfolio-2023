import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      description: 'Column title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'columnOne',
      title: 'Column one',
      description: 'First column that will appear',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'list',
        }),
      ],
    }),
  ],
})
