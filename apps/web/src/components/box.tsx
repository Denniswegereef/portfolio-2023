import { styled } from "@stitches/react";

export const Box = styled("div", {
  variants: {
    stack: {
      horizontal: {
        display: "flex",
        gap: "$1",
      },

      vertical: {
        display: "flex",
        flexDirection: "column",
        gap: "$1",
      },
    },
  },
});
