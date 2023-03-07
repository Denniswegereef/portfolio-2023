import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'listWithTitle',
  title: 'List with title',
  description: 'Title above, this is optional',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'list',
        }),
      ],
    }),
  ],
})
