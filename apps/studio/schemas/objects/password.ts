import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'passwordBlock',
  title: 'Password protected',
  type: 'object',
  fields: [
    defineField({
      title: 'Lock project',
      name: 'password',
      type: 'boolean',
    }),

    defineField({
      title: 'Password',
      name: 'overwritePassword',
      description: 'Overwrite global password',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning(`A title shouldn't be more than 20 characters.`),
    }),
  ],
})
