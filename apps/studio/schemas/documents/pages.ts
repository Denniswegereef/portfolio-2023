import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'pages',
  type: 'document',
  title: 'Content pages',

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
  ],
  // fields: [
  //   defineField({
  //     type: 'string',
  //     name: 'title',
  //     title: 'Title',
  //     validation: (rule) => rule.required(),
  //   }),

  //   defineField({
  //     type: 'slug',
  //     name: 'slug',
  //     title: 'Slug',
  //     options: {
  //       source: 'title',
  //     },
  //     validation: (rule) => rule.required(),
  //   }),

  //   defineField({
  //     type: 'seo',
  //     name: 'seo',
  //     title: 'Seo',
  //     validation: (rule) => rule.required(),
  //   }),
  // ],
})
