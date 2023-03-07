import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'list',
  title: 'List',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      type: 'string',
      name: 'answer',
      title: 'Answer',
      validation: (rule) => rule.required(),
    }),
  ],
})
