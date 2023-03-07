import { Heading } from "@/components/typography";
import { styled } from "@/theme/stitches.config";

import { CONTROLS } from "./controls";
import { useControls } from "leva";
import { motion } from "framer-motion";
import {
  CONTAINER_VARIANT_ONE,
  CHILD_VARIANT_ONE,
  CONTAINER_VARIANT_TWO,
  CHILD_VARIANT_TWO,
} from "./variants-one";
import { splitOnLetter } from "./helpers";

export function TestOne() {
  const { textOne, textTwo, visible } = useControls(CONTROLS);

  return (
    <TextContainer>
      <StyledHeading
        size="xl"
        animate={visible ? "show" : "hidden"}
        variants={visible ? CONTAINER_VARIANT_ONE : CONTAINER_VARIANT_TWO}
        isAbsolute
      >
        {splitOnLetter(textOne).map((letter, index) => (
          <MotionSpan
            key={`${letter}-${index}`}
            variants={CHILD_VARIANT_ONE}
            initial={false}
            isFlipped={visible}
          >
            {letter}
          </MotionSpan>
        ))}
      </StyledHeading>
      <StyledHeading
        size="xl"
        animate={visible ? "hidden" : "show"}
        variants={visible ? CONTAINER_VARIANT_TWO : CONTAINER_VARIANT_ONE}
      >
        {splitOnLetter(textTwo).map((letter, index) => (
          <MotionSpan
            key={`${letter}-${index}`}
            variants={CHILD_VARIANT_TWO}
            initial={false}
            isFlipped={!visible}
          >
            {letter}
          </MotionSpan>
        ))}
      </StyledHeading>
    </TextContainer>
  );
}

const TextContainer = styled("div", {
  position: "relative",
});

const MotionSpan = styled(motion("span"), {
  display: "block",
  transformOrigin: "right",

  variants: {
    isFlipped: {
      true: {
        transformOrigin: "left",
      },
    },
  },
});

const StyledHeading = styled(motion(Heading), {
  textTransform: "uppercase",
  display: "flex",

  variants: {
    isAbsolute: {
      true: {
        position: "absolute",
        top: 0,
        left: 0,
      },
    },
  },
});
