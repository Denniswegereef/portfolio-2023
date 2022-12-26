import { styled } from "@/theme/stitches.config";

export const Button = styled("button", {
  outline: "inherit",
  border: "none",

  cursor: "pointer",

  variants: {
    variant: {
      button: {
        padding: "10px 20px",

        backgroundColor: "$black",
        color: "$white",

        transition: "background-color 0.25s ease-in-out",

        "&:hover": {
          backgroundColor: "grey",
        },
      },

      link: {
        padding: 0,
        color: "$black",
        backgroundColor: "unset",

        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },

  defaultVariants: {
    variant: "button",
  },
});
