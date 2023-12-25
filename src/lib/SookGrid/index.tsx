import React from "react";
import * as SC from "./styled";

export interface GridStyleProps {
  col?: string;
  row?: string;
  gap?: number;
  item?: string;
  justify?: string;
}

interface GridProps extends GridStyleProps {
  children: React.ReactNode;
  customStyle?: any;
}

function SookGrid({
  children,
  col = "1fr",
  row = "1fr",
  gap = 12,
  item = "flex-start",
  justify = "flex-start",
  customStyle,
}: GridProps) {
  return (
    <SC.GridContainer
      className="sook_grid"
      col={col}
      row={row}
      gap={gap}
      item={item}
      justify={justify}
      style={{ ...customStyle }}
    >
      {children}
    </SC.GridContainer>
  );
}

export default SookGrid;
