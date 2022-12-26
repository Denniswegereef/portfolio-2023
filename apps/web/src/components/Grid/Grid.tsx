import { styled } from "@/theme/stitches.config";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
  gridColumnGap: "$3",
  gridRowGap: "$3",
});

export const GridItem = styled("div", {
  width: "100%",
  height: "150px",
  backgroundColor: "$primary",
  display: "flex",

  variants: {
    // Create a loop for this?
    start: {
      1: {
        gridColumnStart: "1",
      },

      2: {
        gridColumnStart: "2",
      },

      3: {
        gridColumnStart: "3",
      },

      4: {
        gridColumnStart: "4",
      },

      5: {
        gridColumnStart: "5",
      },

      6: {
        gridColumnStart: "6",
      },

      7: {
        gridColumnStart: "7",
      },
    },

    end: {
      1: {
        gridColumnEnd: "1",
      },

      2: {
        gridColumnEnd: "2",
      },

      3: {
        gridColumnEnd: "3",
      },

      4: {
        gridColumnEnd: "4",
      },

      5: {
        gridColumnEnd: "5",
      },

      6: {
        gridColumnEnd: "6",
      },

      7: {
        gridColumnEnd: "7",
      },
    },
  },
});
