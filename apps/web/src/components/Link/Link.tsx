import { styled } from "@/theme/stitches.config";
import NextLink from "next/link";

export const Link = styled(NextLink, {
  color: "currentColor",

  "&:hover": {
    textDecoration: "underline",
  },
});
