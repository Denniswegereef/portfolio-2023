import { styled } from "@/theme/stitches.config";

import { Chivo_Mono } from "@next/font/google";
import { CONTROLS } from "./controls";
import { useControls } from "leva";

import { TestOne } from "./test-one";
import { TestTwo } from "./test-two";

const ChivoMono = Chivo_Mono({ subsets: ["latin"] });

export function ScrollExperiencePage() {
  return (
    <Container className={ChivoMono.className}>
      <TestOne />
      <TestTwo />
    </Container>
  );
}

const Container = styled("div", {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  gap: 50,
  top: 75,
  left: 50,
});
