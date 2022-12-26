import { styled } from "@/theme/stitches.config";
import { fontSizesHeading } from "@/theme/font-sizes";

export const Heading = styled("h1", {
  variants: {
    size: {
      xs: {
        fontSize: fontSizesHeading["xs"],
        lineHeight: 0.8,
      },
      sm: {
        fontSize: fontSizesHeading["sm"],
        lineHeight: 0.8,
      },
      md: {
        fontSize: fontSizesHeading["md"],
        lineHeight: 0.8,
      },
      lg: {
        fontSize: fontSizesHeading["lg"],
        lineHeight: 0.8,
      },
      xl: {
        fontSize: fontSizesHeading["2xl"],
        lineHeight: 0.8,
      },
      "2xl": {
        fontSize: fontSizesHeading["2xl"],
        lineHeight: 0.8,
      },
    },
  },
});
