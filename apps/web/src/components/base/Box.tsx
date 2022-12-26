import { styled } from "@stitches/react";

export const Box = styled("div", {
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
});
