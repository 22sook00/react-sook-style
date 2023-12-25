import React from "react";
import * as SC from "./styled";

export interface ButtonProps {
  children: string | React.ReactNode;
  theme?: "primary" | "light" | "outline" | "error" | "warning" | "success";
  size?: "xs" | "sm" | "md" | "lg";
  type?: "submit" | "button" | "reset";
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  customStyle?: any;
}

function SookButton({
  children,
  onClick,
  size = "md",
  type = "button",
  disabled = false,
  theme = "primary",
  customStyle,
}: ButtonProps) {
  return (
    <SC.ButtonContainer
      className="sook_button"
      disabled={disabled}
      size={size}
      theme={theme}
      type={type}
      onClick={onClick}
      style={{ ...customStyle }}
    >
      {children}
    </SC.ButtonContainer>
  );
}

export default SookButton;
