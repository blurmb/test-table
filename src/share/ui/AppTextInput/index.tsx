import React, {
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import * as styles from "./AppTextInput.module.scss";

interface AppTextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "small" | "medium" | "large";
}
export const AppTextInput = forwardRef<HTMLInputElement, AppTextInputProps>(
  ({ children, className, size = "medium", ...props }, ref) => {
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
        ref={ref}
        className={styles.input + " " + className + " " + getSizeClass()}
        {...props}
      >
        {children}
      </input>
    );
  },
);
