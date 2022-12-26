import { styled } from "@/theme/stitches.config";

export const Text = styled("p", {
  fontSize: "$1",

  variants: {
    size: {
      sm: {
        fontSize: "$sm",
        lineHeight: 0.8,
      },
      base: {
        fontSize: "$base",
        lineHeight: 0.8,
      },
      lg: {
        fontSize: "$lg",
        lineHeight: 0.8,
      },
      xl: {
        fontSize: "$2xl",
        lineHeight: 0.8,
      },
      "2xl": {
        fontSize: "$2xl",
        lineHeight: 0.8,
      },
    },
  },
});
