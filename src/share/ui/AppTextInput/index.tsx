import React, { InputHTMLAttributes, PropsWithChildren } from "react";
import * as styles from "./AppTextInput.module.scss";

interface AppTextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "small" | "medium" | "large";
}
export const AppTextInput = ({
  children,
  className,
  size = "medium",
  ...props
}: AppTextInputProps) => {
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
  return (
    <input
      type="text"
      className={styles.input + " " + className + " " + getSizeClass()}
      {...props}
    >
      {children}
    </input>
  );
};
