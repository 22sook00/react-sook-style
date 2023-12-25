import styled from "@emotion/styled";
import { FlexStyleProps } from ".";

export const SookFlexContainer = styled.div<FlexStyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ item }) => item};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => (gap ? `${gap}px` : 0)};
`;
