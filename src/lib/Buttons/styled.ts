import styled from "@emotion/styled";
import { colorPalette } from "../../style/color";
import { ButtonProps } from ".";

export const getColor = (theme: string) => {
  switch (theme) {
    case "primary":
      return {
        background: colorPalette.primary.primary40,
        color: colorPalette.black,
        hover: colorPalette.primary.primary50,
      };
    case "success":
      return {
        background: colorPalette.success.success40,
        color: "#fff",
        hover: colorPalette.success.success50,
      };

    case "error":
      return {
        background: colorPalette.error.error40,
        color: "#fff",
        hover: colorPalette.error.error50,
      };

    case "warning":
      return {
        background: colorPalette.warning.warning40,
        color: colorPalette.black,
        hover: colorPalette.warning.warning50,
      };

    case "light":
      return {
        background: colorPalette.light.light10,
        color: colorPalette.light.light60,
        hover: colorPalette.light.light20,
      };

    case "outline":
      return {
        background: colorPalette.white,
        border: `1px solid ${colorPalette.black}`,
        color: colorPalette.black,
      };
  }
};

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

  ${({ theme }) => theme && getColor(theme as string)};

  &:hover {
    transition: all 0.3s;
    background-color: ${({ theme }) =>
      theme && getColor(theme as string)?.hover};
  }
`;
