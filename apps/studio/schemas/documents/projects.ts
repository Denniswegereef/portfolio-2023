import {DocumentIcon, ImageIcon} from '@sanity/icons'
import {SlugValidationContext, defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentIcon,
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
      name: 'coverImage',
      title: 'Cover Image',
      description:
        'This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value: string, context: SlugValidationContext) =>
          context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'caption',
      title: 'Big caption',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'columnFirst',
      title: 'First column',
      description: 'First column that will appear',
      type: 'column',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'columnSecond',
      title: 'Second column',
      description: 'Second column that will appear, this one is optional',
      type: 'column',
    }),

    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    // defineField({
    //   name: 'client',
    //   title: 'Client',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),

    // defineField({
    //   name: 'site',
    //   title: 'Site',
    //   type: 'url',
    //   validation: (rule) => rule.required(),
    // }),

    // defineField({
    //   name: 'awards',
    //   title: 'Awards',
    //   type: 'array',
    //   of: [{type: 'string'}],
    //   options: {
    //     layout: 'tags',
    //   },
    // }),

    // validation: (rule) => rule.required(),

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
    //   validation: (rule) => rule.max(500).required(),
    // }),

    // defineField({
    //   name: 'description',
    //   title: 'Project Description',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'block',
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'Link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'Url',
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //       styles: [],
    //     }),

    //     // Custom blocks
    //     // defineArrayMember({
    //     //   name: 'timeline',
    //     //   type: 'timeline',
    //     // }),

    //     defineField({
    //       type: 'image',
    //       icon: ImageIcon,
    //       name: 'image',
    //       title: 'Image',
    //       options: {
    //         hotspot: true,
    //       },
    //       preview: {
    //         select: {
    //           imageUrl: 'asset.url',
    //           title: 'caption',
    //         },
    //       },
    //       fields: [
    //         defineField({
    //           title: 'Caption',
    //           name: 'caption',
    //           type: 'string',
    //         }),
    //         defineField({
    //           name: 'alt',
    //           type: 'string',
    //           title: 'Alt text',
    //           description: 'Alternative text for screenreaders. Falls back on caption if not set',
    //         }),
    //       ],
    //     }),
    //   ],
    // }),
  ],
})
