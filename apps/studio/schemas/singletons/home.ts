import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      type: 'seo',
      name: 'seo',
      title: 'Seo',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'descriptionFirst',
      description: 'Description one',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'descriptionSecond',
      description: 'Description one',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    // defineField({
    //   name: 'description',
    //   description: 'Longer description',
    //   title: 'Description',
    //   type: 'array',
    //   of: [
    //     // Paragraphs
    //     defineArrayMember({
    //       lists: [],
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'internalLink',
    //             type: 'object',
    //             title: 'Internal link',
    //             fields: [
    //               {
    //                 name: 'reference',
    //                 type: 'reference',
    //                 title: 'Reference',
    //                 to: [{type: 'project'}],
    //               },
    //             ],
    //           },
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'External link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'URL',
    //               },
    //               {
    //                 title: 'Open in new tab',
    //                 name: 'blank',
    //                 description: 'Read https://css-tricks.com/use-target_blank/',
    //                 type: 'boolean',
    //               },
    //             ],
    //           },
    //         ],
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
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       type: 'block',
    //     }),
    //   ],
    //   validation: (rule) => rule.max(500).required(),
    // }),

    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description: 'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'project'}],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
