import React from "react";
import * as SC from "./styled";

export interface CardProps {
  children: string | React.ReactNode;
  size?: "sm" | "md" | "lg";
  title?: string;
  onClick?: () => void;
  customStyle?: any;
}

function SookCard({
  children,
  size = "md",
  title,
  onClick,
  customStyle,
}: CardProps) {
  return (
    <SC.CardContainer
      onClick={onClick}
      size={size}
      className="sook_card"
      style={{ ...customStyle }}
    >
      {title && <SC.CardHeader>{title}</SC.CardHeader>}
      <SC.CardBottom>{children}</SC.CardBottom>
    </SC.CardContainer>
  );
}

export default SookCard;
