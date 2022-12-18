import { styled } from "@/theme/stitches.config";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "60ch",

  px: "$3",
  mx: "auto",

  variants: {
    size: {
      sm: {
        maxWidth: "$sm",
      },

      md: {
        maxWidth: "$md",
      },

      lg: {
        maxWidth: "$lg",
      },

      xl: {
        maxWidth: "$xl",
      },
    },
  },
});
