import type * as Stitches from "@stitches/react";

type MarginValue = Stitches.PropertyValue<"margin">;
type PaddingValue = Stitches.PropertyValue<"padding">;

export const utils = {
  // Margin
  m: (value: MarginValue) => ({
    margin: value,
  }),
  mt: (value: MarginValue) => ({
    marginTop: value,
  }),
  mr: (value: MarginValue) => ({
    marginRight: value,
  }),
  mb: (value: MarginValue) => ({
    marginBottom: value,
  }),
  ml: (value: MarginValue) => ({
    marginLeft: value,
  }),
  mx: (value: MarginValue) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: MarginValue) => ({
    marginTop: value,
    marginBottom: value,
  }),

  // Padding
  p: (value: PaddingValue) => ({
    padding: value,
  }),
  pt: (value: PaddingValue) => ({
    paddingTop: value,
  }),
  pr: (value: PaddingValue) => ({
    paddingRight: value,
  }),
  pb: (value: PaddingValue) => ({
    paddingBottom: value,
  }),
  pl: (value: PaddingValue) => ({
    paddingLeft: value,
  }),
  px: (value: PaddingValue) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: PaddingValue) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  aspectRatio: () => (ratio: "1:1" | "1:2" | "2:1" | "16:9" | "5:3") => {
    const [n1, n2] = ratio.split(":");
    const paddingTop = 100 / (Number(n1) / Number(n2));

    return {
      height: 0,
      paddingTop: `${paddingTop}%`,
    };
  },
};
