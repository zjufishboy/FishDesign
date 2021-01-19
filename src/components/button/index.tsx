import React from "react";
import "./index.less";

interface ButtonProps {
  type?:
    | "primary"
    | "default"
    | "dashed"
    | "text"
    | "link";
  children?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children = "",
  type = "default",
  onClick,
}) => {
  return (
    <button
      className={`fish-btn fish-btn-${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
