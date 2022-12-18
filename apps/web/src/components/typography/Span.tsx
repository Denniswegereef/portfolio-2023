import { styled } from "@/theme/stitches.config";

export const Span = styled("span", {
  color: "blue",

  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
    },
  },
});
