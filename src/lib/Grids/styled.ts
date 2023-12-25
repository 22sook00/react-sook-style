import styled from "@emotion/styled";
import { GridStyleProps } from ".";

export const GridContainer = styled.div<GridStyleProps>`
  display: grid;
  grid-template-columns: ${({ col }) => col ?? "1fr"};
  grid-template-rows: ${({ row }) => row ?? "1fr"};
  gap: ${({ gap }) => (gap ? `${gap}px` : 0)};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ item }) => item};
`;
