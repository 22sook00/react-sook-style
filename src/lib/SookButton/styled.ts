import styled from "@emotion/styled";
import { ButtonProps } from ".";
import { colorPalette } from "./color";

export const ButtonContainer = styled.button<Pick<ButtonProps, "size">>`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: unset;
  padding: ${({ size }) =>
    size === "xs"
      ? "4px 6px"
      : size === "sm"
      ? "5px 8px"
      : size === "md"
      ? "6px 10px"
      : "8px 12px"};
  font-size: ${({ size }) =>
    size === "xs"
      ? "12px"
      : size === "sm"
      ? "14px"
      : size === "md"
      ? "16px"
      : "18px"};
  font-weight: ${({ size }) =>
    size === "xs" || size === "sm" ? "500" : size === "md" ? "600" : "700"};
  cursor: pointer;

  background-color: ${colorPalette.error.error40};
  &:hover {
    transition: all 0.3s;
    background-color: ${colorPalette.error.error50};
  }
`;
