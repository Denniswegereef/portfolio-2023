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
      name: 'description',
      description: 'Short description in the hero',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'expertises',
      title: 'Expertises',
      description: 'Expertises in the hero',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'highlightedProjects',
      title: 'Highlighted projects',
      description: 'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'project'}],
        }),
      ],
    }),

    defineField({
      name: 'archivedProjects',
      title: 'Archived projects',
      description: 'List of archived projects',
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
      description: 'description',
    },
    prepare({description}) {
      return {
        subtitle: 'Home',
        description,
      }
    },
  },
})
