export const LETTER_VARIANT = {
  visible: (index: number) => ({
    x: "110%",
    opacity: 0,
    transition: {
      delay: index * 0.09,
      ease: "backInOut",
    },
  }),
  hidden: (index: number) => ({
    x: "0%",
    opacity: 1,
    transition: {
      delay: index * 0.09,
      ease: "backInOut",
    },
  }),
};
