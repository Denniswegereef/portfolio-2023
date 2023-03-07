import {CogIcon} from '@sanity/icons'

import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'global',
  title: 'Global',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      type: 'string',
      name: 'globalPassword',
      title: 'Global password',
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      description: 'description',
    },
    prepare({description}) {
      return {
        subtitle: 'Global',
        description,
      }
    },
  },
})
