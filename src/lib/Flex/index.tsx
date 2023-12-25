import React from "react";
import * as SC from "./styled";

export interface FlexStyleProps {
  col?: boolean;
  row?: boolean;
  gap?: number;
  wrap?: string;
  item?: string;
  justify?: string;
}

interface FlexProps extends FlexStyleProps {
  children: React.ReactNode;
  customStyle?: any;
}

function SookFlex({
  children,
  col = true,
  row,
  wrap,
  item = "flex-start",
  justify = "flex-start",
  gap = 12,
  customStyle,
}: FlexProps) {
  return (
    <SC.SookFlexContainer
      col={col}
      row={row}
      wrap={wrap}
      item={item}
      gap={gap}
      justify={justify}
      style={{ ...customStyle }}
    >
      {children}
    </SC.SookFlexContainer>
  );
}

export default SookFlex;
