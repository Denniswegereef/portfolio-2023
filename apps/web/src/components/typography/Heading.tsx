import { styled } from "@/theme/stitches.config";
import { fontSizesHeading } from "@/theme/font-sizes";

export const Heading = styled("h1", {
  variants: {
    size: {
      1: {
        fontSize: fontSizesHeading["1"],
        lineHeight: 0.8,
      },
      2: {
        fontSize: fontSizesHeading["2"],
        lineHeight: 0.8,
      },
      3: {
        fontSize: fontSizesHeading["3"],
        lineHeight: 0.8,
      },
      4: {
        fontSize: fontSizesHeading["4"],
        lineHeight: 0.8,
      },
    },
  },
});
