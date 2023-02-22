import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      type: 'text',
      name: 'overview',
      title: 'Overview',
      rows: 5,
      validation: (rule) => rule.max(155).required(),
    }),

    // defineField({
    //   name: 'overview',
    //   description: 'Used for the <meta> description tag for SEO',
    //   title: 'Overview',
    //   type: 'array',
    //   of: [
    //     // Paragraphs
    //     defineArrayMember({
    //       lists: [],
    //       marks: {
    //         annotations: [],
    //         decorators: [
    //           {
    //             title: 'Italic',
    //             value: 'em',
    //           },
    //           {
    //             title: 'Strong',
    //             value: 'strong',
    //           },
    //         ],
    //       },
    //       styles: [],
    //       type: 'block',
    //     }),
    //   ],
    //   validation: (rule) => rule.max(155).required(),
    // }),
  ],
})
