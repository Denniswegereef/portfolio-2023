import { Box } from "@/components/base";
import { Heading } from "@/components/typography";
import { styled } from "@stitches/react";
import { useControls } from "leva";
import { CONTROLS } from "./controls";
import { splitOnLetter } from "./helpers";
import { motion } from "framer-motion";
import { LETTER_VARIANT } from "./variants-two";

export function TestTwo() {
  const { textOne, textTwo } = useControls(CONTROLS);

  return (
    <TextContainer>
      <AnimationHeading word={textOne} />
      <AnimationHeading word={textTwo} isFlipped />
    </TextContainer>
  );
}

function AnimationHeading({
  word,
  isFlipped,
}: {
  word: string;
  isFlipped?: boolean;
}) {
  const { visible } = useControls(CONTROLS);

  const splittedWord = splitOnLetter(word);
  return (
    <StyledHeading
      size="xl"
      css={{ position: isFlipped ? "absolute" : "", top: 0 }}
    >
      {splittedWord.map((letter, index) => (
        <LetterContainer>
          <HiddenLetter aria-hidden="true">{letter}</HiddenLetter>
          <Letter
            initial={false}
            variants={LETTER_VARIANT}
            animate={
              isFlipped
                ? visible
                  ? "visible"
                  : "hidden"
                : visible
                ? "hidden"
                : "visible"
            }
            custom={index}
          >
            {letter}
          </Letter>
        </LetterContainer>
      ))}
    </StyledHeading>
  );
}

const StyledHeading = styled(Heading, {
  display: "flex",
  letterSpacing: -1,
});

const TextContainer = styled("div", {
  position: "relative",
});

const LetterContainer = styled("span", {
  position: "relative",
  overflow: "hidden",
});

const HiddenLetter = styled("span", {
  visibility: "hidden",
});

const Letter = styled(motion("span"), {
  position: "absolute",
  left: 0,
  transformOrigin: "top right",
});
