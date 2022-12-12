import { createStitches } from '@stitches/react'
import media from './media'
import fontSizes from './font-sizes'
import colors from './colors'

export const { styled, getCssText } = createStitches({
  theme: {
    // fonts: {
    //   system: 'system-ui',
    // },
    colors,
    media,
    fontSizes,
  },
})
