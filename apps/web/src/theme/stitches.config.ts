import { createStitches } from "@stitches/react";
import { media } from "./media";
import { space } from "./space";
import { sizes } from "./sizes";
import { fontSizesText } from "./font-sizes";
import { utils } from "./utils";
import colors from "./colors";

export const { styled, getCssText } = createStitches({
  theme: {
    colors,
    media,
    space,
    sizes,
    fontSizes: fontSizesText,
  },
  utils,
});
