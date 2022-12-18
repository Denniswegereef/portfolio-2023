import { styled } from "@/theme/stitches.config";

export const Text = styled("p", {
  fontSize: "$1",

  variants: {
    size: {
      1: {
        fontSize: "$1",
        lineHeight: 0.8,
      },
      2: {
        fontSize: "$2",
        lineHeight: 0.8,
      },
      3: {
        fontSize: "$3",
        lineHeight: 0.8,
      },
    },
  },
});
