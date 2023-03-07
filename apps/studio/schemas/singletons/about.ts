import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
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

    // defineField({
    //   name: 'description',
    //   description: 'Short description in the hero',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),
  ],

  preview: {
    prepare() {
      return {
        subtitle: 'About',
        description: 'About',
      }
    },
  },
})
