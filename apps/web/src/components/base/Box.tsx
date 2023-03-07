import { styled } from "@stitches/react";
import { motion } from "framer-motion";

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

export const MotionBox = motion(Box);
