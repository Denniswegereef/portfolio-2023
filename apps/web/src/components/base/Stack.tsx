import { styled } from "@stitches/react";

export const Stack = styled("div", {
  variants: {
    stack: {
      horizontal: {
        display: "flex",
        gap: "$3",
      },

      vertical: {
        display: "flex",
        flexDirection: "column",
        gap: "$3",
      },
    },
  },

  defaultVariants: {
    stack: "horizontal",
  },
});
