import type * as Stitches from '@stitches/react'

const utils = {
  marginX: (value: Stitches.PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  marginY: (value: Stitches.PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
}

export default utils
