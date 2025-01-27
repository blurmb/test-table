import React, { ButtonHTMLAttributes } from "react";
import * as styles from "./AppButton.module.scss";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
}
export const AppButton = ({
  children,
  className,
  size = "medium",
  variant = "primary",
  ...props
}: AppButtonProps) => {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return styles.small;
      case "medium":
        return styles.medium;
      case "large":
        return styles.large;
      default:
        return "";
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "danger":
        return styles.danger;
      default:
        return "";
    }
  };

  return (
    <button
      className={
        styles.button +
        " " +
        className +
        " " +
        getSizeClass() +
        " " +
        getVariantClass()
      }
      {...props}
    >
      {children}
    </button>
  );
};
