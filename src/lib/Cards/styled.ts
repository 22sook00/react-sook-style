import styled from "@emotion/styled";
import { colorPalette } from "../../style/color";
import { CardProps } from ".";
export const CardContainer = styled.div<Pick<CardProps, "size">>`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 6px;
  border: 1px solid ${colorPalette.light.light20};

  max-width: ${({ size }) =>
    size === "sm" ? "300px" : size === "md" ? "600px" : "800px" || size};

  min-height: ${({ size }) =>
    size === "sm" ? "200px" : size === "md" ? "300px" : "600px" || size};

  cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
  &:hover {
    transition: all 0.5s;
    background-color: ${({ onClick }) =>
      onClick ? colorPalette.light.light5 : "#fff"};
  }
`;
export const CardHeader = styled.header`
  color: 1px solid ${colorPalette.black};
  font-weight: bold;
  font-size: larger;
  padding: 20px;
  line-height: 26px;
  border-bottom: 1px solid ${colorPalette.light.light20};
`;
export const CardBottom = styled.section`
  padding: 20px;
  line-height: 24px;
  font-size: 14px;
  color: ${colorPalette.light.light80};
`;
