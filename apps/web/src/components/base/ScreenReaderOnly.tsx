import { styled } from "@/theme/stitches.config";

export const ScreenReaderOnly = styled("div", {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,

  variants: {
    isVisible: {
      true: {
        position: "static",
        width: "auto",
        height: "auto",
        padding: 0,
        margin: 0,
        overflow: "visible",
        clip: "auto",
        whiteSpace: "normal",
      },
    },
  },

  defaultVariants: {
    isVisible: "false",
  },
});
